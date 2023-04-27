/* eslint-disable import/prefer-default-export */
import { json } from './data.js';

function createElement(tagName, className) {
  const elem = document.createElement(tagName);
  elem.classList.add(className);
  return elem;
}

const keyboardWrapper = createElement('div', 'keyboard-wrapper');

export function keyboardFill() {
  for (let i = 0; i < json.length; i += 1) {
    const elem = document.createElement('button');
    elem.innerText = json[i].key;
    elem.classList.add('button');
    elem.id = json[i].code;
    keyboardWrapper.append(elem);
  }
  return keyboardWrapper;
}
