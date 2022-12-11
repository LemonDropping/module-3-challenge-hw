// Assignment Code to prompt user with questions when generate button is clicked
document.querySelector("#generate").addEventListener("click", writePassword);

var number = ["0", "1", "2", "4", "5", "6", "8", "9"];
var specialChar = ["!", "%", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// 72 characters able to be generated with
console.log("generate", number, specialChar, alphaLower, alphaUpper);

// var declaration
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
