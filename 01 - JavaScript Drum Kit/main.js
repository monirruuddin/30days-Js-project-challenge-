document.addEventListener("keydown",(evt)=>{    
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${evt.keyCode}"]`);
    const keys = document.querySelectorAll(".key");
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    function removeevt(e){
        if(e.propertyName !== "transform")
        key.classList.remove("playing");
    }

    keys.forEach(key=> key.addEventListener("transitionend",removeevt));

  
});