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
console.log(longestWord);
//2) I'll be needing the longestString variable to keep count of the strings
//with longest length. Another variable added is the longestWord to return the
//string with the longest length.
