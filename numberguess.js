let gameResult=document.getElementById("game-result")
let checkButton=document.getElementById("check")
let randomNumber=Math.round(Math.random()*100)
console.log(randomNumber)
let attempt=3;
checkButton.onclick=()=>{
    let userInputValue=parseInt(document.getElementById("userinput").value)
    if(attempt===3){
        if(userInputValue>100){
            alert("hey user the range is 100 only!!")
            
        }
        else if(userInputValue>randomNumber){
            gameResult.textContent="Guess Too High try again"
        }
        else if(userInputValue<randomNumber){
            gameResult.textContent="Guess Too low try again"
        }
        else if(userInputValue===randomNumber){
            gameResult.textContent="Congrats!, your guess is correct"
        }
        else{
            gameResult.textContent="Please enter numbers Only"
     
        }
        attempt--
    }
    else if(attempt===2){
        if(userInputValue>100){
            alert("hey user the range is 100 only!!")
            
        }
        else if(userInputValue>randomNumber){
            gameResult.textContent="Guess Too High try again"
        }
        else if(userInputValue<randomNumber){
            gameResult.textContent="Guess Too low try again"
        }
        else if(userInputValue===randomNumber){
            gameResult.textContent="Congrats!, your guess is correct"
        }
        else{
            gameResult.textContent="Please enter numbers Only"
     
        }
        attempt--
    }

    else if(attempt===1){
        if(userInputValue>100){
            alert("hey user the range is 100 only!!")
            
        }
        else if(userInputValue>randomNumber){
            gameResult.textContent="Guess Too High try again"
        }
        else if(userInputValue<randomNumber){
            gameResult.textContent="Guess Too low try again"
        }
        else if(userInputValue===randomNumber){
            gameResult.textContent="Congrats!, your guess is correct"
        }
        else{
            gameResult.textContent="Please enter numbers Only"
     
        }
        attempt--
    }
    else{
        alert("Please reload the page your attempt is over!")
    }

}