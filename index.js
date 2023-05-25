function isPalindrome(word) {
  // Write your algorithm here
  //The input for this isPalindrome function will take a string as its argument
  //Lowercase the input string and convert it to an array
  //Reverse the order of the array and convert it back to a string
  //This isPalindrome function will return true if the string is a palindrome
  //This isPalindrome function will return false if the string is not a palindrome
  //A palindrome is a word or sentence that is spelled the same way both forward and backward
  const lowercaseWord = word.toLowerCase();
  console.log(lowercaseWord);
  const wordToArray = lowercaseWord.split("");
  console.log(wordToArray);
  const reverseWordArray = wordToArray.reverse();
  console.log(reverseWordArray);
  const arrayToWord = reverseWordArray.join("");
  console.log(arrayToWord);
  if (word.toLowerCase() === arrayToWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  Declare isPalindrome as a function
  This function will take a string as the parameter
  Initialize a variable to lowercase the input string
  Initialize a variable to convert the input string into an array
  Initialize a variable to reverse the order of the array
  Initialize a variable to convert the array back to a string
  Use if statement inside the function to create a condition
  The condition should lowercase the input string so that we're dealing with only lowercased word or sentence
  The condition should check the lowercased input string to see if it is an exact match to the variable or string that was created from the original string but in reverse order
  If the string checks out to be truthy, return true
  If the string checks out to be falsey, return false
*/

/*
  Add written explanation of your solution here
  The isPalindrome function accept an input string as its parameter
  The input string goes through a series of changes: lowercasing, string to array, reversing the array order, array back to a string
  The series of changes the input string has gone through gives us the string in the reverse order which can be use to compare it to the original string
  The if statement creates a condition that check the input string to see if it is a palindrome
  The input string is passed into the condition to check for truthy for falsey
  If the condition in the if statement is true, return true
  If the condition is false, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("script"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
