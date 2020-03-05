import "./partners-import.scss"

document.getElementsByName("rb-import").forEach(el => el.addEventListener('click', (event) => {
    [...document.getElementsByClassName('partners-import__panel')].forEach((el) => {
        if (el.attributes.getNamedItem("data-target").value === event.currentTarget.value) {
            el.classList.add("partners-import__panel__active");
        } else {
            el.classList.remove("partners-import__panel__active");

        }
    });
}));
