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

// Prompt user to confirm how many characters they want in their password, minimum of 8
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to have?"));


//if answer is outside the parameters
while(confirmLength <= 7 || confirmLength >= 51) {
  alert("Password length must be between 8-32 characters, please try again");
  var confirmLength = (prompt("How many characters would you like your password to have?"));
  }

// Message for how many characters the user will have
alert(`Your password will have ${confirmLength} characters`);

// Password rules 
var confirmLowerCase = confirm ("Click OK to add lowercase characters");
var confirmUpperCase = confirm ("Click OK to add uppercase characters");
var confirmSpecialCharacter = confirm ("Click OK to add special characters");
var confirmNumericCharacter = confirm ("Click OK to add numeric characters");

// If answer does not follow rules
while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
  alert("You must choose at least one of each parameter")
}

// Assign actions to the password rules 
var passwordCharacters = []
  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }
  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }
  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }
  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  console.log(passwordCharacters)

// Array for random characters looping
var randomPassword = ""
for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword)
}
return randomPassword;
}

// for password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
