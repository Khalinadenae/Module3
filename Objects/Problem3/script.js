//Create an object with three items in it, then write a JavaScript function that accepts an object and tells you the length (tells you how many items are in it) of the object.

let sampleObject = {}

sampleObject.name = "test"
sampleObject.company = "tribute"
sampleObject.brand = "apple"

function objectLength(obj){

    objectLength = Object.keys(obj).length
    console.log(objectLength)
}


objectLength(sampleObject)