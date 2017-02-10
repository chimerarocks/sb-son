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
    	if ($this->authService->hasIdentity()) {
    		return $this->redirect()->toRoute('admin-blog/blog');
    	}

    	$form = new LoginForm();
    	$messageError = null;

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
    				return $this->redirect()->toRoute('admin-blog/blog');
    			} else {
    				$messageError = 'Login inválido.';
    			}
    		}
    	}

    	return new ViewModel([
    		'form' => $form,
    		'messageError' => $messageError
    	]);
    }

    public function logoutAction()
    {
    	$this->authService->clearIdentity();
    	return $this->redirect()->toRoute('login');
    }
}