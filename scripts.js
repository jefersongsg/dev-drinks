
let slides = document.querySelectorAll(".items");

let prev = document.getElementById("prev");
let next = document.getElementById("next");

let count = slides.length; //3

let active = 0;

prev.addEventListener("click", () => {
    slides[active].classList.remove("active");
    active--;
    if (active < 0) {
        active = count - 1;
    }
    slides[active].classList.add("active");
});
next.addEventListener("click", () => {
    slides[active].classList.remove("active");
    active++;
    if (active > count - 1) {
        active = 0;
    }
    slides[active].classList.add("active");
});
