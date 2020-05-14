/*
  LETTER COUNT

  1. Create a variable, named "word," which contains any lengthy word.
  2. Create a second variable, named "letter," which contains any
      letter. 
  3. Write a WHILE statement which loops over the "word" string and
     counts the number of times the "letter" appears.
  4. If the letter is found in the string, display on the page: "The letter X
     exists N times in this word!" (replacing "X" with
     the letter guessed and "N" with the letter count).
  5. If the letter isn't found in the string, display on the page: "Nope, that
     letter doesn't exist in my word!"
  6. OPTIONAL: Use an input textbox and click event listener to get user input
     for the "letter" variable in Step 2.

  TIP: What do we mean by "display on the page"? `.innerHTML` could achieve
       this!

*/

// YOUR CODE HERE
const result = document.querySelector('#result');
const input = document.querySelector('#inputBox');
const longWord = document.querySelector('#longWord');
const submit = document.querySelector('#submitButton');

submit.addEventListener('click', function(){
    let i = 0;
    let count = 0;
    const letter = input.value;
    const word = longWord.innerText;
    
    while (i < word.length) {
        if (word[i] === letter) {
            count++;
        }//end if
        i++;
    }//end while

    if (count) {
        result.innerText = `The letter ${letter} exists ${count} times in this word!`;
    } else {
        result.innerText = "Nope, that letter doesn't exist in my word!";
    }//end if/else
});//end submit