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
      elem.classList.add('eng_keyboard');
    }
    elem.id = json[i].code;
    keyboardWrapper.append(elem);
  }
  return keyboardWrapper;
}

function changeLang() {
  for (let i = 0; i < json.length; i += 1) {
    const elem = document.getElementById(json[i].code);
    if (elem.classList.contains('eng_keyboard')) {
      elem.classList.remove('eng_keyboard');
      elem.classList.add('rus_keyboard');
      elem.innerHTML = json[i].keyRu;
    } else if (elem.classList.contains('rus_keyboard')) {
      elem.classList.remove('rus_keyboard');
      elem.classList.add('eng_keyboard');
      elem.innerHTML = json[i].key;
    }
  }
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
  if (button.class.indexOf('button_service') === -1) {
    if (document.querySelector('button').classList.contains('eng_keyboard')) {
      TEXT_AREA.innerHTML += button.key;
    } else if (document.querySelector('button').classList.contains('rus_keyboard')) {
      TEXT_AREA.innerHTML += button.keyRu;
    }
  } else if (button.class.includes('button_service')) {
    switch (event.code) {
      case 'Backspace':
        TEXT_AREA.innerHTML = TEXT_AREA.innerHTML.slice(0, -1);
        break;
      case 'Enter':
        TEXT_AREA.innerHTML += '\n';
        break;
      case 'Tab':
        event.preventDefault();
        TEXT_AREA.innerHTML += '    ';
        break;
      case 'ControlLeft':
        if (event.ctrlKey && event.altKey) {
          changeLang();
        }
        break;
      case 'AltLeft':
        event.preventDefault();
        if (event.ctrlKey && event.altKey) {
          changeLang();
        }
        break;
      case 'AltRight':
        event.preventDefault();
        break;
      default:
        break;
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
