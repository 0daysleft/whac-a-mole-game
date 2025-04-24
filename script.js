
let squares = document.querySelectorAll('.square');
let mole = document.querySelector('.mole');
let timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let result = 0;
let hitPosition = null;
let timerId = null;
let currentTime = 10;
function randomSquare(){
     
     squares.forEach(
          square => {square.classList.remove('mole')}
     )
     let randomSquare = squares[Math.floor(Math.random() * squares.length)];

randomSquare.classList.add('mole')
hitPosition = randomSquare.id;
}

squares.forEach(
     square => {
          square.addEventListener('click', ()=> {
               if(square.id == hitPosition){
                    result++;
                    score.textContent = result
                    hitPosition = null;
               }
          })
     }
)

function showMove(){
     timerId = setInterval(randomSquare, 1000)
}

showMove();

function countDown() {
     currentTime--
     timeLeft.textContent = currentTime;
     if(currentTime <= 0){
          clearInterval(countDownTimerId)
          clearInterval(timerId)
     }
}

let countDownTimerId = setInterval(countDown, 1000);