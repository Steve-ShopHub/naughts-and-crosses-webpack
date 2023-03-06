import Gameboard from './gameboard.js';



const Player = (() => {
    
    // const playerSymbol = function() {
    //     let symbol = 'cross'
    //     return symbol;
    // }
    
    const pick = function (gridBlock) {
        let playerSymbol = 'cross';
        if (Gameboard.squares[gridBlock.dataset.key] !== 'null') {
            return;
        }
        Gameboard.squares[gridBlock.dataset.key] = playerSymbol;
        // alert(Gameboard.squares[gridBlock.dataset.key]);
                
        const symbol = document.createElement('img');
        symbol.setAttribute('src', `./img/${playerSymbol}.png`);
        symbol.classList.add(playerSymbol)
        gridBlock.appendChild(symbol);
    };
  
    return { pick };
  })();

  export default Player ;