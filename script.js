
let squares = document.querySelectorAll('.square');
let mole = document.querySelector('.mole');
let timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let result = 0;
let hitPosition;
let currentTime = 60;
function randomSquare(){
     
     squares.forEach(
          square => {square.classList.remove('mole')}
     )
     let randomSquare = squares[Math.floor(Math.random() * squares.length)];

randomSquare.classList.add('mole')
hitPosition = randomSquare.id;
}


let timerId; 
function showMove(){
     timerId = setInterval(randomSquare, 1000)
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
showMove();
let countDownTimerId = setInterval(countDown, 1000);

function countDown() {
     currentTime--
     timeLeft.textContent = currentTime;
     if(currentTime <= 0){
          clearInterval(countDownTimerId)
          clearInterval(timerId)
     }
}
