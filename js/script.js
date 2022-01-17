{
    const welcome = () => {
        console.log("Witaj!");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const section = document.querySelector(".js-section");
        const link = document.querySelector(".js-link");
        const image = document.querySelector(".js-image");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("body--dark");
        section.classList.toggle("section--dark");
        image.classList.toggle("image--dark");
        link.classList.toggle("navBar__itemLink--dark");

        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";

    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}