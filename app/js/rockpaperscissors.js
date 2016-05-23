////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    var playerMove = move;
    // If a `move` has a value, your expression should evaluate to that value.
    if(playerMove == null){
            
           getInput();
    
    }else{
    
        playerMove = move;
        return playerMove;
    
    }
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    var computerMove = move;
    // If a `move` has a value, your expression should evaluate to that value.
    if(computerMove == null){
            
           computerMove = randomPlay();
           return computerMove;
    
    }else{
    
        computerMove = move;
        return computerMove;
    
    }
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove == computerMove){

            winner = "tie";

    }else if(playerMove == "rock"){

            if(computerMove == "paper"){

                winner = "computer";

            }else{

            winner = "player";
        }

    }else if(playerMove == "paper"){

            if(computerMove == "rock"){

                winner = "player";

            }else{

                winner = "computer";

            }


    }else{

        if(computerMove == "rock"){


            winner = "computer";

        }else{


            winner = "player";

        }


    }

    return winner;
}

            var playToFive = function() {
              console.log('Let\'s play Rock Paper Scissors');
              var playerWins = 0;
              var computerWins = 0;
              // This function should continue to play Rock Paper Scissors until either the
              // player or the computer has won five times.
              // After each 'round', display some text in the console indicating who played
              // what, who won, and what the current scoreboard looks like.
              // For example,
              //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
              //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
              /* YOUR CODE HERE */
              
              while (playerWins <= 4 || computerWins <= 4) {
                    
                    var move        = getInput();
                    var compMove    = randomPlay();
                  
                    var playerMove      = getPlayerMove(move);
                    var computerMove    = getComputerMove(compMove);
                  
                    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
                  
                    var winner = getWinner(playerMove,computerMove);
                    
                    if(winner == "tie"){
                    
                        console.log('It is a TIE!!!');
                    
                    }else if(winner == "player"){
                    
                        console.log('The winner is: ' + winner + '!!!');
                        playerWins += 1;
                    
                    }else{
                    
                        console.log('The winner is: ' + winner + '!!!');
                        computerWins +=1;
                    
                    }
                    
                    
                     if (playerWins === 5) { 
                     
                     
                        console.log('***** GAME OVER *****\n');
                        console.log('The FINAL score PLAYER: ' + playerWins + ' | COMPUTER: ' + computerWins + '\n');
                     break; 
                     
                     }else if (computerWins === 5) { 
                     
                        console.log('***** GAME OVER *****\n');
                        console.log('The FINAL score PLAYER: ' + playerWins + ' | COMPUTER: ' + computerWins + ' \n');
                     break; 
                     
                     }else{
                     
                            console.log('The score is currently PLAYER: ' + playerWins + ' to COMPUTER: ' + computerWins + '\n');
                     
                     }
                    
                }
              
                    return [playerWins, computerWins];
              
            }

