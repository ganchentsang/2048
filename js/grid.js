import number from "./number.js";

const grid = {
  gridElement: document.getElementsByClassName("grid")[0],
  cells: [],
  playable: false,
  directionRoots: {
    UP: [1, 2, 3, 4],
    RIGHT: [4, 8, 12, 16],
    DOWN: [13, 14, 15, 16],
    LEFT: [1, 5, 9, 13],
  },
  init: function () {
    const cellElements = document.getElementsByClassName("cell");
    let cellIndex = 1;

    for (let cellElement of cellElements) {
      grid.cells[cellIndex] = {
        element: cellElement,
        top: cellElement.offsetTop,
        left: cellElement.offsetLeft,
        number: null,
      };

      cellIndex++;
    }

    number.spawn();
    this.playable = true;
  },
  randomEmptyCellIndex: function () {
    let emptyCells = [];

    for (let i = 1; i < this.cells.length; i++) {
      if (this.cells[i].number === null) {
        emptyCells.push(i);
      }
    }

    if (emptyCells.length === 0) {
      return false;
    }

    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  },
  slide: function (direction) {
    if (!this.playable) {
      return false;
    }

    this.playable = false;

    const roots = this.directionRoots[direction];

    let increment = direction === "RIGHT" || direction === "DOWN" ? -1 : 1;

    increment *= direction === "UP" || direction === "DOWN" ? 4 : 1;

    for (let i = 0; i < roots.length; i++) {
      const root = roots[i];

      for (let j = 1; j < 4; j++) {
        const cellIndex = root + j * increment;
        const cell = this.cells[cellIndex];

        if (cell.number !== null) {
          let moveToCell = null;

          for (let k = j - 1; k >= 0; k--) {
            const foreCellIndex = root + k * increment;
            const foreCell = this.cells[foreCellIndex];

            if (foreCell.number === null) {
              moveToCell = foreCell;
            } else if (
              cell.number.dataset.value === foreCell.number.dataset.value
            ) {
              moveToCell = foreCell;
              break;
            } else {
              break;
            }
          }
          if (moveToCell !== null) {
            number.moveTo(cell, moveToCell);
          }
        }
      }
    }

    setTimeout(function () {
      if (number.spawn()) {
        grid.playable = true;
      } else {
        alert("GAME OVER!");
      }
    }, 500);
  },
};

export default grid;
