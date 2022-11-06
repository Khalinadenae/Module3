const btn = document.getElementById('btn')
const link = document.getElementById('link')
const main = document.getElementById('main')
  //get atrribute of a element
  let attr = link.getAttribute('href')


  function displayLink(){
  let newP = document.createElement('p')
  let newText = document.createTextNode(attr)
  newP.appendChild(newText)
  main.appendChild(newP)
  }
                                   
  