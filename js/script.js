function welcome() {
    console.log("Witaj!");
}

welcome();

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let link = document.querySelector(".js-link");
let section = document.querySelector(".js-section");
let image = document.querySelector(".js-image")
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark")
    section.classList.toggle("section--dark")
    image.classList.toggle("image--dark")
    link.classList.toggle("navBar__itemLink--dark");

    if (body.classList.contains("body--dark")) {
        themeName.innerText = "jasny"
    } else {
        themeName.innerText = "ciemny"
    }

});

