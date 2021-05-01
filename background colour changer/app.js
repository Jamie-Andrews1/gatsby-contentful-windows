let colours = ['yellow', 'green', 'blue', 'orange', 'pink'];

const btn = document.querySelector('.button').addEventListener('click' , changecolor)



function changecolor(){
 const colourIndex = parseInt(Math.random()*colours.length)
 document.body.style.backgroundColor = colours[colourIndex]
}