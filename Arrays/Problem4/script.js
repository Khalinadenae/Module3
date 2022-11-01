/*
Write a JavaScript function to remove duplicate items from an array (consider case sensitivity).

*/
  
  function removeDuplicates(arr){
    let sorted = []
    
    for (let i = 0; i < arr.length; i++) {
    sorted.push(arr[i].toLowerCase());
  };
     sorted = sorted.filter((element,index) =>{
      return sorted.indexOf(element) === index;
    }) 
    console.log(sorted)
  }
  
  removeDuplicates( ['A', "a", 'B', 'A', 'C', 'B'])
  
  