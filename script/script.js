const body = document.querySelector("body"),
//popup
popup = body.querySelector(".popup"),
popMessage = popup.querySelector('[message]'),
popBtn1 = popup.querySelector("#btn-1"),
popBtn2 = popup.querySelector("#btn-2"),
//geral
wrapper = body.querySelector(".wrapper"),
musicBox = body.querySelector(".music"),
//music-list
musicList = wrapper.querySelector(".music-list"),
openQueue = wrapper.querySelector("#btnqueue"),
closeQueue = musicList.querySelector("#close");

//music-list
openQueue.addEventListener("click", ()=>{
    musicList.classList.toggle("show");
    musicBox.classList.toggle("show");
});
closeQueue.addEventListener("click", ()=>{
    openQueue.click();
});

//pop-up show and close
popBtn1.addEventListener("click", ()=>{
    body.classList.toggle("show");
});

popBtn2.addEventListener("click", ()=>{
    body.classList.toggle("show");
});
