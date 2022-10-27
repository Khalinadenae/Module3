/*
Write a JavaScript function that accepts 
two arguments, a string and a letter and the
 function will count the number of occurrences 
 of the specified letter within the string. 
*/


//set a variable to count the specified letter occurnaces
// loop through every character in the string for occurance of the letter 
// if the letter is found , add 1 to the count variable 


function findLetter(str, letter){
    let letterCount = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === letter ){
            letterCount = letterCount + 1
        }
    }
    console.log(letterCount)
}

findLetter("Khalina", "k ")