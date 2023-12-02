// Student 2 Lafri
function result(){
    // Reference: https://www.youtube.com/watch?v=_FxJbZS_uFk(Js validation)
    // calculating score
    var score=0;
    if(document.getElementById('correct1').checked){
      score=score+2;
    }
    if(document.getElementById('wrong1.1').checked || document.getElementById('wrong1.2').checked || document.getElementById('wrong1.3').checked ){
      score--;
    }
  
    if(document.getElementById('correct2').checked){
      score=score+2;
    }
    if(document.getElementById('wrong2.1').checked || document.getElementById('wrong2.2').checked || document.getElementById('wrong2.3').checked ){
      score--;
    }
  
  
    if(document.getElementById('correct3').checked){
      score=score+2;
    }
    if(document.getElementById('wrong3.1').checked || document.getElementById('wrong3.2').checked || document.getElementById('wrong3.3').checked ){
      score--;
    }
  
    if(document.getElementById('correct4').checked){
      score=score+2;
    }
    if(document.getElementById('wrong4.1').checked || document.getElementById('wrong4.2').checked || document.getElementById('wrong4.3').checked ){
      score--;
    }
  
    if(document.getElementById('correct5').checked){
      score=score+2;
    }
    if(document.getElementById('wrong5.1').checked || document.getElementById('wrong5.2').checked || document.getElementById('wrong5.3').checked ){
      score--;
    }
   
    // Give the badges according to the poins
  
    if(score<=10 && score>7){
      alert("Your score is : " + score + " and you have earned a Gold Badge.");
    }
  
    if(score<=7 && score>4){
      alert("Your score is : " + score + " and you have earned a Silver Badge.");
    }
  
    if(score<=4 && score>1){
      alert("Your score is : " + score + " and you have earned a Bronze Badge.");
    }
  
    if(score<=1){
      alert("Your score is : " + score + " and you have fail to earn a Badge.");
    }

clearInterval(timer);
remianingTime=60;
displayTime.textContent= remianingTime;
quiz.reset();
  
  }
  
 // Reference: https://youtu.be/_a4XCarxwr8 (Timer)

const quiz = document.getElementById('quiz');
const displayTime = document.getElementById('time');
let remianingTime=60; // time limt
let timer;// tracking the time

function startTime(){
  timer = setInterval(() => {
    remianingTime--;
    displayTime.textContent=remianingTime;

    if (remianingTime==0){
      clearInterval(timer);
      result();
    }
  },1000);
}

quiz.addEventListener('submit', (event)=>{
  event.preventDefault();
  result();
});

startTime();

