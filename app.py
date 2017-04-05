from chimerarocks.math.calc import add, sub
from chimerarocks.string.str import sum_string
from car import Car
from bank import *

add(2,2)
sub(3,1)

sum_string("acabou", "agora")

gol = Car('Gol', 'Volks', '2015')
print(gol.name)
print(Car.doors)
gol.drive()
Car.hello()

Car.show()


print('--------------------------')

joao = Bank2Account(123546,5000)

print(joao.get_total())

joao.deposit(100)

print(joao.get_total())

joao.withdraw(50)

print(joao.get_total())