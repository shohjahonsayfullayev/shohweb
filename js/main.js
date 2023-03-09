// const box = document.querySelector(".box");
// const card = document.querySelector(".card");

// card.addEventListener("click", function(){
//     box.classList.toggle("box-extra")
// });


let elList = document.querySelector(".header__list")
let elBtnMenu = document.querySelector(".header_btn")
let elBtnX = document.querySelector(".header_btn-x")

elBtnMenu.addEventListener("click", function(){
    elList.classList.toggle("header__list-btn")

    elBtnX.classList.add("btnx")
});

elBtnX.addEventListener("click", function(){
    elList.classList.remove("header__list-btn")

    elBtnX.classList.remove("btnx")
});


// console.log(elBtnMenu);