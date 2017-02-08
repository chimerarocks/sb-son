<?php

namespace Blog\Form;

use Zend\Form\Element;
use Zend\Form\Form;

class PostForm extends Form
{
	public function __construct($name = null)
	{
		parent::__construct('post');

		//é obrigatório, mas pode ser vazio, pra quando for criar não der pau.
		$this->add([
			'name' => 'id',
			'required' => true,
			'allow_empty' => true
		]);

		$this->add([
			'name' => 'id',
			'type' => Element\Hidden::class
		]);

		$this->add([
			'name' => 'title',
			'type' => Element\Text::class,
			'options' => [
				'label' => 'Title'
			]
		]);

		$this->add([
			'name' => 'content',
			'type' => Element\Textarea::class,
			'options' => [
				'label' => 'Content'
			]
		]);

		$this->add([
			'name' => 'submit',
			'type' => Element\Submit::class,
			'attributes' => [
				'value' => 'Go',
				'id' => 'submitbutton'
			]
		]);
	}
}