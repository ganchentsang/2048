import number from "./numbers.js"

// initalize grid
const grid = {
  // get the first element that has a class of grid or undefined
  gridElement: document.getElementsByClassName("grid")[0],
  // initialize cells to an empty array
  cells = [],
  // initialize playable to false
  playable: false,
  // initiaize the function
  init: function () {
    // set cellElements to a variable which grabs the cell class
    const cellElements = documents.getElementsByClassName("cell");
    // initialize cell index to 1
    let cellIdx = 1
    // creates a loop that iterates through cellElements
    for (let cellElement of cellElements) {
      // creates an array with the following classes
      grid.cells[cellIdx] = {
        element: cellelement,
        top: cellElement.offsetTop,
        left: cellElement.offsetLeft,
        number: null
      }
      // adds one to cellIdx
      cellIdx++
    }
    // creates the first number and sets the game to playable
    number.spawn()
    this.playable = true
  },
};

export default grid;