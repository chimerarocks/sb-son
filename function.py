def call_numbers():
    for number in range(0,10):
        print(number)

call_numbers()

def call_numbers_with_limit(limit):
    list = range(0,10)
    for number in list[0:limit]:
        print(number)

call_numbers_with_limit(3)
