
import Gameboard from './gameboard.js';
import Homepage from './homepage.js';



const Player = (() => {
    



    const updateTitle = function() {
        const displayContainer = document.querySelector('#display-container');
        const playerTurnTitle =  document.querySelector('#player-title');
        playerTurnTitle.textContent = `${currentPlayer.getName()}'s turn`;
        displayContainer.removeChild(playerTurnTitle);
      
        displayContainer.appendChild(playerTurnTitle);
       }
    
    const switchPlayerTurn = function() {
        
        if (currentPlayer == playerOne) {
          currentPlayer = playerTwo;
      } else if (currentPlayer == playerTwo) {
          currentPlayer = playerOne;
      }
      updateTitle();
      }

      

    const mouseEnter = function(gridBlock) {
        if (Gameboard.squares[gridBlock.dataset.key] !== 'null') {
            return;
        }
        
        const symbol = document.createElement('img');
        symbol.setAttribute('src', `./img/${currentPlayer.getSymbol()}.png`);
        symbol.id = 'hover';

        
        symbol.classList.add(currentPlayer.getSymbol())
        gridBlock.appendChild(symbol);

        gridBlock.addEventListener('click', () => {
            symbol.classList.remove(currentPlayer.getSymbol())
            gridBlock.removeChild(symbol);
        });
    }

    const mouseLeave = function(gridBlock) {
        
        const symbol = document.querySelector('#hover');
        symbol.classList.remove(currentPlayer.getSymbol())
        gridBlock.removeChild(symbol);
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
             {alert('Crosses wins!')}
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
             {alert('Naughts wins!')}

             else if 
                (Gameboard.squares[0] !== 'null' &&
                Gameboard.squares[1] !== 'null' &&
                Gameboard.squares[2] !== 'null' &&
                Gameboard.squares[3] !== 'null' &&
                Gameboard.squares[4] !== 'null' &&
                Gameboard.squares[5] !== 'null' &&
                Gameboard.squares[6] !== 'null' &&
                Gameboard.squares[7] !== 'null' &&
                Gameboard.squares[8] !== 'null'
             ) alert('It\'s a draw!')
             

        
    }



    return { pick, mouseEnter, mouseLeave};
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

