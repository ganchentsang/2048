// initlialized the constant number
const number = {
  // gave the numbers class an empty array
  numbers: [],
  // created a get element function
  getElements: function () {
    // takes in the class number listed above and sets it to numberElements
    const numberElements = document.getElementsByClassName("number");
    // create a for of loop that iterates through numberElements
    for (let numberElement of numberElements) {
      // pushes the number element thats being iterated into the numbers array
      this.numbers.push(numberElement)
    }
  },
  // initialized the spawn function
  spawn: function () {
    // set the constant emptyCellIndex to a random cell, whcih will spawn in blocks when theres an empty block
    const emptyCellIndex = grid.randomEmptyCellIndex();
  },
};
