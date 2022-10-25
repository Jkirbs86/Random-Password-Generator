// Assignment Code
var generateBtn = document.querySelector("#generate");

// asks user for character length. if the amount if less than 8 or greater than 128 characters an alert will appear asking to please input the correct amoung.
function askCharAmount() {
  var charAmount = prompt("Please chose a password length between 8-128 characters:")
    if (charAmount < 8 || charAmount > 128) {
      alert("Please chose a value between 8-128")
      askCharAmount()
    } else {
      console.log (charAmount)
      return charAmount
    }
}

// variables to get lower case, upper case, numbers, and/or symbols
var lowerCaseCode = arrayLowHigh(97, 122);
var upperCaseCode = arrayLowHigh(65, 90);
var numberCode = arrayLowHigh(48, 57);
var symbolCode = arrayLowHigh(65, 90).concat(
  arrayLowHigh(58, 64)
).concat(
  arrayLowHigh(91, 96)
).concat(
  arrayLowHigh(123, 126)
)

// generates password based on character code inputs
function arrayLowHigh(low, high) {
  let array = []; 
  for (let i = low; i <=high; i++) {
    array.push(i)
  }
  return array;
}

// randomly generates a password depending on the users input preferences. 
function generatePassword(charAmount, includeUpper, includeNumber, includeSymbol) {
  console.log("button has been clicked");
  var charCodes = lowerCaseCode;

  if (includeUpper) charCodes = charCodes.concat(upperCaseCode);
  if (includeNumber) charCodes = charCodes.concat(numberCode);
  if (includeSymbol) charCodes = charCodes.concat(symbolCode);

  var passwordChars = []
  for (let index = 0; index < charAmount; index++) {
     var charCode = charCodes[Math.floor(Math.random() * charCodes.length)];
     passwordChars.push(String.fromCharCode(charCode));
  }

  return passwordChars.join('');
}




// prompts user for password character suggestions.
function writePassword() {
  var charAmount = askCharAmount();
  
  //asks users if they would like to us UpperCase letters in the password. If true, it will include Uppercase. If false will not.
  var upperPrompt = confirm("Would you like to include upper case letters? (click 'OK' for Yes and 'Cancel' for No)");
    if (upperPrompt) {
      var includeUpper = true
      console.log ("includeUpper = " + includeUpper)
    } else {
      var includeUpper = false
      console.log ("includeUpper = " + includeUpper)
    }
  
  //asks user if numbers would like to be included into the password. True randomly inserts numbers. False skips numbers being used.
  var numberPrompt = confirm("Would you like to include numbers? (click 'OK' for Yes and 'Cancel' for No)");
    if (numberPrompt) {
      var includeNumber = true
      console.log ("includeNumber = " + includeNumber)
    } else {
      var includeNumber = false
      console.log ("includeNumber = " + includeNumber)
    }

  //asks user if they would like symbols used in the password. If ok generates special characters. if cancel then skips.
  var symbolPrompt = confirm("Would you like to include special characters? (click 'OK' for Yes and 'Cancel' for No)");
    if (symbolPrompt) {
      var includeSymbol = true
      console.log ("includeSymbol = " + includeSymbol)
    } else {
      var includeSymbol = false
      console.log ("includeNumber = " + includeSymbol)
    }

  // calls function to generate password, giving parameters based on user input
  var password = generatePassword(charAmount, includeUpper, includeNumber, includeSymbol);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds event listener to generate the button. Once clicked generates Password.
generateBtn.addEventListener("click", writePassword);
