/*
Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.
*/

function findElement(arr, num){
    let index = arr.slice(0,num)
    console.log(index)
}


findElement([0,1,2,3,4,5,6,7,8,9], 4)