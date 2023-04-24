// Assignment code here
const specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  "_",
  "/",
  ";",
  ":",
  "<",
  ">",
  "=",
  "?",
  "@",
  "[",
  "]",
  "^",
  "`",
  "{",
  "}",
  "|",
  "~",
];
const possibleNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowercaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function passwordOptions() {
  //returns boolean for each option of character type.
  const containsSpecialCharacters = confirm(
    "Would you like your password to contain special characters?"
  );

  const containsNumbers = confirm(
    "Would you like your password to contain numbers?"
  );

  const containsLoweCase = confirm(
    "Would you like your password to contain lowercase characters?"
  );

  const containsUpperCase = confirm(
    "Would you like your password to contain uppercase characters"
  );
  //check to make sure at least one character type is present.
  if (
    containsSpecialCharacters == false &&
    containsNumbers == false &&
    containsLoweCase == false &&
    containsUpperCase == false
  ) {
    alert("Password must contain at least one character type!");
    return null;
  }
  //Prompt the user for how long they would like their password to be and autofill 12 to start.
  const passLength = parseInt(prompt("How long should your password be?"));

  //Conditional statement to check that password length follows the rules of a number, 8 or more, and 128 or less.
  if (Number.isNaN(passLength)) {
    alert("Password length must be a number");
    return null;
  } else if (passLength < 8) {
    alert("Password must be at least 8 characters");
    return null;
  } else if (passLength > 128) {
    alert("Password length can't be longer than 128 characters");
    return null;
  }

  const optionsObject = {
    passLength: passLength,
    containsLoweCase: containsLoweCase,
    containsUpperCase: containsUpperCase,
    containsSpecialCharacters: containsSpecialCharacters,
    containsNumbers: containsNumbers,
  };
  //return out the options.
  return optionsObject;
}

function getRandomIndex(array) {
  //Grabs random index position, Math.floor rounds down to the nearest whole number.  Math.random returns a random decimal between 0 and 1 and multiplies by array length to get a random array position.
  const randomIndex = Math.floor(Math.random() * array.length);
  //Grab the character at the random index position.
  const randomCharacter = array[randomIndex];
  //return out the random character.
  return randomCharacter;
}

function generatePassword() {
  //grab userInput from prompts
  const userInput = passwordOptions();
  //array to push in character from the options selected.
  let resultsArray = [];
  //array to push the random characters into for final passwords.
  const passwordArray = [];
  //if statements to grab characters that the user wanted and push them into the results array.
  if (userInput.containsLoweCase) {
    resultsArray = resultsArray.concat(lowercaseChar);
  }
  if (userInput.containsUpperCase) {
    resultsArray = resultsArray.concat(uppercaseChar);
  }
  if (userInput.containsSpecialCharacters) {
    resultsArray = resultsArray.concat(specialCharacters);
  }
  if (userInput.containsNumbers) {
    resultsArray = resultsArray.concat(possibleNumbers);
  }

  //grabs a random character and pushes it into the passwordArray for however long the password is supposed to be.
  for (i = 0; i < userInput.passLength; i++) {
    const characterPush = getRandomIndex(resultsArray);
    passwordArray.push(characterPush);
  }
  console.log(userInput);
  console.log(resultsArray);
  console.log(passwordArray);
  //return out the final password as a string.
  return passwordArray.join("");
}
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
