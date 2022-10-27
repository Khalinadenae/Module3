//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.



function findVowel(str){
// initialize variable to count vowels
let vowelCount = 0;
// initialize array of vowels for nested array 
let vowels = ["a", "e", "i", "o", "u"]

//loop through the characters in the string
for(let i = 0; i < str.length; i++){
    //loop through array of vowels for each character
    for(let j = 0; j < vowels.length; j++){
    // check if current index of the string is a vowel
    if(str[i] === vowels[i]){
        // if the index of string contains a vowel, increment the vowel counter
        vowelCount++
      }
     }
   }
   console.log(vowelCount)
}