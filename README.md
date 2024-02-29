# Password Generator Starter Code

## User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Name
Password Generator

## Description
This deployment is to showcase the new password generator, conforms to requirements

## Solved
1. 

2. 

3. 


## Images
Screenshot of the first build:
![My Portfolio Initial Build](./assets/images/fixed%20links%20and%20spacing.png)

Screenshot of the project cards as they should be, adjusting to sizing from center to one column when shrinking the screen:
![Project Card Adjustment Success](./assets/images/fixed%20sizing%20issue%20with%20different%20devices.png)

## Credits
This was using starter code


## Test
Consistent testing of links throughout each iteration


## Authors and acknowledgment
Appreciation to the Instructor and TAs at EdX Berkeley


## Support
If you need help with anything please email me at kimberly.robinson@outlook.com


## Project status
This has been deployed and sent to the sustainability team


from VS Code Editor/Readme:

This project is about creating a password generator. The majority of the HTML has been done for you, all you have to do is fill in the actual generator.

* When the generate button is clicked, show the user the a series of prompts asking them for critieria. You will want to ask the following questions (it's recommended you use a `confirm` dialog unless otherwise specified):

    * What length do they want? (It's recommended you use a `prompt` for this)
    My question: How long would you like your password to be? (must be at least 8 characters long)
    if userInput is invalid, "var userInput = window.prompt("How long would you like your password to be? (must be at least 8 characters long)");"
    repeat until they select correct data
    
    * Do they want uppercase letters? 
    My Question: Would you like uppercase letters in your password?

    * Do they want lowercase letters?
    My Question: Would you like lowercase letters in your password?

    * Do they want numeric characters?
    My Question: Would you like numbers in your password?

    * Do they want special characters?
    My Question: Would you like special characters in your password?

* If the user inputs invalid data (must select at least one character type, length must be between 8 and 128), then repeat the popups until they select correct data.

* Once the criteria are selected, then use a random number generator to generate the new password and return it from the function. There are a number of ways to do this, the instructional staff can help with hints on this if you need.
