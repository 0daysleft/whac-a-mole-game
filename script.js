
let squares = document.querySelectorAll('.square');
let mole = document.querySelector('.mole');
let timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let result = 0;

function randomSquare(){
     
     squares.forEach(
          square => {square.classList.remove('mole')}
     )
     let randomSquare = squares[Math.floor(Math.random() * squares.length)];

randomSquare.classList.add('mole')
}

//let timerId = setInterval(randomSquare, 20)
