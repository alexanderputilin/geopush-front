import './user-panel.scss';
import img from './../../images/avatar.png';

let avatar = document.getElementsByClassName('user-panel__avatar')[0];

avatar.style.backgroundImage = `url('${img}')`;