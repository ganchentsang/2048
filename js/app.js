// import grid from grid file
import grid from "./grid.js";

// initialize grid
grid.init();

// create event listener to change the 'direction' variable based on click
document.addEventListener("keyUp", function (evt) {
  // initialize direction to null
  let direction = null;

  // set 'direction' to a string direction based on the char of the key pressed
  if (evt.key === 38) {
    direction = "UP";
  }
  if (evt.key === 39) {
    direction = "RIGHT";
  }
  if (evt.key === 37) {
    direction = "LEFT";
  }
  if (evt.key === 40) {
    direction = "DOWN";
  }

  // create an if loop that takes in direction and compares it to null
  // if there is a direction, it will call grid.slide to move the grid in that direction
  if (direction != null) {
    grid.slide(direction);
  }

  return false;
});
