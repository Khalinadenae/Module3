/* 
Define a function that takes in an array of numbers/integers and returns the sorted version of that array, greatest to least. (Note: do NOT use the "reverse" method.)

*/

function sortBigToSmall(arr){
    arr = arr.sort((a, b) => b - a );
      
      console.log(arr)
    }
    
    sortBigToSmall([2,45,67,89,899,0,6,44,667,4,34,5])