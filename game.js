let playerMove = prompt("Make a move: ")


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
        alert('Verdict: You Win!')
    }else if(playerMove === "Paper" && machineChoice==="Rock"){
        alert('Verdict: You Win!')
    }else if (playerMove === "Scissors" && machineChoice==="Paper"){
        alert('Verdict: You Win!')
    }else{
        alert('Verdict: You lose :(')
    }
    
}
     

// calling the game function with player's input as argument
rpsGame(playerMove)
    






