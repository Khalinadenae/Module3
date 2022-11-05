//Write a JavaScript function to sort the following array of objects by title value.
/*
// sort method changes the positions of the elements in the original array 
//default sorts the elements with the smallest value first and largest value last
// casts elements to strings and compares the strings to determine the order

Hint: Read about the JavaScript sort method.

*/

let array =  [ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];

function sortAlphabetically(arr, property){

array.sort((a,b) => {
  if (a.title > b.title) {
    return 1 
  } else {
    return -1
  }
})

console.log(array)
  
}

sortAlphabetically(array)