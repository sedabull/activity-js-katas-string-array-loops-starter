/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const reducedArray = [];
const redundantArray = [1, 1, 2, 3, 3, 4];
const before = document.querySelector('#before');
const after = document.querySelector('#after');

for(let i = 0; i < redundantArray.length; i++) {
    const last = reducedArray.length - 1;
    if(!(redundantArray[i] === reducedArray[last])) {
        reducedArray.push(redundantArray[i]);
    }//end if
}//end for

before.innerText = "Before: " + redundantArray.toString();
after.innerText = "After: " + reducedArray.toString();