// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "123456789";
var specialChar = "!@#$%^&*()";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//function used to determine the length of the password//
function determineLength(){
  passwordLength = prompt("How long would you like your password?");

  if (passwordLength < 8){
    alert("Password must have a length of 8 - 128 characters");
    determineLength();
  }else if (passwordLength > 128){
    alert("Password must have a length of 8-128 characters");
    determineLength();
  }else if (isNaN(passwordLength)){
    alert("Password must have a length of 8-128 characters");
    determineLength();
  }else
  alert("the next questions will ask about the characters you want in your password");

  return passwordLength;
}
  //function used to ask if uppercase are to be used//
  function determineUppercase(){
    uppercaseCheck = prompt("Do you want to include Uppercase Letters in your password? \n(yes or no)");
      uppercaseCheck = uppercaseCheck.toLowerCase();

      if (uppercaseCheck === null || uppercaseCheck === ""){
        alert("Please answer yes or no");
        determineUppercase();

      }else if (uppercaseCheck ==="yes" || uppercaseCheck ==="y"){
        uppercaseCheck = true;
        return uppercaseCheck;

      }else if (uppercaseCheck === "no" || uppercaseCheck === "n"){
        uppercaseCheck = false;
        return uppercaseCheck;
      
      }else {
        alert("please answer yes or no");
        determineuppercase();
      }
      return uppercaseCheck;
    }

     function determineNumbers(){
      numberCheck = prompt("Do you want to inclue numbers in your password? \n(yes or No");
      numberCheck = numberCheck.toLowerCase();
      
      if (numberCheck ===null || numberCheck === ""){
        alert("please say yes or no");
        return numberCheck;

      }else if (*numberCheck ==="yes" || numberCheck ==="y"){
        numberCheck = true;
        return numberCheck;
      
      }else if (numberCheck === "no" || numberCheck ==="n"){
        numberCheck = false;
        return numberCheck;
        
      }else {
        alert("Please answer yes or no");
        determineNumbers();
      }
      return numberCheck;

    function determineSpecial(){
      specialCheck = prompt("Do you want to use special characters? yes or no?");
        specialCheck = specialCheck.toLowerCase();

      if (specialCheck === null || specialCheck === ""){
        alert("please say yes or no");
        determineSpecial();

      }else if (specialCheck === "yes" || specialCheck ==="y"){
        specialCheck = true;
        returnspecialCheck;

      }else if (specialCheck === "no" || specialCheck ==="n"){
        specialCheck = false;
        return specialCheck;

      }else {
        alert("please answer yes or no");
      }
      return specialCheck;
    }

      function generatePassword(){
        determineLength();
        console.log(passwordLength);
        determineUppercase();
        console.log(uppercaseCheck);
        determineNumbers();
        console.log(numbersCheck);
        determineSpecial();
        console.log(specialCheck);

        var characters = lowercaseChar;
        var password = "";
        if (uppercaseCheck && numberCheck && specialCheck){
          characters += uppercaseChar + numberChar + specialChar;

        }else if (uppercaseCheck && numberCheck){
          characters += uppercaseChar + numberChar;
        
        }else if (numberCheck && specialCheck){
          characters += numberChar + specialChar;
        
        }else if (uppercaseCheck && specialCheck){
          characters += uppercaseChar + specialChar;

        }else if (uppercaseCheck){
          charracters += uppercaseChar;
        
        }else if(numberCheck){
          characters += numberChar;
        
        }else if (specialCheck){
          characters += specialChar;
        
        }else{
          characters === lowercaseChar;
        }

        for(var i = 0; i < passwordLength; i++){
          password += characters.charAt(math.floor(math.random() * characters.length));
        }
        return password;
      }

      function writePassword() {
        var password1 = "";
        password1 = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = password1;
      }
//FUNCTION RESETtEXT(){
  // DOCUMENT.GETeLEMENTbYID("PASSWORD").value = "your Secure Password";
//}



 //add event listener to generate button
      generateBtn.addEeventListener("click", writePassword);
