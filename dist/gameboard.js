// import Homepage from './homepage';
import Player, {playerFactory} from './player.js';




const Gameboard = (() => {
  
  const playerOne = playerFactory('Player 1', 'cross');
  const playerTwo = playerFactory('Player 2', 'naught');
    let currentPlayer = playerOne;
  
  const content = document.querySelector('#content');

  const display = function() {
    const displayContainer = document.createElement('div');
    content.appendChild(displayContainer);
    displayContainer.id = 'display-container';

    const playerTurnTitle = document.createElement('h1');
    playerTurnTitle.id = 'player-title';
    displayContainer.appendChild(playerTurnTitle);
    displayContainer.removeChild
    playerTurnTitle.textContent = `${currentPlayer.getName()}'s turn`

  }



  

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
    let gameGrid = document.createElement('div');
    gameGrid.id = 'board-grid';
    content.appendChild(gameGrid);
    squares.forEach((square, index) => {
      const gridBlock = document.createElement("div");
      gridBlock.classList = "square";
      gridBlock.dataset.key = index;

    //   gridBlock.textContent = index;
      gridBlock.addEventListener("click", function() {
        Player.pick(gridBlock)
    }, {once: true});

    gridBlock.addEventListener('mouseenter', function() {
      Player.mouseEnter(gridBlock)
    });

    gridBlock.addEventListener('mouseleave', function() {
      Player.mouseLeave(gridBlock)
    });

      gameGrid.appendChild(gridBlock);
    });
  };




 



  return {
    squares,
    constructGrid,
    display,
  };
})();


// Gameboard.constructGrid();


export default Gameboard;