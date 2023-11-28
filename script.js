// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
specialCharacter = specialCharacters.join("")   // convert array to a string without commas.

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
numericCharacter = numericCharacters.join("")

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
lowerCasedCharacter = lowerCasedCharacters.join("")

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
upperCasedCharacter = upperCasedCharacters.join("")

var choiceArr = "";

let passwordLength = "";

// Function to prompt user for password options ***********************************************************************
function getPasswordOptions() {
  passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
    
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length has to be a number that falls between 8 and 128. Please try again.");
    return false;
  }else {
    alert("Your password will be " + passwordLength + " characters long.")
  }

  return true

 }


// Function for getting a random element from an array ******************************************************************
function getRandom() {
  
  return     
}

// Function to generate password with user input *************************************************************************
function generatePassword() { 

  if (confirm("Do you want to have uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCasedCharacter);
  }

  if (confirm("Do you want to have lower letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCasedCharacter);
  }

  if (confirm("Do you want to have special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacter);
  }

  if (confirm("Do you want to have numbers in your password?")) {
    choiceArr = choiceArr.concat(numericCharacter);
  }

if (choiceArr.length === 0) {
  alert("Please select one option for the password characters.");
}

  var password = "";
  
        for (let i = 0; i < passwordLength; i++) { 
            password += choiceArr.charAt(Math.floor(Math.random() * choiceArr.length));                 
        } 

   return password;

}


// Get references to the #generate element  *******************************************************************************
var generateBtn = document.querySelector('#generate');


// Write password to the #password input ***********************************************************************
function writePassword() {
  var correctPrompts = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }else {
    
    passwordText.value = " ";
    
  }
}

// Add event listener to generate button  ****************************************************************************
generateBtn.addEventListener('click', writePassword);

