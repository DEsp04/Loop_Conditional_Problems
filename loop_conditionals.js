//A)
//1)
let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
let longestString = 0;
let longestWord;

for (let i = 0; i < lunchArray.length; i++) {
  if (lunchArray[i].length > longestString) {
    longest = lunchArray[i].length;
    longestWord = lunchArray[i];
  }
}
// 2) Print length of longest word
console.log(longestString);

// 3) Print longest word
console.log(longestWord);

//Which other varibles will you be needing?
//I'll be needing the longestString variable to keep count of the strings
//with longest length. Another variable added is the longestWord to return the
//string with the longest length.

// 4)
let lunchArr = ["Burger Salad Lasagna Sushi Meatloaf"];
let string = lunchArr.toString();
let newLunchArr = string.split(" ");

console.log(newLunchArr);

// B)
let oddArray = [];

function oddPosition(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      oddArray.push(arr[i]);
    }
  }
  return oddArray.toString();
}
