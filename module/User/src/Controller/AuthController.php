<?php

namespace User\Controller;

use User\Form\LoginForm;
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
    	return new ViewModel([
    		'form' => new LoginForm()
    	]);
    }

    public function logoutAction()
    {
    	return new ViewModel();
    }
}