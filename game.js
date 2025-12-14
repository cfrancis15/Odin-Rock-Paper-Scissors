let playerMove = ''

let gamesPlayed = 0

let wonGames = 0


function rpsGame(playerMove){

    //randomly generating computer's move
    let number = Math.random()

    let machineChoice

    if(number <.34){
        machineChoice = "Rock"
    }else if(number >.33 && number < .67){
        machineChoice = "Paper"
    }else{
        machineChoice = "Scissors"
    }
    
    //what are the moves?
    console.log(`Computer's Move: ${machineChoice}`)
    console.log(`Player's move: ${playerMove}`)


    //determining outcome
    if(machineChoice === playerMove){
        alert('Verdict: Tie')
    }else if (playerMove === "Rock" && machineChoice==="Scissors"){
        wonGames += 1
        alert('Verdict: You Win!')
    }else if(playerMove === "Paper" && machineChoice==="Rock"){
        wonGames += 1
        alert('Verdict: You Win!')

    }else if (playerMove === "Scissors" && machineChoice==="Paper"){
        wonGames += 1
        alert('Verdict: You Win!')
    }else{
        alert('Verdict: You lose :(')
    }
    
}
     

//for loop to play 5 games

for(i=0;gamesPlayed<5;i++){

    playerMove = prompt("Make a move: ")

    // calling the game function with player's input as argument
    rpsGame(playerMove)

    gamesPlayed += 1

    if(gamesPlayed === 5 && wonGames > 2){
        alert("You are the champion!")
    } else if(gamesPlayed === 5){
        alert(`You suck at this game... Won games: ${wonGames}`)
    }
}


    



