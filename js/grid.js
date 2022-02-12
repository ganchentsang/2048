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
  // intialized the randomEmptyCellIndex
  randomEmptyCellIndex: function() {
    // initialize emptyCells to an empty array
    let emptyCells = []
    // create a for loop that iterates through the cells length, essentially goes on forever until there are no more empty cells
    for (let i = 0; i < this.cells.length; i++) {
      // if there is null, then its going to push a cell into the current empty cell
      if (this.cells[i].number === null) {
        emptyCells.push(1)
      }
    }
    // returns false when there's no more empty cells 
    if (emptyCells.length === 0) {
      return false
    }
    return emptyCells[Math.floor(Math.random() * emptyCells.length)]
  }
};

export default grid;