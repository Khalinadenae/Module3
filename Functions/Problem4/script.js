/*
Write a JavaScript function that iterates the integers from 1 to 100. But for multiples of 
three print "Fizz" instead of the number and for the
 multiples of five print "Buzz". For numbers that are
  multiples of both three and five print "FizzBuzz".

*/

// wrtie a function 
// declare and initialize counter variable (0)

// declare the number variable to stop count (100)

// loop through every number up to the stop count number (100)

// if the number is a multiple of 3 , print " Fizz" (multiples of 3 have a remainder of 0 when divided by 3)

// if the number is a multiple of 5 print " Buzz" (multiples of 5 have a remainder of 0 when divided by 5)

// if the number is a multiple of 3 and 5 print "FizzBuzz"

// for any other number , print the number

// add 1 to the count after each loop 

function fizzBuzz(){
let counter = 0;

// create while loop to iterate through every number up to 100 
  for(let i = 0; i <101; i++) {

    if (counter % 3 === 0 && counter % 5 !== 0 ){
        console.log("Fizz")
    } else if (counter % 5 === 0 && counter % 3 !== 0 ){
        console.log("Buzz")
    } else if(counter % 3 === 0 && counter % 5 === 0 ){
        console.log("FizzBuzz")
    } else {
        console.log(counter)
    }
    // iterate the counter variable after each loop 
    counter = counter + 1
        }
    }


    fizzBuzz()
