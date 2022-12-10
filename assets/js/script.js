// Assignment Code
var generateBtn = document.querySelector("#generate"); // <button id="generate" class="btn">Generate Password</button>

console.log("generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
