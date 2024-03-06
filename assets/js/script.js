var generateBtn = document.querySelector("#generate");
var passwordUpper;
var passwordLower;
var passwordNumber;
var passwordSpecialch;
var passwordLength;

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var passNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "()",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  '"',
];
var combineArr = [];

// Asking user for #password input, and validates choices
function generatePassword() {
    passwordLength = window.prompt(
    "How long would you like your password to be? (must be at least 8 characters long)"
  );
  console.log(passwordLength);
  if (
    Number.isNaN(parseInt(passwordLength)) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert("Please enter a number between 8 - 128.");
    return "Please click generate password again.";
  }

  passwordUpper = window.confirm(
    "Would you like uppercase letters in your password?  (click OK for yes, and CANCEL for no)"
  );
  console.log(passwordUpper);

  passwordLower = window.confirm(
    "Would you like lowercase letters in your password? (click OK for yes, and CANCEL for no)"
  );
  console.log(passwordLower);

  passwordNumber = window.confirm(
    "Would you like numbers in your password? (click OK for yes, and CANCEL for no)"
  );
  console.log(passwordNumber);

  passwordSpecialch = window.confirm(
    "Would you like special characters in your password? (click OK for yes, and CANCEL for no)"
  );
  console.log(passwordSpecialch);

  if (!passwordUpper && !passwordLower && !passwordNumber && !passwordSpecialch) {
    alert("Nothing selected! You MUST have at least one type of character selected.");
    return generatePassword()
  }
  
  // Execute function that compiles array choices and runs getRandpass function
  let password = passwordChoices();
  return password; 
}

// This confirms which characters to use, builds the combine array, runs the get random password process
function passwordChoices() {
  combineArr = [];

  if (passwordUpper === true) {
    combineArr = combineArr.concat(upperCase);
  }

  if (passwordLower === true) {
    combineArr = combineArr.concat(lowerCase);
  }

  if (passwordNumber === true) {
    combineArr = combineArr.concat(passNumeric);
  }

  if (passwordSpecialch === true) {
    combineArr = combineArr.concat(specialChar);
  }
  let newlyGenPasswd = getRandPassword();
  return newlyGenPasswd;
}

// This makes sure it has at least one character from each of the selected parameters from the user
function getRandPassword() {
  let newlyGenPasswd = "";
  if (passwordUpper === true){
    newlyGenPasswd += upperCase[Math.floor(Math.random() * upperCase.length)]
  }

  if (passwordLower === true){
    newlyGenPasswd += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  }

  if (passwordNumber === true){
    newlyGenPasswd += passNumeric[Math.floor(Math.random() * passNumeric.length)]
  }

  if (passwordSpecialch === true){
    newlyGenPasswd += specialChar[Math.floor(Math.random() * specialChar.length)]
  }

  while (newlyGenPasswd.length < passwordLength) {
    newlyGenPasswd += combineArr[Math.floor(Math.random() * combineArr.length)];
  }

  console.log(newlyGenPasswd.length);
  return newlyGenPasswd;
  }

// This runs the start function
function writePassword() {
  var password = generatePassword();
  // Password in an alert or displayed in the space on the page to copy
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

