// Create an array of people objects with first name, last name, and age, then write a JavaScript function that takes in an
// array and console logs the first and last names of all the people.


// create array of people objects
let students = [ 
    {firstName : "Sam" ,lastName : "Thomas", age: 10},
    {firstName : "Lilly", lastName : "Thompson", age : 10}, 
    {firstName : "Sally", lastName : "Hansen", age : 10 },
    {firstName : "John" , lastName : "Doe" , age : 10 }
]

// create function that takes in array and logs the first and last names of all people 

function fullName(arr){

let fullName; 
fullName = arr.map(el => `${el.firstName} ${el.lastName}`)
console.log(fullName)
}

fullName(students)