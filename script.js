// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase = ["A", "B","C","D","E", "F","G", "H", "I","J","K", "L", "M","N","O","P", "Q", "R","S","T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let characters = ["£","&","@","?","!","#","%","*","+","=","€","$","_","|","<",">","-"];
let all = [];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
 
  let passwordLength = prompt("Choose a number between 8 and 128 characters. This will be how long your password is.");

  if (passwordLength < 8 || passwordLength > 128) {alert("Hey dude, your password is not between 8 characters and 128 characters. Try again.");
  passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  return null; 
}

  let lowerLetters = confirm("Do you want your password to contain any lowercase letters?");
  let upperLetters = confirm("Do you want your password to contain any uppercase letters?");
  let num = confirm("Do you want your password to contain any numbers?");
  let specials = confirm("Do you want your password to contain any special characters?");


  let charSet = [];
  passwordText.value = password;
  

  if (lowerLetters) {
    console.log("Your password will have lower case!")
    all = all.concat(lowerCase)
  } else {
    console.log("Your password will not have lower case")
  }

  if (upperLetters) {
    console.log("Your password will have Upper case!")
    all = all.concat(upperCase)
    
  }
  
  if (num) {
    all = all.concat(characters)
  
  }

  if (specials) {
    all = all.concat(lowerCase)
    
  }

  console.log(all);

  // for (let i=0; i < passwordLength: i++) {
  //   let 
  // }
}


function generatePassword () {

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
