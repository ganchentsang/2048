// import grid from grid file
import grid from './grid.js'

// initialize grid
grid.init()

// create event listener to change the 'direction' variable based on click
document.addEventListener("keyUp", function(evt) {
  // initialize direction to null
  let direction = null

  // set 'direction' to a string direction based on the char of the key pressed
  if (evt.key === 38) {
    direction = "UP"
  }
  if (evt.key === 39) {
    direction = "RIGHT"
  }
  if (evt.key === 37) {
    direction = "LEFT"
  }
  if (evt.key === 40) {
    direction = "DOWN"
  }
})