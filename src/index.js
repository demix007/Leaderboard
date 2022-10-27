import image from './assets/image.jpg';
import './style.css';

const title = document.createElement('h3');
title.textContent = 'This is a webpack configuration setup';

const page = document.querySelector('body');
page.append(title);
const img = new Image();
img.src = image;
page.appendChild(img);