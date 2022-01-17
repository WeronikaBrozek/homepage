{
    const welcome = () => {
        console.log("Witaj!");
    };

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const section = document.querySelector(".js-section");
        const link = document.querySelector(".js-link");
        const image = document.querySelector(".js-image");
        const themeName = document.querySelector(".js-themeName")
        body.classList.toggle("body--dark");
        section.classList.toggle("section--dark");
        image.classList.toggle("image--dark");
        link.classList.toggle("navBar__itemLink--dark");

        if (body.classList.contains("body--dark")) {
            themeName.innerText = "jasny"
        } else {
            themeName.innerText = "ciemny"
        }

    };

    const init = () => {
        let button = document.querySelector(".js-button");

        button.addEventListener("click", onChangeBackgroundClick);

        welcome();
    };

    init();
}