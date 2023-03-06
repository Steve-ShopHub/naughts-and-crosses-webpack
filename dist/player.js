import Gameboard from './gameboard.js';

const gameGridContainer = document.querySelector("#board-grid-container");
const gameGrid = document.querySelector("#board-grid");
const crossImg = document.querySelector('.cross');
const naughtImg = document.querySelector('.naught');

const Player = (() => {
    const pick = function (gridBlock) {
        let playerSymbol = 'cross';
        const symbol = document.createElement('img');
        symbol.setAttribute('src', `./img/${playerSymbol}.png`);
        symbol.classList.add(`${playerSymbol}`)
        gridBlock.appendChild(symbol);
    };
  
    return { pick };
  })();

  export default Player ;