console.log('JavaScript loaded.');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded.');

    const playerInput = document.getElementById('player_input');
    const output = document.getElementById('output');

    function appendToOutput(text) {
        output.value += '\n' + text;
        output.scrollTop = output.scrollHeight;
    }

    function showStartScreen() {
        appendToOutput(
`
        Welcome to...

 _______               __          ______                       __      _______                                    
|_     _|.-----.--.--.|  |_ ______|   __ \\.---.-.-----.-----.--|  |    |    ___|.----.-----.-----.-----.-----.----.
  |   |  |  -__|_   _||   _|______|   __ <|  _  |__ --|  -__|  _  |    |    ___||   _|  _  |  _  |  _  |  -__|   _|
  |___|  |_____|__.__||____|      |______/|___._|_____|_____|_____|    |___|    |__| |_____|___  |___  |_____|__|  
                                                                                           |_____|_____|           



`            
        )
    }

    const ROWS = [
        'start', 'car', 'car', 'car', 'car', 'truck', 'safe', 'turtle', 'log', 'log', 'turtle', 'log', 'end'
    ];

    const MAX_COLS = 10;

    const gameState = {
        state: 'ready', // Can be: ready, playing, dead
        playerRow: 0,
        playerCol: 5,
    }

    var killPlayerTimer = null;

    function cancelKillPlayerTimer() {
        if (killPlayerTimer) {
            clearTimeout(killPlayerTimer);
        }
    }

    function killPlayer(causeOfDeath) {
            gameState.state = 'dead';
            appendToOutput(
`Game over!

You were killed by ` + causeOfDeath + '.'
            );
            promptForReset();
    }

    function startKillPlayerTimer() {
        killPlayerTimer = setTimeout(() => {
            killPlayer('a ' + ROWS[gameState.playerRow]);
        }, Math.random() * 5000);
    }

    function reset() {
        showStartScreen();
        promptToStart();
        gameState.state = 'ready';
    }

    function promptToStart() {
        appendToOutput(`Type 'start' to begin!`);
    }

    function promptForReset() {
        appendToOutput(`Type 'reset' to reset the game.`);
    }

    function promptCurrentGameState() {
        switch(ROWS[gameState.playerRow]) {
            case 'start':
                appendToOutput(
`You are a frog.
You find yourself sitting on a patch of grass.
In front of you is a road with cars and trucks whirring by.
`
                );
                break;
            case 'end':
                appendToOutput(
`What? You actually made it to the end??
That... That can't be! You beat a visual game using text only???
No! No that just won't do!
...
I know...
I'll put you back at the start! HAHAHA!!!
Try again... if you dare!`
                )
                return;
            case 'safe':
                appendToOutput(
`You are a frog.
You find yourself sitting on a patch of grass.
Behind you is a road with cars and trucks whirring by.
In front of you is a river with logs and turtles floating by.
You might be able to land on a log or turtle if you just get the timing right...
`
                );
                break;
            default:
                appendToOutput(
`You are a frog.
You find yourself sitting on an asphalt road.
Cars and trucks are whirring by in all directions!
Get out of here!`
                );
                break;
        }

        appendToOutput('What do you do?');
    }

    function startGame() {
        gameState.state = 'playing';
        gameState.playerRow = 0;
        gameState.playerCol = 5;
        handleNewPlayerPosition();
    }

    function handleNewPlayerPosition() {
        switch(ROWS[gameState.playerRow]) {
            case 'start':
                promptCurrentGameState();
                break;
            case 'car':
            case 'truck':
                startKillPlayerTimer();
                promptCurrentGameState();
                break;
            case 'log':
            case 'turtle':
                killPlayer('drowning');
                break;
            case 'safe':
                promptCurrentGameState();
                break;
            case 'end':
                promptCurrentGameState();
                gameState.playerRow = 0;
                promptCurrentGameState();
                break;
            default:
                break;
        }
    }

    function processGameEvent(event) {
        if (gameState.state !== 'playing') {
            appendToOutput(`You must start the game to play.`);
            if (gameState.state === 'ready') {
                promptToStart();
            } else {
                promptForReset();
            }
            return;
        }
        cancelKillPlayerTimer();
        switch (event) {
            case 'up':
                if (gameState.playerRow < ROWS.length) {
                    gameState.playerRow += 1;
                }
                handleNewPlayerPosition();
                break;
            case 'down':
                if (gameState.playerRow > 0) {
                    gameState.playerRow -= 1;
                } else {
                    appendToOutput(`You cannot move that direction.`);
                }
                handleNewPlayerPosition();
                break;
            case 'left':
                if (gameState.playerCol > 0) {
                    gameState.playerCol -= 1;
                } else {
                    appendToOutput(`You cannot move that direction.`);
                }
                handleNewPlayerPosition();
                break;
            case 'right':
                if (gameState.playerCol < MAX_COLS) {
                    gameState.playerCol += 1;
                } else {
                    appendToOutput(`You cannot move that direction.`);
                }
                handleNewPlayerPosition();
                break;
            default:
                break;
        }
    }

    function processCommand(command) {
        switch (command) {
            case 'help':
                appendToOutput(
                    `Available commands are:
                        up: move the player up
                        left: move the player left
                        right: move the player right
                        down: move the player down
                        reset: reset the game
                        start: start the game
                        help: show this message`
                );
                break;
            case 'start':
                if (gameState.state !== 'ready') {
                    appendToOutput(`Cannot start game.`);
                    promptForReset();
                } else {
                    startGame();
                }
                break;
            case 'reset':
                reset();
                break;
            case 'up':
            case 'left':
            case 'right':
            case 'down':
                processGameEvent(command);
                break;
            default:
                appendToOutput(
                    `Command not recognized!`
                );
                break;
        }
    }

    function processPlayerInput() {
        const command = playerInput.value.trim().toLowerCase();
        playerInput.value = ''; // Clear the input box
        appendToOutput(command + '\n');
        processCommand(command);
    }

    if (playerInput && output) {
        playerInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                processPlayerInput();
            }
        })
    }

    playerInput.focus();
    reset();
    console.log('Game ready!');
});
