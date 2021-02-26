var rock = document.getElementsByClassName("rock")[0];
var paper = document.getElementsByClassName("paper")[0];
var scissor = document.getElementsByClassName("scissor")[0];
var fight=document.querySelector('.fight');
var winner=document.querySelector('.winner');
rock.addEventListener("click",()=>{
    sub("rock")
});
paper.addEventListener("click",()=>{
    sub("paper")
});
scissor.addEventListener("click",()=>{
    sub("scissor")
});
function sub(param){
    var computerChoice = Math.random();
    if (computerChoice <0.34){
        computerChoice = "rock";
    }else if(computerChoice <=0.67){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissor";
    }

    if(param===computerChoice){
        winner.innerHTML="Its a tie";
        fight.innerHTML="computer choice is"+" "+computerChoice;
       }
    else if(param==="rock"){
        if(computerChoice==="scissor"){
            winner.innerHTML="rock wins";
            fight.innerHTML="computer choice is"+" "+computerChoice;

        }
        else{
            winner.innerHTML="paper wins";
            fight.innerHTML="computer choice is"+" "+computerChoice;

        }
    }
    else if(param==="paper"){
        if(computerChoice==="rock"){
            winner.innerHTML="paper wins";
            fight.innerHTML="computer choice is"+" "+computerChoice;

        }
        else{
            winner.innerHTML="scissor wins";
            fight.innerHTML="computer choice is"+" "+computerChoice;

        }
    }
    else{
        if(computerChoice==="rock"){
            winner.innerHTML="rock wins";
            fight.innerHTML="computer choice is"+" "+computerChoice;

        }
        else{
            winner.innerHTML="scissor wins";
            fight.innerHTML="computer choice is"+" "+computerChoice;

        }
    }
    
}