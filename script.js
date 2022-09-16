// Assignment Code
let generateBtn = document.querySelector("#generate");

let userInput = {
  characters: ["£","&","@","?","!","#","%","*","+","=","€","$","_","|","<",">","-"],
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  upperCase: ["A", "B","C","D","E", "F","G", "H", "I","J","K", "L", "M","N","O","P", "Q", "R","S","T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
};

function generatePassword() {
  let passwordLength = prompt(
    "Choose a number between 8 and 128 characters. This will be how long your password is."
  );
  let lowerLetters = confirm(
    "Do you want your password to contain any lowercase letters?"
  );
  let upperLetters = confirm(
    "Do you want your password to contain any uppercase letters?"
  );
  let num = confirm("Do you want your password to contain any numbers?");
  let specials = confirm(
    "Do you want your password to contain any special characters?"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Your password is not between 8 characters and 128 characters. Please try again."
    );
    passwordLength = prompt(
      "Choose a password length of at least 8 characters and no more than 128 characters."
    );
  }

  if (lowerLetters) {
    lowerLetters = window.confirm(
      "Would you like any lower case letters in your password??"
    );
    password = userInput.lowerLetters;
  }

  if (upperLetters) {
    upperLetters = window.confirm(
      "Would you like any lower case letters in your password??"
    );
    password = userInput.upperLetters;
  }

  if (num) {
    num = window.confirm(
      "Would you like any lower case letters in your password??"
    );
    password = userInput.num;
  }

  if (specials) {
    specials = window.confirm(
      "Would you like any lower case letters in your password??"
    );
    password = userInput.specials;
  }
  
}

// Write password to the #password input
function writePassword() {


  let password = generatePassword();
  let passwordText = document.querySelector("#password");

   for (let i = 0; i < password.length; i++) {
     password += "userInput";
  }
  
  passwordText.value = password;
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
