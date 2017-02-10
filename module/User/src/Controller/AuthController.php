<?php

namespace User\Controller;

use User\Form\LoginForm;
use Zend\Authentication\AuthenticationServiceInterface;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class AuthController extends AbstractActionController
{
	private $authService;

	public function __construct(AuthenticationServiceInterface $authService)
	{
		$this->authService = $authService;
	}

    public function loginAction()
    {
    	$form = new LoginForm();

    	if ($this->getRequest()->isPost()) {
    		$data = $this->getRequest()->getPost();
    		$form->setData($data);
    		if ($form->isValid()) {
    			$formData = $form->getData();
    			$authAdapter = $this->authService->getAdapter();
    			$authAdapter->setIdentity($formData['username']);
    			$authAdapter->setCredential($formData['password']);

    			$result = $this->authService->authenticate();
    			if ($result->isValid()) {
    				var_dump($this->authService->getIdentity());
    			}
    		}
    	}

    	return new ViewModel([
    		'form' => $form
    	]);
    }

    public function logoutAction()
    {
    	return new ViewModel();
    }
}