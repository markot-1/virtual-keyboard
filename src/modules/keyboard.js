/* eslint-disable import/prefer-default-export */
import { json } from './data.js';

export const TEXT_AREA = document.createElement('textarea');
TEXT_AREA.classList.add('text-area');

export function createElement(tagName, className) {
  const elem = document.createElement(tagName);
  elem.classList.add(className);
  return elem;
}

const keyboardWrapper = createElement('div', 'keyboard-wrapper');

export function keyboardFill() {
  for (let i = 0; i < json.length; i += 1) {
    const elem = document.createElement('button');
    elem.innerText = json[i].key;
    for (let j = 0; j < json[i].class.length; j += 1) {
      elem.classList.add(json[i].class[j]);
    }
    elem.id = json[i].code;
    keyboardWrapper.append(elem);
  }
  return keyboardWrapper;
}

const buttons = document.getElementsByTagName('button');

export function keyDownEvent(event) {
  let button;
  for (let i = 0; i < buttons.length; i += 1) {
    if (buttons[i].id === event.code) {
      button = json[i];
      buttons[i].classList.add('active');
    }
  }
  if (button.class.indexOf('button_service') === -1 || button.code === 'Backspace') {
    TEXT_AREA.innerHTML += button.key;
    if (event.code === 'Backspace') {
      TEXT_AREA.innerHTML = TEXT_AREA.innerHTML.slice(0, -10);
    }
  }
}

export function keyUpEvent(event) {
  for (let i = 0; i < buttons.length; i += 1) {
    if (buttons[i].id === event.code) {
      buttons[i].classList.remove('active');
    }
  }
}
