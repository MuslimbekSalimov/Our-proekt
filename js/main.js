let elButton = document.querySelector(".btn");
let elButtonMenu = document.querySelector(".btn__menu");
let elButtonExit = document.querySelector(".btn__exit");
let elNav =document.querySelector(".nav");
var elModal = document.querySelector(".modalka__info")
var elBtn = docum.querySelector(".button__button")




elButton.addEventListener("click", ()=> {
    
    elButtonMenu.classList.toggle("menu__exit")
    elButtonExit.classList.toggle("exit__menu")
    elNav.classList.toggle("nav__blok")
})
   

.elBtn.addEventListener("click", function (evt) {
        evt.preventDefault();
    
        elModal.classList.toggle("modal__nav")
})