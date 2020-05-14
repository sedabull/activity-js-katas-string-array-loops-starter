/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE
let tallest = 0;
const heights = [];
const result = document.querySelector('#result');

for(let i = 0; i < 100; i++) {
    heights.push(Math.floor(Math.random() * 29029));
};//end for
console.log(heights);

heights.forEach((height) => {
    if(height > tallest) {
        tallest = height;
    }//end if
});//end forEach

result.innerText = `The tallest mountain is ${tallest} feet tall!`;