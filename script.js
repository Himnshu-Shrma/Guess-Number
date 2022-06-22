window.onload= function() {
    document.getElementById("Number_submit").addEventListener("click",playgame);
    document.getElementById("Restart_game").addEventListener("click",initgame);

}
let ng;
function playgame( ){
    /**
     * @type HTML
     */
    let numberGuess=document.getElementById(inidd).value ;//Use to get value of variable;

    console.log(numberGuess);
    if(numberGuess>correctNumber){
        console.log("Too high");
    } else if(numberGuess<correctNumber){
        console.log("Too low");
    }else{
        console.log("Correct guess");
    }
}
//functiopn to get a random number 
function getrandomNumber(){
    let randomNumber=Math.random();
    let wholeNumber = Math.floor(randomNumber*100)+1;
    // console.log(wholeNumber);
    return wholeNumber;//1 is added to get 100 while guessing
}

let correctNumber=getrandomNumber();

function initgame(){

}

