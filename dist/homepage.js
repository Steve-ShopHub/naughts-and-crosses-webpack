import Gameboard from './gameboard.js';
import Player, {playerFactory} from './player.js';



const Homepage = (() => {
    
    
    // let currentPlayer = playerOne;

    const setPlayer = function() {
        let currentPlayer = playerOne;
        return currentPlayer;
    }


    const playerOne = playerFactory('Player 1', 'cross');
    const playerTwo = playerFactory('Player 2', 'naught');


    const initialize = function() {
        Gameboard.display();
        Gameboard.constructGrid();
        setPlayer();
      }

    const startGame = function() {
        initialize();
        content.removeChild(startBtn);
    }

    const content = document.querySelector('#content');

    

    const startBtn = document.createElement('button');
    startBtn.classList.add('start-button');
    startBtn.textContent = 'Start game!'

    content.appendChild(startBtn);
    startBtn.addEventListener('click', startGame);


    return {
        startGame,
        initialize,
    }

})();

export default Homepage;


const playerOne = playerFactory('Player 1', 'cross');
const playerTwo = playerFactory('Player 2', 'naught');

// Homepage.startGame();


/*

Add ......

P v P (P1 + P2)
    
    Enter player names

    Choose symbol (give range to choose from)

    Change game title to reflect image chosen (e.g. if Donut image and Cake chosen, display game title "Donuts vs Cake")

            Import font


P v AI - random

P v AI - impossible minmax algorithm




*/