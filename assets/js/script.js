// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var passwordLength = window.prompt("How long would you like your password to be? (must be at least 8 characters long)");
  console.log(passwordLength);

  var passwordUpper = window.prompt("Would you like uppercase letters in your password?");
  console.log(passwordUpper);

  var passwordLower = window.prompt("Would you like lowercase letters in your password?");
  console.log(passwordLower);

  var passwordNumber = window.prompt("Would you like numbers in your password?");
  console.log(passwordNumber)

  var passwordSpecialch = window.prompt("Would you like special characters in your password?");
  console.log(passwordSpecialch)

  return("")
};

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

