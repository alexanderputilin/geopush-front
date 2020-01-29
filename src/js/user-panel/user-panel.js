import './user-panel.scss';
import img from './../../images/avatar.png';
import {hasClass} from "../has-class/has-class";

if (!hasClass('.is-page-login')) {
    let avatar = document.getElementsByClassName('user-panel__avatar')[0];

    avatar.style.backgroundImage = `url('${img}')`;
}

