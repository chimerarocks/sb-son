<?php

namespace Blog\Model;

use Zend\Db\TableGateway\TableGatewayInterface;

class PostTable 
{
	private $tableGateway;

	public function __construct(TableGatewayInterface $tableGateway)
	{
		$this->tableGateway = $tableGateway;
	}

	public function fetchAll()
	{
		return $this->tableGateway->select();
	}

	public function save(Post $post)
	{
		$data = [
			'title' => $post->title,
			'content' => $post->content
		];
		if ((int) $post->id === 0) {
			$this->tableGateway->insert($data);
			return;
		}
	}

	public function find($id)
	{
		$id = (int) $id;
		$rowset = $this->tableGateway->select(['id' => $id]);
		$row = $rowset->current();

		if (!$row) {
			throw new RuntimeException(sprintf(
				'Could not retrieve the row %d', $id
			));
		}

		return $row;
	}
}