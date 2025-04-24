
let squares = document.querySelectorAll('.square');
let mole = document.querySelector('.mole');
let timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

squares.forEach(
     (square) => {
          square.addEventListener('click', 
               () => {

                    
                    //square.classList.toggle("mole")
                    console.log(square.id)
                    if(square.id == square.id){
                         square.classList.add('mole')
                    }
                    else if(square.id != square.id){
                         square.classList.remove('mole')
                    }
                    
               }
          )
     }
)
