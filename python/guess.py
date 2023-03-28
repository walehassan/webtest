secret_number = 9
guess_count = 0
guess_limit = 3


# while loop is used to execute a block of code multiple times. useful for interactive programs.
# while the condition is true, execute the first code block, otherwise execute the next statement.
while guess_count < guess_limit:
    guess = int(input('Guess:  '))
    # increment guess count 
    guess_count += 1
    if guess == secret_number:
        print('You won!')
        # if the user makes the right guess, use break statement to terminate the loop.
        break
# while statements can have an else statement, similar to if statements.
else:
    print('Sorry, you lost')