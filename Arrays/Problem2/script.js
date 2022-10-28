/* Define a function that takes in an array of elements and joins them together into a string separated by a comma with a space after the comma.
*/


//convert array to string 
//// The join() method creates and returns a new string by concatenating all of the elements in an array
// (or an array-like object), separated by commas or a specified separator string.
// trim white space using string method 



function joinArr(arr){
    arr = arr.join(', ')
    arr = arr.split(' ').join('')

    console.log(arr)
}

joinArr( [ '     hello       ' , "hello" , "hellloooooo" ] )
