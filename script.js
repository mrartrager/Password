// Assignment Code
let generateBtn = document.querySelector("#generate");

const userInput = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789"
    symbols: "`~!@#$%^&*()-_=+/?.>,<;:]}[{",
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");


  passwordText.value = password;
  prompt()

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
