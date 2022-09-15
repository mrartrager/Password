// Assignment Code
var generateBtn = document.querySelector("#generate");

const userInput = {
var special = ["£&@?!#%*+=€$_|<>-"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
  var passwordLength = prompt("Choose a number between 8 and 128 characters. This will be how long your password is.");
  var lowerLetters = confirm("Do you want your password to contain any lowercase letters?");
  var upperLetters = confirm("Do you want your password to contain any uppercase letters?");
  var num = confirm("Do you want your password to contain any numbers?");
  var specials = confirm("Do you want your password to contain any special characters?");
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password is not between 8 characters and 128 characters. Please try again.");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
}

var lowerLetters = window.confirm ("Would you like any lower case letters in your password??");
if (lowerLetters) {
    password = userInput.lowerLetters
};

var upperLetters = window.confirm ("Would you like any lower case letters in your password??");
if (upperLetters) {
    password = userInput.upperLetters
};

var num = window.confirm ("Would you like any lower case letters in your password??");
if (num) {
    password = userInput.num
};

var specials = window.confirm ("Would you like any lower case letters in your password??");
if (specials) {
    password = userInput.specials
};
    return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
