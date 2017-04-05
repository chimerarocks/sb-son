class Bank1Account(object):

	def __init__(self, number, total):
		self.number = number
		self.__total = total

	def deposit(self,value):
		self.__total += value

	def withdraw(self,value):
		self.__total -= value
		self.__total -= 1

	def get_total(self):
		return self.__total

class Bank2Account(Bank1Account):

	def __init__(self, number, total, cdv):
		super(Bank2Account, self).__init__(number, total)
		self.cdv = cdv

	def withdraw(self, value):
		self._Bank1Account__total -= value
		self._Bank1Account__total -= 2