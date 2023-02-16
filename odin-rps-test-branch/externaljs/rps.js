function getComputerChoice(max) {
  const computerChoice = Math.floor(Math.random() * max);
  if (computerChoice == 0) {
    return "Rock";
  } else if (computerChoice == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection, gamePoints) {
  if (playerSelection == computerSelection) {
    return [
      "You drew! You picked " +
        playerSelection +
        " which ties with " +
        computerSelection,
      (gamePoints += 0),
    ];
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    gamePoints = gamePoints + 1;
    return [
      "You Won! You picked " +
        playerSelection +
        " which beats " +
        computerSelection,
      gamePoints,
    ];
  } else {
    gamePoints = gamePoints - 1;
    return [
      "You Lose! Your Opponent picked " +
        computerSelection +
        " which beats " +
        playerSelection,
      gamePoints,
    ];
  }
}

/*function game() {
  let gamePoints = 0;
  for (let i = 0; i < 5; i++) {
    const playerPrompt1 = prompt("Please enter which weapon you're picking!!!");
    const playerPrompt2 = playerPrompt1.toLowerCase();
    const playerSelection =
      playerPrompt2.charAt(0).toUpperCase() + playerPrompt2.slice(1);
    const computerSelection = getComputerChoice(3);
    let roundResult = playRound(playerSelection, computerSelection, gamePoints);
    console.log(roundResult[0]);
    gamePoints = roundResult[1];
  }
  if (gamePoints >= 1) {
    console.log("You win with " + gamePoints + " point/s");
  } else if (gamePoints == 0) {
    console.log("You weirdo, you tied with " + gamePoints + " point/s");
  } else {
    console.log("You lose with " + gamePoints + " point/s");
  }
}

game();
*/



function buttonCreator() {
  let myDiv = document.getElementById("myDiv");
const btns = ["Rock", "Paper", "Scissors"];
  for (let i = 0; i < btns.length; i++) {
    let htmlBtns = document.createElement("button");
    htmlBtns.id = btns[i];
    htmlBtns.innerHTML = btns[i];
    myDiv.appendChild(htmlBtns);
    htmlBtns.addEventListener("click", function(){
      let weaponSelected = htmlBtns.innerHTML;
      alert(weaponSelected);
      return weaponSelected;
    });
  }
}

playerSelection = buttonCreator();



