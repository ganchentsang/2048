import grid from "./js/grid.js";

grid.init();

const bodyElement = document.querySelector("body")

let direction;

bodyElement.addEventListener("keydown", function (evt) {
  switch (evt.key) {
    case "ArrowLeft":
      direction = "LEFT";
      break;
    case "ArrowRight":
      direction = "RIGHT";
      break;
    case "ArrowUp":
      direction = "UP";
      break;
    case "ArrowDown":
      direction = "DOWN";
      break;
  }
  console.log(direction);
  if (direction != null) {
    grid.slide(direction);
  }
  return false;
});
