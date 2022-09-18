// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase = ["A", "B","C","D","E", "F","G", "H", "I","J","K", "L", "M","N","O","P", "Q", "R","S","T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let characters = ["£","&","@","?","!","#","%","*","+","=","€","$","_","|","<",">","-"];
let randomPassword = [];

// Write password to the #password input
function writePassword() {
  let passwordLength = prompt("Choose a number between 8 and 128 characters. This will be how long your password is.");
  if (passwordLength < 8 || passwordLength > 128) {alert("Hey dude, your password is not between 8 characters and 128 characters. Try again.");
  passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  
}

  let lowerLetters = confirm("Do you want your password to contain any lowercase letters?");
  let upperLetters = confirm("Do you want your password to contain any uppercase letters?");
  let num = confirm("Do you want your password to contain any numbers?");
  let specials = confirm("Do you want your password to contain any special characters?");

  

  if (lowerLetters) {
    console.log("Your password will have lower case!")
    randomPassword = randomPassword.concat(lowerCase)
  } else {
    console.error("Your password will NOT have lower case, wow, you want to get hacked?")
  }

  if (upperLetters) {
    console.log("Your password will have Upper case!")
    randomPassword = randomPassword.concat(upperCase)
  } else {
    console.error ("Your password will NOT have Upper case, wow, you want to get hacked?")
  }
  
  if (num) {
    console.log("Your password will have numbers!")
   randomPassword = randomPassword.concat(numbers)
  } else {
    console.error ("Your password will NOT have numbers, wow, you want to get hacked?")
  }

  if (specials) {
    console.log("Your password will have special characters!")
    randomPassword = randomPassword.concat(characters)
  } else {
    console.error ("Your password will NOT have special characters, wow, you want to get hacked?")
  }
  console.log(randomPassword);
  let finalPassword = ""; 
  for (let i = 0 ; i <= passwordLength; i ++){
    finalPassword += randomPassword[Math.floor(Math.random()* randomPassword.length)]
  }
  console.log(finalPassword);
  
 return finalPassword;

}

generateBtn.addEventListener("click", generatePassword);
function generatePassword () {
 let finalPassword = writePassword()
console.log(finalPassword)
 document.querySelector("#password").value = finalPassword;  
}


// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
//   prompt()

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
