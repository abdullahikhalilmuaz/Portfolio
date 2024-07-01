var one = document.querySelector(".one")
var two = document.querySelector(".two")
var three = document.querySelector(".three")
var four = document.querySelector(".four")

function showFour() {
    document.querySelector(".four").classList.toggle('active')
     if (one.classList.contains("active") || two.classList.contains("active") || three.contains("active") ) {
         one.classList.remove("active")
         two.classList.remove("active")
         three.classList.remove("active")
     }
}
function showThree() {
    document.querySelector(".three").classList.toggle('active')
}
function showTwo() {
    document.querySelector(".two").classList.toggle('active')
}

function show() {
    document.querySelector(".one").classList.toggle('active')

}

function openNav() {
    document.getElementById("side-nav").classList.toggle('active')
}