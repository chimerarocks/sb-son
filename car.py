class Car:

	doors = 4

	def __init__(self, name, maker, year):
		self.name = name
		self.maker = maker
		self.year = year

	def drive(self):
		print(self.name + ' started')

	'''
	Método statico é independente de instância
	'''
	@staticmethod
	def hello():
		print('hello car')

	'''
	Possui acesso aos atributos estáticos da classe, mas não da instância
	'''
	@classmethod
	def show(cls):
		print(cls.doors)