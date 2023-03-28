command = ""
car_started = False

# dry - dont. repeat. yourself.

while True:
    command = input("> ").lower()
    if command == 'start': 
        if car_started:
            print('Car is already started')
        else:
            car_started = True  
            print('Car started...')
    elif command == 'stop':
        if not car_started:
            print('Car is already stopped')
        else:
            car_started = False
            print('Car Stopped')
    elif command == 'help': 
        print("""
start - to start your car
stop - to stop your car
quit - to quit
        """)
    elif command == 'quit':
        break
    else:
        print("Sorry i dont understand that")