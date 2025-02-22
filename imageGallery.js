let popupElement=document.querySelector(".popup")
let popupImg=document.querySelector(".popup img")
let images=document.querySelectorAll(".parent img")
let closeIcon=document.getElementById("close-icon")
for(image of images){
    image.onclick=function(){
        popupImg.src=this.src
        popupElement.style.display="flex"
        
    }
    closeIcon.onclick=()=>{
        popupElement.style.display="none"
        
    }

    
}