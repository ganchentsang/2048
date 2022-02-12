import grid from "./grid.js";

grid.init();

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
