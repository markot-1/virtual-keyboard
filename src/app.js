import { keyboardFill } from './modules/keyboard.js';

const PAGE = document.createElement('div');
PAGE.classList.add('page');

const HEADER = document.createElement('h1');
HEADER.classList.add('header');
HEADER.innerText = 'RSS Виртуальная клавиатура';
const FORM = document.createElement('form');
const TEXT_AREA = document.createElement('textarea');
TEXT_AREA.classList.add('text-area');
FORM.append(TEXT_AREA);

const keyboardWrapper = keyboardFill();
FORM.append(keyboardWrapper);

PAGE.append(HEADER);
PAGE.append(FORM);
document.body.prepend(PAGE);
