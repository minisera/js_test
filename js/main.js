'use strict';

const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  const num = Math.random();
  
  if (num < 0.2) {
    result.textContent = 'ラッキー';
  } else if (num < 0.5) {
    result.textContent = '微妙'; 
  } else if (num < 0.8) {
    result.textContent = '最悪';
  } else {
    result.textContent = 'さようなら';
  }
});

const btn2 = document.getElementById('omikuji');

btn2.addEventListener('click', () => {
  const result = ['大吉','中吉','小吉','凶'];

  const number = Math.floor(Math.random() * result.length);
  btn2.innerText = result[number];
});