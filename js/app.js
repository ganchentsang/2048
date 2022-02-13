/**
 * A function that takes in a grid and returns a CSS style sheet that can be injected into the page.
 * @param grid - The grid to create a CSS style sheet for.
 * @returns A CSS style sheet that can be injected into the page.
 */
import grid from "./grid.js";

/**
 * Initializes the grid.
 * @returns None
 */
grid.init();

/**
 * Handles the key press events. 
 * @param evt - the key press event. 
 * @returns None
 */
document.addEventListener("keyUp", function (evt) {
  let direction = null;
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
  if (direction != null) {
    grid.slide(direction);
  }
  return false;
});
