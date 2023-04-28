/* eslint-disable import/prefer-default-export */
import {
  createElement, keyboardFill, TEXT_AREA, keyDownEvent, keyUpEvent,
} from './modules/keyboard.js';

const PAGE = createElement('div', 'page');
// PAGE.classList.add('page');
const HEADER = createElement('h1', 'header');
// HEADER.classList.add('header');
HEADER.innerText = 'RSS Виртуальная клавиатура';
const TEXT_BLOCK = createElement('p', 'text-block');
TEXT_BLOCK.innerText = 'Клавиатура создана в операционной системе Windows';

const FORM = document.createElement('form');
// возможно перенести к клавиатуре 2 строки
FORM.append(TEXT_AREA);

const keyboardWrapper = keyboardFill();
FORM.append(keyboardWrapper);
FORM.append(TEXT_BLOCK);

PAGE.append(HEADER);
PAGE.append(FORM);

document.body.addEventListener('keydown', keyDownEvent);
document.body.addEventListener('keyup', keyUpEvent);

document.body.prepend(PAGE);

// let buttons = document.querySelectorAll('button');
// let button;
// // console.log(document.querySelectorAll('button'));
// for (let i = 0; i < buttons.length; i += 1) {
//   console.log(buttons[i]);
//   if (buttons[i].innerHTML === 'a') {
//     button = buttons[i];
//   }
//   console.log(button);
// }
