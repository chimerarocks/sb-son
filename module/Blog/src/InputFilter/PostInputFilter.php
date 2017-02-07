<?php

namespace Blog\InputFilter;

use Zend\InputFilter\InputFilter;

class PostInputFilter extends InputFilter
{
	public function __construct()
	{
		$this->add([
			'name' => 'title',
			'required' => true,
			'filters' => [
				['name' => StringTrim::class],
				['name' => StripsTags::class]
			]
		]);

		$this->add([
			'name' => 'content',
			'required' => true
		]);
	}
}