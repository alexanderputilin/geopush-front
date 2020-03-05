import './popup.scss'

document.querySelectorAll('[data-toggle="modal"]').forEach(el => el.addEventListener('click', (event) => {
    let targetId = event.currentTarget.attributes.getNamedItem("data-target").value;
    if (targetId) {
        let target = document.getElementById(targetId);
        if (target) {
            if (target.offsetHeight === 0) {
                target.style.display = "block";
            } else {
                target.style.display = "none";
            }
        }
    }
}));
