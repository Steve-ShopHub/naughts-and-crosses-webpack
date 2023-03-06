
import Gameboard from './gameboard.js';
import Homepage from './homepage.js';



const Player = (() => {
    


    const getCurrentPlayer = function() {
        
    }
    
    const switchPlayerTurn = function() {
        if (currentPlayer == playerOne) {
          currentPlayer = playerTwo;
      } else if (currentPlayer == playerTwo) {
          currentPlayer = playerOne;
      }
      }



    const pick = function (gridBlock) {
       
        if (Gameboard.squares[gridBlock.dataset.key] !== 'null') {
            console.log(Gameboard.squares[gridBlock.dataset.key]);
            return;
        }
        Gameboard.squares[gridBlock.dataset.key] = currentPlayer.getSymbol();
                
        const symbol = document.createElement('img');
        symbol.setAttribute('src', `./img/${currentPlayer.getSymbol()}.png`);
        symbol.classList.add(currentPlayer.getSymbol())
        gridBlock.appendChild(symbol);

        checkGameStatus();

        switchPlayerTurn();
    };


    const checkGameStatus = function() {
        console.log(Gameboard.squares);
        // let gameFinish = null;
        if (
            (Gameboard.squares[0] == 'cross' &&
            Gameboard.squares[1] == 'cross' &&
            Gameboard.squares[2] == 'cross')
            ||
            (Gameboard.squares[3] == 'cross' &&
            Gameboard.squares[4] == 'cross' &&
            Gameboard.squares[5] == 'cross')
            ||
            (Gameboard.squares[6] == 'cross' &&
            Gameboard.squares[7] == 'cross' &&
            Gameboard.squares[8] == 'cross')
            ||
            (Gameboard.squares[0] == 'cross' &&
            Gameboard.squares[3] == 'cross' &&
            Gameboard.squares[6] == 'cross')
            ||
            (Gameboard.squares[1] == 'cross' &&
            Gameboard.squares[4] == 'cross' &&
            Gameboard.squares[7] == 'cross')
            ||
            (Gameboard.squares[2] == 'cross' &&
            Gameboard.squares[5] == 'cross' &&
            Gameboard.squares[8] == 'cross') 
            ||
            (Gameboard.squares[0] == 'cross' &&
            Gameboard.squares[4] == 'cross' &&
            Gameboard.squares[8] == 'cross')
            ||
            (Gameboard.squares[2] == 'cross' &&
            Gameboard.squares[4] == 'cross' &&
            Gameboard.squares[6] == 'cross')         
            )          
             {alert('you win!')}
             else if (
            (Gameboard.squares[0] == 'naught' &&
            Gameboard.squares[1] == 'naught' &&
            Gameboard.squares[2] == 'naught')
            ||
            (Gameboard.squares[3] == 'naught' &&
            Gameboard.squares[4] == 'naught' &&
            Gameboard.squares[5] == 'naught')
            ||
            (Gameboard.squares[6] == 'naught' &&
            Gameboard.squares[7] == 'naught' &&
            Gameboard.squares[8] == 'naught')
            ||
            (Gameboard.squares[0] == 'naught' &&
            Gameboard.squares[3] == 'naught' &&
            Gameboard.squares[6] == 'naught')
            ||
            (Gameboard.squares[1] == 'naught' &&
            Gameboard.squares[4] == 'naught' &&
            Gameboard.squares[7] == 'naught')
            ||
            (Gameboard.squares[2] == 'naught' &&
            Gameboard.squares[5] == 'naught' &&
            Gameboard.squares[8] == 'naught') 
            ||
            (Gameboard.squares[0] == 'naught' &&
            Gameboard.squares[4] == 'naught' &&
            Gameboard.squares[8] == 'naught')
            ||
            (Gameboard.squares[2] == 'naught' &&
            Gameboard.squares[4] == 'naught' &&
            Gameboard.squares[6] == 'naught')  
                
             )
             {alert('you lose!')}

            //  else alert('Draw!');
        
    }



    return { pick };
})();

export default Player ;




export const playerFactory = (name, symbol) => {


    const getName = () => name;
    const getSymbol = () => symbol;
    let score = 0;
    
    const wins = () => winTally;
    return { getName, getSymbol, wins, score};
  };

const playerOne = playerFactory('Player 1', 'cross');
const playerTwo = playerFactory('Player 2', 'naught');

let currentPlayer = playerOne;

