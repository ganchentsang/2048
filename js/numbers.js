import grid from "./grid.js";

const number = {
  numbers: [],
  getElements: function () {
    const numberElements = document.getElementsByClassName("number");
    for (let numberElement of numberElements) {
      this.numbers.push(numberElement);
    }
  },

  spawn: function () {
    const emptyCellIndex = grid.randomEmptyCellIndex();
    if (emptyCellIndex === false) {
      return false;
    }
    const numberElement = document.createElement("div");
    const numberValue = 2;
    numberElement.innerText = numberValue;
    numberElement.dataset.value = numberValue;
    numberElement.classList.add("number");
    numberElement.style.top = `${grid.cells[emptyCellIndex].top}px`;
    numberElement.style.left = `${grid.cells[emptyCellIndex].left}px`;
    grid.cells[emptyCellIndex].number = numberElement;
    grid.gridElement.append(numberElement);
    return true;
  },
};

export default number;
