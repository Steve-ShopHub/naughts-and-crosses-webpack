import Player from './player.js';

const gameGridContainer = document.querySelector("#board-grid-container");
const gameGrid = document.querySelector("#board-grid");

const Gameboard = (() => {
  const squares = [
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
  ];

  const constructGrid = function () {
    squares.forEach((square, index) => {
      const gridBlock = document.createElement("div");
      gridBlock.classList = "square";
      gridBlock.dataset.key = index;
      gridBlock.textContent = index;
      gridBlock.addEventListener("click", function() {
        Player.pick(gridBlock)
    });
      gameGrid.appendChild(gridBlock);
    });
  };

  return {
    squares,
    constructGrid,
  };
})();


Gameboard.constructGrid();


export default Gameboard;