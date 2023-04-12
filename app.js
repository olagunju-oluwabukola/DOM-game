const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore=0;




document.querySelector(".check").addEventListener('click', function(){
 const guess= Number(document.querySelector('.guess').value);
 console.log(guess);

 if(!guess)
{
 document.querySelector('.message').textContent= 'No Number 😮';

}


else if (guess === secretNumber){
 document.querySelector('.message').textContent=  'Bravo 🥳🥳';
 document.querySelector('.number').textContent = secretNumber;
 document.querySelector('body').style.backgroundColor='#6ab347';
 document.querySelector('.number').style.width="30rem"

 if (score > highscore){
  highscore=score;
  document.querySelector('.highscore').textContent= highscore;
 }

}



else if (guess < secretNumber){
 if(score > 1){
  document.querySelector('.message').textContent= 'Input is low😋';
  score--;
  document.querySelector('.score').textContent=score;
 }
 else{
  document.querySelector('.message').textContent='You lost the game😛';
  document.querySelector('.score').textContent=0;
 }
}

else if (guess > secretNumber){

 if(score > 1){
  document.querySelector('.message').textContent='Input is high😋 ';
  score--;
  document.querySelector('.score').textContent=score;
 }
 else{
  document.querySelector('.message').textContent='You lost the game😛';
  document.querySelector('.score').textContent=0;
 }
}

}


);

const again= document.querySelector('.again');
again.addEventListener("click", function(){
 document.querySelector('.score').textContent=20
 document.querySelector('.number').textContent='?'
 document.querySelector('.message').textContent=  'Start guessing...';
 document.querySelector('body').style.backgroundColor='rgb(13, 14, 13)';
})

