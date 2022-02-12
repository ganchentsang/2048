import grid from "./grid";

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
      this.numbers.push(numberElement);
    }
  },
  // initialized the spawn function
  spawn: function () {
    // set the constant emptyCellIndex to a random cell, whcih will spawn in blocks when theres an empty block
    const emptyCellIndex = grid.randomEmptyCellIndex();
    // acts as a safeguard, will also turn the game off if there are no more empty cells
    if (emptyCellIndex === false) {
      return false;
    }
    // creates the variable numberElement and creates the element div
    const numberElement = document.createElement("div");
    // sets the number value to 2 (because the game revolves around the number 2)
    const numberValue = 2;

    // sets the texts and values to 2 (not gonna go too in depth because my brain hurts, if you're looking through my commits, hi you've found tired tenzin)
    numberElement.innerText = numberValue;
    numberElement.dataset.value = numberValue;
    numberElement.classList.add("number");

    numberElement.style.top = `${grid.cells[emptyCellIndex].top}px`;
    numberElement.style.left = `${grid.cells[emptyCellIndex].left}px`;

    grid.cells[emptyCellIndex].number = numberElement;
    grid.gridElement.append(numberElement);
  },
};

export default number;
