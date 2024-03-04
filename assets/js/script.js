// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordUpper;
var passwordLower;
var passwordNumber;
var passwordSpecialch;

// Write password to the #password input
function generatePassword() {

    var passwordLength = window.prompt("How long would you like your password to be? (must be at least 8 characters long)");
        console.log(passwordLength);
            if (Number.isNaN(parseInt(passwordLength)) || passwordLength < 8 || passwordLength > 128) {
                alert("Please enter a number between 8 - 128.");
                return "Please click generate password again."
            } 

    passwordUpper = window.confirm("Would you like uppercase letters in your password?  (click OK for yes, and CANCEL for no)");
        console.log(passwordUpper);

    passwordLower = window.confirm("Would you like lowercase letters in your password? (click OK for yes, and CANCEL for no)");
        console.log(passwordLower);

    passwordNumber = window.confirm("Would you like numbers in your password? (click OK for yes, and CANCEL for no)");
        console.log(passwordNumber)

    passwordSpecialch = window.confirm("Would you like special characters in your password? (click OK for yes, and CANCEL for no)");
        console.log(passwordSpecialch)

  passwordChoices();
};

function passwordChoices() {

        var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var passNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var specialChar = ['!', '#', '$', '%', '&', '\'', '()', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', '^', '_', '`', '{', '|', '}', '~', '"'];
        var combineArr = [] 

            if (passwordUpper === true) {
                    combineArr = combineArr.concat(upperCase)
            }

            if (passwordLower === true) {
                combineArr = combineArr.concat(lowerCase)
            }
            
            if (passwordNumber === true) {
                combineArr = combineArr.concat(passNumeric)
            }

            if (passwordSpecialch === true) {
                combineArr = combineArr.concat(specialChar)
                console.log(typeof specialChar);
            }

            console.log(combineArr);
            console.log(typeof upperCase);
            console.log(typeof lowerCase);
            console.log(typeof passNumeric);
            console.log(typeof specialChar);
           
}

function passwordPush = ""
    for (let i = 0; < passwordLength; i++) {
        let password =[Math.floor(Math.random()) * passwordLength + 1];
    
        passwordPush = passwordPush + combineArr[password];

    return passwordPush
    }



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// User clicks generate password button, user is presented with the following prompts: 
//     User clicks generate password button
//     Prompt asking for length of password
//     User inputs a length at least 8 chac. and no more than 128
//     Prompt asking for character types to include: lowercase, uppercase, numeric, and/or special characters
//     User inputs character types
//     Prompt confirms selections
//     User confirms selections?
//     Password generated
//     Password in an alert or displayed in the space on the page to copy

// Get references to the #generate element

