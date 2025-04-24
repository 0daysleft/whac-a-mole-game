
let squares = document.querySelectorAll('.square');
let mole = document.querySelector('.mole');
let timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let result = 0;

function randomSquare(){
     
     squares.forEach(
          square => square.classList.remove('mole')
     )
     let randomPosition = squares[Math.floor(Math.random() * squares.length)].id;

squares[randomPosition].classList.add('mole')
}

//let timerId = setInterval(randomSquare, 2000)
