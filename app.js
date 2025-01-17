/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScores, activePlayer, dice1, dice2, gamePlaying, lastDice;


init();

document.querySelector('.btn-roll').addEventListener('click', function name() {

    if (gamePlaying){
        //--1
        dice1 = Math.floor(Math.random() * 6) +1;
        dice2 = Math.floor(Math.random() * 6) +1;

        //--2
        var diceDOM1 = document.querySelector('#dice-0');
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';

        var diceDOM2 = document.querySelector('#dice-1');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';



        // return;
        //--3
        if (dice1 !== 1 && dice2 !== 1 )
        {
            roundScores = roundScores + (dice1 + dice2);


            document.querySelector('#current-' + activePlayer).textContent = roundScores;

            lastDice = dice1;

        }
        else {
            lastDice = 0;
            nextPlayer();

        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying)
    {
        //
        scores[activePlayer] += roundScores;

        //
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //
        if (scores[activePlayer] >= 100){
            document.querySelector('#name-'+activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
        }
        else {
            nextPlayer()
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    document.querySelector('#dice-0').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';
}

function init() {
    scores = [0,0];
    roundScores = 0;
    activePlayer = 0;
    gamePlaying = true;

    lastDice = 0;

    document.querySelector('#dice-0').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}







