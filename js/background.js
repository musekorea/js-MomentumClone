const images = ['0.jpg', '1.jpg', '2.jpg'];
const randomNum = Math.floor(Math.random() * images.length);
const randomBackground = images[randomNum];

const background = document.createElement('img');
background.src = `../img/${randomBackground}`;

document.body.appendChild(background);
//const form = document.querySelector('form');
//document.body.insertBefore(background, form);
