/* 
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
*/

function findLongestString(str){

str = str.split(" ")

let longestString = ""

for (let i = 0; i < str.length; i++){
    if (str[i].length > longestString.length){
        longestString = str[i]
    }
}
console.log(longestString)
}


findLongestString("Life is a blessing")