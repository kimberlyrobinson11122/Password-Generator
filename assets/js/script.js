// Assignment code here

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

var generateBtn = document.querySelector("#generate");
  
//if invalid var userInput = window.prompt("How long would you like your password to be? (must be at least 8 characters long)");
    //if(userInput === 0, 1)  
  
 //window.confirm(message)
  
// Add event listener to generate button

    // If user decides to stop by hitting cancel, this will end the function
  //if (!userInput) {
      //return;

// Write password to the #password input

function writePassword() {

  var writePassword = Math.random()


}
  
generateBtn.addEventListener("click", ); {

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

}


//addEventListener('click', function() { // Display the prompt when the button is clicked const userInput = prompt('Please enter some text:'); console. log(userInput); });