// Assignment code here


var charSet = "";
var passLength = 0;
var lowercase = "acdefghijklmnnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNNOPQRSTUVWXYZ";
var numeric = "123456789";
//var special =



var passLength = function() { 
  passLength = window.prompt("How many characters would you like to include in your password? Please choose a number between 8 and 128!");
  if (passLength < 8 || passLength > 128) {
    window.alert("enter vaild");
  };
};

var passCriteria = function () {
  lowercase = window.confirm("Would you like to include lowercase letters?")
  if (lowercase = true) {
    console.log(lowercase);
  }
};



var generatePassword = function () {
  passLength(),
  passCriteria();
};








// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

