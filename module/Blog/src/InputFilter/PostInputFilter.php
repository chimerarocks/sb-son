<?php

namespace Blog\InputFilter;

use Zend\Filter\StringTrim;
use Zend\Filter\StripTags;
use Zend\InputFilter\InputFilter;
use Zend\Validator\NotEmpty;

class PostInputFilter extends InputFilter
{
	public function __construct()
	{
		//é obrigatório, mas pode ser vazio, pra quando for criar não der pau.
		$this->add([
			'name' => 'id',
			'required' => false,
			'allow_empty' => true
		]);

		$this->add([
			'name' => 'title',
			'required' => true,
			'filters' => [
				['name' => StringTrim::class],
				['name' => StripTags::class]
			],
			'validators' => [
				[
					'name' => NotEmpty::class,
					'options' => [
						'messages' => [
							NotEmpty::IS_EMPTY => 'O campo é requerido.'
						]
					]
				]
			]
		]);

		$this->add([
			'name' => 'content',
			'required' => true,
			'validators' => [
				[
					'name' => NotEmpty::class,
					'options' => [
						'messages' => [
							NotEmpty::IS_EMPTY => 'O campo é requerido.'
						]
					]
				]
			]
		]);
	}
}