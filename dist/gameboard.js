
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
      gridBlock.addEventListener("click", Player.pick);
      gameGrid.appendChild(gridBlock);
    });
  };

  return {
    squares,
    constructGrid,
  };
})();

