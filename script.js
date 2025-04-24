
let squares = document.querySelectorAll('.square');
let mole = document.querySelector('.mole');
let timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let startGame = document.querySelector('#start-game');
let result = 0;
let countDownTimerId = null;
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

function startCounter(){
     countDownTimerId = setInterval(countDown, 1000);
}

function showMove(){
     timerId = setInterval(randomSquare, 1000)
}
if(startGame){
startGame.addEventListener('click', () => {
     document.querySelector(".btn").style.display = 'none'
     document.querySelector(".grid").style.display = 'flex'
     document.querySelector(".result-timer").style.display = 'block'
     result = 0;
     currentTime = 10;
     startCounter()
     showMove()
     startGame.style.visibility = 'hidden'
     }
)
}
else{
     console.log("error happened")
}
function countDown() {
     currentTime--
     timeLeft.textContent = currentTime;
     if(currentTime <= 0){
          clearInterval(countDownTimerId)
          clearInterval(timerId)
          startGame.style.visibility = 'visible'
          document.querySelector(".grid").style.display = 'none'
     }
}

