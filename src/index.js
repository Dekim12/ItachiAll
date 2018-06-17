import './styles/style.sass';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

/*
 * Example of images import:
 * import './images/header/pencil.png';
*/

import './images/header/sharingan.svg';
import './images/screenshots/Screenshot1.png';
import './images/screenshots/Screenshot2.png';
import './images/screenshots/Screenshot3.png';
import './images/screenshots/Screenshot5.png';
import './images/screenshots/Screenshot6.png';
import './images/screenshots/Screenshot7.png';
import './images/screenshots/Screenshot8.png';
import './images/screenshots/Screenshot9.png';
import './images/screenshots/Screenshot10.png';
import './images/screenshots/Screenshot11.png';
import './images/screenshots/Screenshot12.png';
import './images/screenshots/Screenshot13.png';
import './images/screenshots/Screenshot14.png';
import './images/screenshots/Screenshot15.png';
import './images/screenshots/Screenshot17.png';
import './images/screenshots/Screenshot18.png';

import './images/link/Itachi1.png';
import './images/link/Itachi2.png';
import './images/footer/kos.png';

let next = document.getElementsByClassName('next')[0];
let previous = document.getElementsByClassName('previous')[0];
let screenshots = document.getElementsByClassName('my_game');
let arr = screenshots[0].children;
let x = 0;
let fire = document.getElementsByClassName('indicators');
let arrIndicators = fire[0].children;

arr[x].classList.toggle('show-screenshot');
arrIndicators[x].classList.toggle('combustion');

next.addEventListener("click", function(){
    arr[x].classList.toggle('show-screenshot');
    arrIndicators[x].classList.toggle('combustion');
    x += 1;
    if(x >= arr.length) x = 0;
    arr[x].classList.toggle('show-screenshot');
    arrIndicators[x].classList.toggle('combustion');
});

previous.addEventListener("click", function(){
    arr[x].classList.toggle('show-screenshot');
    arrIndicators[x].classList.toggle('combustion');
    x -= 1;
    if(x < 0) x = arr.length - 1;
    arr[x].classList.toggle('show-screenshot');
    arrIndicators[x].classList.toggle('combustion');
});