// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

function promptMe() {
  var pwCharCount = prompt(
    "How many characters would you like your password to contain?"
  );
  console.log(pwCharCount);
  var specChar = confirm("Click OK to confirm including special characters");
  // console.log(specChar);

  var numChar = confirm("Click OK to confirm including numeric characters");
  // console.log(numChar);

  var lowerChar = confirm("Click OK to confirm including lowercase characters");
  // console.log(lowerChar);

  var upperChar = confirm("Click OK to confirm including uppercase characters");
  // console.log(upperChar);

  var encrpString = buildEncrpString(specChar, numChar, lowerChar, upperChar);
  console.log("Complete Encryption Sting = " + encrpString);
  console.log("String Length = " + encrpString.length);

  var generatedPW = generatePW(encrpString, pwCharCount);
  console.log("FINAL PASSWORD = " + generatedPW);
}

function buildEncrpString(specChar, numChar, lowerChar, upperChar) {
  var specCharString = "!#$%&()*+/:;<=>?@[]^-{}~";
  var lowerAlphaCharString = "abcdefghijklmnopqrstubwxyz";
  var upperAlphaCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharString = "0123456789";

  var baseEncrypString = "";

  if (specChar) {
    baseEncrypString += specCharString;
    console.log("specChar = " + baseEncrypString);
  }

  if (numChar) {
    baseEncrypString += lowerAlphaCharString;
    console.log("numChar = " + baseEncrypString);
  }

  if (lowerChar) {
    baseEncrypString += upperAlphaCharString;
    console.log("lowerChar = " + baseEncrypString);
  }

  if (upperChar) {
    baseEncrypString += numericCharString;
    console.log("upperChar = " + baseEncrypString);
  }

  return baseEncrypString;
}

function generatePW(encrpString, pwCharCount) {
  var result = "";
  console.log("encrypString = " + encrpString);
  console.log("pwCharCount = " + pwCharCount);

  for (i = 0; i < pwCharCount; i++) {
    result += encrpString.charAt(
      Math.floor(Math.random() * encrpString.length)
    );
    console.log("random char, line = " + i + "char created = " + result);
  }
  return result;
}
