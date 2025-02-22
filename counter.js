let counterValue=document.getElementById("counter-value")
let incBtn=document.getElementById("btn-inc")

let decBtn=document.getElementById("btn-dec")
let resetBtn=document.getElementById("btn-reset")
let counter=0;
incBtn.onclick=()=>{
    ++counter;
    counterValue.textContent =counter;
    if(counter>0){
        counterValue.style.color="green"
    }
    else if(counter===0)
        {
        counterValue.style.color="black"
    }

}
decBtn.onclick=()=>{
    --counter;
    counterValue.textContent=counter;
    if(counter<0){
        counterValue.style.color="red"
    }
    else if(counter===0)
        {
        counterValue.style.color="black"
    }

}
resetBtn.onclick=()=>{
    counter=0;
    counterValue.textContent=counter;
    counterValue.style.color="black"



}



