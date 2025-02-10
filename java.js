const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navmenu.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
        const hearts = document.querySelectorAll(".heart-icon i");
    
        hearts.forEach((heart) => {
            heart.addEventListener("click", function () {
                this.classList.toggle("bxs-heart"); // Troca para coração cheio
                this.classList.toggle("bx-heart");  // Remove o coração vazio
                this.style.color = this.classList.contains("bxs-heart") ? "red" : "black"; // Muda a cor
            });
        });
    });
    