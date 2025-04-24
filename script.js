
let squares = document.querySelectorAll('.square');
let mole = document.querySelector('.mole');
let timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let result = 0;

function randomSquare(){
     let randomPosition = squares[Math.floor(Math.random() * squares.length)].id;
     
squares.forEach(
     square => square.classList.remove('mole')
)

//console.log(randomPosition);

//squares[randomPosition].classList.add('mole')
//console.log(randomPosition)
//squares[randomPosition].classList.add('mole')
}

randomSquare()
