import random
secret_number = random.randint(1, 10)
print("--- Number Guessing Game ---")
while True:
    guess = int(input("Guess a number between 1 and 10: "))
    if guess == secret_number:
        print("عاش جدا يا ايقونة! تخمينك صح")
        break
    else:
       print("غلط ي عرص! الرقم الصح كان:", secret_number)
