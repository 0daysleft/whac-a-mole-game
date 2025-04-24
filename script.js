
let squares = document.querySelectorAll('.square');
let mole = document.querySelector('.mole');
let timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let result = 0;
let hitPosition;
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
                    console.log(square.id)
                    //showMove();
                    result++;
                    square.classList.add('mole')
                    console.log(result)
                    //clearInterval(timerId)
               }
               else{
                    showMove()
                    square[hitPosition].classList.add('mole')
                    clearInterval(timerId)
               }
          })
     }
)
