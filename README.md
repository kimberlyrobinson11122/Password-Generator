# Password Generator 


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
This deployment is to showcase the new password generator, conforms to requirements, allows the user to select parameters with minimum length of password forced as to conform to industry standards. 


## Production Link
[Password Generator Live Webpage](https://kimberlyrobinson11122.github.io/Password-Generator/)


## Solved
1. Password length wasn't working-fixed

2. Users choices weren't being confirmed that one of each would for sure be in the password that is generated, used while loop-fixed

3. Password generator wasn't giving an output, problem fixed in the last commit-fixed


## Images
Screenshot of the first build: 
![First Build Image](<assets/images/PassGenerator First Build Mar 2024.jpg>)

Screenshot of the error message when not entering a proper number for password length: 
![Error message when user enters an invalid password length](<assets/images/Error message when needing min length Mar 2024.jpg>)

Screenshot of the error message when not entering any parameters after length of password: 
![Error message when user doesn't select criteria](<assets/images/Error message when no parameters are selected Mar 2024.jpg>)


## Credits
This was using starter code provided


## Test
Consistent testing of links throughout each iteration, and using console log along the way which I decided to keep in the code for testing in the future


## Authors and acknowledgment
Appreciation to the Instructor, TAs, and Tutors at EdX Berkeley


## Support
If you need help with anything please email me at kimberly.robinson@outlook.com


## Project status
This has been deployed and is live and in process of being sent to the sustainability team