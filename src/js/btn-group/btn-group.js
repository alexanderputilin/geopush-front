import './btn-group.scss';


function addItems(elementHTML, data, active) {
    elementHTML.innerHTML = '';
    for (let key in data) {
        if (key === active) {
            elementHTML.innerHTML += `<div class="btn-group__item is-active" data-show="${key}">${data[key]}</div>`;
        } else {
            elementHTML.innerHTML += `<div class="btn-group__item" data-show="${key}">${data[key]}</div>`;
        }

    }
}

function addClass(elementHTML, className) {
    elementHTML.classList.add(className);
}

function removeClassAll(item, classRemove) {
    item.forEach(function (el) {
        el.classList.remove(classRemove);
    })
}

export class BtnGroup {
    constructor(data) {
        this.elementHTML = data.elementHTML;
        this.element = document.querySelector(this.elementHTML);
        this.itemsData = data.items;
        this.active = data.active;
        addItems(this.element, this.itemsData, this.active);
        addClass(this.element, 'btn-group');
        this.itemsHTML = `${this.elementHTML} .btn-group__item`;
        this.items = document.querySelectorAll(this.itemsHTML);
        this.addEventsClick();
    }

    addEventsClick() {
        this.items.forEach( (el) => {
            el.addEventListener('click', (item) => {
                this.clickItem(item.target.dataset.show)
            })
        })
    }

    addEvents(callbackFunction) {
        this.items.forEach( (el) => {
            el.addEventListener('click', callbackFunction)
        })
    }

    clickItem(target) {
        let targetHTML = document.querySelector(`${this.elementHTML} [data-show="${target}"]`);
        removeClassAll(this.items, 'is-active');
        targetHTML.classList.add('is-active');
    }
}
