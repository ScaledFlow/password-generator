// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

function promptMe() {
  var pwCharCount = prompt(
    "How many characters would you like your password to contain?"
  );
  if (pwCharCount >= 8 && pwCharCount <= 128) {
    var specChar = confirm("Click OK to confirm including special characters");
    var numChar = confirm("Click OK to confirm including numeric characters");
    var lowerChar = confirm(
      "Click OK to confirm including lowercase characters"
    );
    var upperChar = confirm(
      "Click OK to confirm including uppercase characters"
    );
    var encrpString = buildEncrpString(specChar, numChar, lowerChar, upperChar);
    var generatedPW = generatePW(encrpString, pwCharCount);
    console.log("FINAL PASSWORD = " + generatedPW);
    writePassword(generatedPW);
  } else {
    alert("You must enter a number between 8 and 128.");
  }

  function buildEncrpString(specChar, numChar, lowerChar, upperChar) {
    var specCharString = "!#$%&()*+/:;<=>?@[]^-{}~";
    var lowerAlphaCharString = "abcdefghijklmnopqrstubwxyz";
    var upperAlphaCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericCharString = "0123456789";

    var baseEncrypString = "";

    if (specChar) {
      baseEncrypString += specCharString;
    }

    if (numChar) {
      baseEncrypString += lowerAlphaCharString;
    }

    if (lowerChar) {
      baseEncrypString += upperAlphaCharString;
    }

    if (upperChar) {
      baseEncrypString += numericCharString;
    }

    return baseEncrypString;
  }
}

function generatePW(encrpString, pwCharCount) {
  var result = "";

  for (i = 0; i < pwCharCount; i++) {
    result += encrpString.charAt(
      Math.floor(Math.random() * encrpString.length)
    );
  }
  return result;
}

function writePassword(generatedPW) {
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPW;
}
