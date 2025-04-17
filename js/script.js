function getComputerChoice(x) {
    let randomChoice= Math.floor(Math.random() * 100) + 1;
    if (randomChoice <= 33) {
        return "Rock";
    } else if (randomChoice >= 34 && randomChoice>= 66){
        return "Paper";
    }else{
        return "Scissors";
    }
}

console.log(getComputerChoice());