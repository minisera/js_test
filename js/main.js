'use strict';

// 占い
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

// おみくじ
const btn2 = document.getElementById('omikuji');

btn2.addEventListener('click', () => {
  const result = ['大吉','中吉','小吉','凶'];

  const number = Math.floor(Math.random() * result.length);
  btn2.innerText = result[number];
});

// カレンダー
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const firstDate = new Date(year,month - 1, 1);
const firstDay = firstDate.getDay();// int １日の曜日データ
const lastDate = new Date(year,month,0)
const lastDayCount = lastDate.getDate();// int 最後の曜日データ

let dayCount = 1;
let createHtml = '';

createHtml = '<h1>' + year + '/' + month + '</h1>';
createHtml += '<table>' + '</tr>';

const weeks = ['日','月','火','水','木','金','土'];
for (let i = 0;i < weeks.length; i++) {
  createHtml += '<tr>' + weeks[i] + '</tr>';
}

createHtml += '</tr>'

for (let n = 0; n < 6; n++) {
  createHtml += '<tr>'
    for (let d = 0; d < 7; d++) {
        if (n == 0 && d < firstDay) {
          createHtml += '<td></td>'
        } else if (dayCount > lastDayCount) {
          createHtml += '<td></td>'
        } else {    
          createHtml += '<td>' + dayCount + '</td>'
          dayCount++
        }
    }
  createHtml += '</tr>'
}

createHtml += '</table>'

document.querySelector('#calendar').innerHTML = createHtml;

// 非同期処理の練習 dog api
const url = 'https://dog.ceo/api/breeds/image/random';
const options = {
  method: 'GET'
};

const fetchDogApi = fetch(url, options);

function getDogImage(url, options) {
  return fetch(url, options)
  .then( response => {  
    if (response.ok) {
      return response.json() 
    } 
    throw new Error('error');
  }).catch(e => console.log(e.message));
}

async function getImage(url,options){
  const response = await getDogImage(url, options);
  const imageElement = document.createElement('img');
  imageElement.src = response.message;
  imageElement.setAttribute('width',400);
  document.body.appendChild(imageElement);
}

getImage(url, options);

const btn3 = document.getElementById('dog_api');

btn3.addEventListener('click',() => {
  getImage(url,options);
});