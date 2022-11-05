//Create an object, then write a JavaScript function that checks whether an object contains the specified key.

//create an object 

let sampleObject = {}

sampleObject.name = "test"
sampleObject.company = "tribute"
sampleObject.brand = "remarks"


console.log(sampleObject)

// create a function to check whether an object contains the specified key 

function checkForKey(obj){
    console.log(Object.hasOwn(obj, 'name'))
}


checkForKey(sampleObject)
//expected output : True 