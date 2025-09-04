
function generateComputerChoice(){
  let computerChoice;
  let randomNumber=Math.random()*3;
  if(randomNumber>0 && randomNumber<=1){
    computerChoice='Bat';
  }
  else if(randomNumber>1 && randomNumber<=2){
    computerChoice='Ball';
  }
  else{
    computerChoice='Stump';
  }
  return computerChoice;
}

function getResult(userMove,computerMove){
  let resultMsg;
  if(userMove===computerMove){
    resultMsg='tie'
    score.tie++;
  }
  else if ((userMove == 'Bat' && computerMove == 'Ball') || (userMove == 'Ball' && computerMove == 'Stump') || (userMove == 'Stump' && computerMove == 'Bat')) 
  {
    resultMsg='user won'
    score.win++;
  }
  else{
    score.lose++;
    resultMsg='computer won'
  }

  return resultMsg;
}

let scoreStr=localStorage.getItem('score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
  score=scoreStr?JSON.parse(scoreStr): {
    win:0,
    lose:0,
    tie:0,
  };

score.displayScore=function(){
  return `Score: won: ${score.win}, lost: ${score.lose} , tie: ${score.tie}`;
};

  showResult();
}

function showResult(userMove,computerChoice,resultMsg){
  localStorage.setItem('score',JSON.stringify(score));
  document.querySelector('#user_move').innerText=userMove ? `You have chosen ${userMove}` : '';
  document.querySelector('#computer_move').innerText=computerChoice?`Computer choice is ${computerChoice}`:'';
  document.querySelector('#result').innerText=resultMsg?resultMsg:'';
  document.querySelector('#score').innerText=score.displayScore();
  //   alert(`You have chosen ${userMove}. Computer choice is ${computerChoice}
    
  //   ${resultMsg}

  //   ${score.displayScore()}`
  // );

}