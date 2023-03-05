const gameGridContainer = document.querySelector("#board-grid-container");
const gameGrid = document.querySelector("#board-grid");

////////////////

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
      gridBlock.addEventListener("click", playerPick);
      gameGrid.appendChild(gridBlock);
    });
  };

  function playerPick() {}

  return {
    squares,
    constructGrid,
  };
})();

////////////////

Gameboard.constructGrid();

const Player = () => {
  const playerPick = function () {
    // some function
  };

  return { playerPick };
};

// export

const Game = () => {
  const win = () => null;
};

/*

Board

0 1 2
3 4 5
6 7 8

Winning combinations


012
345
678
048
846
036
147
258

If no winning combinations (^) && no array items = null, then tie.

*/
