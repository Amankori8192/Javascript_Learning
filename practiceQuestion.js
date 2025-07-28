//remove duplicates in an array

const removeDuplicate = (arr) => {
  uniqarr = new Set(arr);
  return [...uniqarr];
};
// console.log(removeDuplicate([1, 2, 2, 1, 5, 6, 5, 1, 6]));

// Reverse an Sentence

const reverseSentence = (sentence) => {
  let reverse = sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
  console.log(reverse);
};

// console.log(reverseSentence("i am aman"));

// Function for check passing string is a palindrome or not

function isPalindrome(str) {
  const reversestr = str.split("").reverse().join("");
  return str === reversestr;
}

// console.log(isPalindrome("naman"));
// console.log(isPalindrome("AAkash"));

// Sort an array in assending order

const arr = [1, 2, 21, 3, 0, 6, 7, 14, 6];
const sortedArr = arr.sort((a, b) => a - b);
// console.log(sortedArr);

// How to deep clone an obj

const deepClone = (obj) => {
  JSON.parse(JSON.stringify(obj));
};

// const arr1 = [];
// const arr2 = [];

// console.log(arr1 == arr2);   // false
// console.log(arr1 === arr2);  // false

// In JavaScript, objects (including arrays) are compared by reference, not by value.
// So even if two arrays have identical contents, they are considered different unless they refer to the same exact object.

const arr1 = [];
const arr2 = arr1; // arr2 references the same array as arr1

// console.log(arr1 == arr2); // true
// console.log(arr1 === arr2); // true

// if ([]) {
//   console.log("i am aman"); // empty array [] is a truthy value so output will be "i am aman"
// } else {
//   console.log("i'm absent");
// }

// function for checking secondword character exist in the first one

function compareChars(firstWord, secondWord) {
  if (!firstWord || !secondWord) return false;

  for (let char of secondWord) {
    if (!firstWord.includes(char)) {
      return false; // Character in secondWord not found in firstWord
    }
  }
  return true; // All characters found
}

// // Example usage:
// console.log(compareChars("himanshu", "anshu")); // true
// console.log(compareChars("hello", "hero"));     // false ('r' not in "hello")




// if ([]) {
//   console.log("i am aman")
// }
// else{
//   console.log("i'm absent")
// }

function abc(){
  console.log(abc.xyz)
}

// abc()
// abc.xyz = 400
// abc.xyz = 200   ///all have output undefined
// abc()


// console.log(typeof typeof 100)  //string

// const abc1 = [..."aman"]
// console.log(abc1)

// console.log(parseInt('10+2'))
// console.log(parseInt('7fm'))
// console.log(parseInt('m7F'))


// console.log(isNaN('Aman'))

// console.log([1, 2].map(num => num*2))


// console.log([1,2].map((num=>{
//   if (num>0) return 
//   return num *2
// })))                              // [undefined, undefined]