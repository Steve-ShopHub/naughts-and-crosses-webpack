import Gameboard from './gameboard.js';

const Player = (() => {
    const pick = function (gridBlock) {
        gridBlock.style.backgroundColor = 'green'
    };
  
    return { pick };
  })();

  export default Player ;