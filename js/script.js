const ComputerChoiceDisplay = document.getElementById('Computer-choice');
const YourChoiceDisplay = document.getElementById('Your-choice');
const ResultDisplay = document.getElementById('Result');

const Button = document.querySelectorAll('button');

const ClickSound = new Audio("Sound Effects/click.wav");
const WinSound = new Audio("Sound Effects/win.wav");




// console.log(Button)

// Game logic
let i;
let RandomGen;


const GameImages = ["Images/Rock.png", "Images/Paper.png", "Images/Scissors.png"]

Button.forEach(Choice => Choice.addEventListener('click', (e) => {

    i = e.target.id;
    YourChoiceDisplay.src = GameImages[i]
    ClickSound.play();

    GenrateComputerChoice()



    Result()
}))


const GenrateComputerChoice = () => {
    RandomGen = Math.floor(Math.random() * 3);

    ComputerChoiceDisplay.src = GameImages[RandomGen]




}

const Result = () => {
    if (i == 0 && RandomGen == 2) {
        ResultDisplay.innerHTML = "You Won"
    }
    if (i == 1 && RandomGen == 0) {
        ResultDisplay.innerHTML = "You Won"
    }
    if (i == 2 && RandomGen == 1) {
        ResultDisplay.innerHTML = "You Won"
    }
    if (i == RandomGen) {

        ResultDisplay.innerHTML = "It's a Draw"
    }
    else if (i == 0 && RandomGen == 1) {
        ResultDisplay.innerHTML = "You lose"
    }
    else if (i == 1 && RandomGen == 2) {
        ResultDisplay.innerHTML = "You lose"
    }
    else if (i == 2 && RandomGen == 0) {
        ResultDisplay.innerHTML = "You lose"
    }

    if (ResultDisplay.innerHTML == "You Won") {
        WinSound.play();

    }


}









