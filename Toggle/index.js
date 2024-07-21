const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    body.classList.toggle("dark")
})

toggle.addEventListener("click", () => toggle.classList.toggle("active"))