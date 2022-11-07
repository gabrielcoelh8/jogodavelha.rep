const wrapper = document.querySelector(".wrapper"),
musicList = wrapper.querySelector(".music-list"),
openQueue = wrapper.querySelector("#btnqueue"),
closeQueue = musicList.querySelector("#close");


openQueue.addEventListener("click", ()=>{
    musicList.classList.toggle("show"); 
});

closeQueue.addEventListener("click", ()=>{
    openQueue.click();
});
