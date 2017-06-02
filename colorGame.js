let colors = generateRandomColors(6)

const body = document.getElementsByTagName('body')
const squares = document.querySelectorAll('.square')
const rgbDisplay = document.getElementById('picked-color')
const gameStatus = document.getElementById('game-status')
const headerDisplay = document.getElementsByTagName('h1')[0]
const resetButton = document.querySelector('#reset')
const easyButton = document.getElementById('easy-button')
const hardButton = document.getElementById('hard-button')
let pickedColor = pickColor()

easyButton.addEventListener('click', function(){
  easyButton.classList.add('selected')
  hardButton.classList.remove('selected')
  //show the winning color numbers in the rgb displayed
  rgbDisplay.textContent = pickedColor
  //generate three new colors
  colors = generateRandomColors(3)
  pickedColor = pickColor()
 for (let i = 0; i < squares.length; i++) {
    if (colors[i]){
      squares[i].style.backgroundColor = colors[i]
    } else{
      squares[i].style.display = 'none'
    }
 }
  //pick one of the three displayed


  //generate 3 squares with different colors, with one being the winning square
})

hardButton.addEventListener('click', function(){
  easyButton.classList.remove('selected')
  hardButton.classList.add('selected')
  //show the winning color numbers in the rgb displayed
  rgbDisplay.textContent = pickedColor
  //generate three new colors
  colors = generateRandomColors(6)
  pickedColor = pickColor()
 for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i]
      squares[i].style.display = 'block'
    }
 })

hardButton.addEventListener('click', function(){
  easyButton.classList.remove('selected')
  hardButton.classList.add('selected')
  //generate 6 new colors
  //pick one of the 6 displayed
  //show the winning color numbers in the rgb displayed
  //generate 6 squares with different colors, with one being the winning square
})

resetButton.addEventListener('click', function(){
  //generate all new colors
  colors = generateRandomColors(6)
  //pick a new color from the array
  pickedColor = pickColor()
  //change back winning rgb text to pickedColor
  rgbDisplay.textContent = pickedColor
  //re-randomize the square colors
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
  }
  //change back header display color to background color
  headerDisplay.style.backgroundColor = '#232323'
})

rgbDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
  //add starting colors to squares
  squares[i].style.backgroundColor = colors[i]
  //add click event to change clicked square colors
  squares[i].addEventListener('click', function(){
    //grab clicked color and tie it to a variable
     let clickedColor = this.style.backgroundColor
     //console.log(this.style.backgroundColor)
     //add logic to match colors
     if(clickedColor === pickedColor){
       gameStatus.textContent = 'Correct!'
       resetButton.textContent = 'Play Again?'
       //change all colors to picked color
       changeColor(clickedColor)
       //change header background color to match winning color
       headerDisplay.style.backgroundColor = clickedColor


     } else{
       //change wrong colored squares to background color
       this.style.backgroundColor = '#232323'
       gameStatus.textContent = 'Try Again'
     }
  })
}
//changes all square colors to our correctly clicked color
function changeColor(chosenColor){
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = chosenColor
  }
}

function pickColor(){
  const randomNumber = Math.floor(Math.random() * colors.length)
  return colors[randomNumber]
}

//to push random rgb color values () to an array
function generateRandomColors(num){
  //make an array
  let arr = []
  //repeat num times
  for (let i = 0; i < num; i++) {
    //get random rgb numbers and push that into the empty array
    arr.push(randomColor())
  }
  //return that array
  return arr
}
//to create random rgb numbers
function randomColor() {
  //pick a red color from 0 - 255
  const r = Math.floor(Math.random() * 256)
  //pick a green color from 0 - 255
  const g = Math.floor(Math.random() * 256)
  //pick a blue color from 0- 255
  const b = Math.floor(Math.random() * 256)
  //return combined random rgb numbers
  return 'rgb(' + r + ', ' + g + ', ' + b +')'
}
