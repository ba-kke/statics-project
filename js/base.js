"use strict"
//高さ調整
//定義
const windowHeight = document.documentElement.clientHeight;

const headerHeight = document.getElementById('header').offsetHeight;

const main = document.getElementById('main');

// const footerHeight = document.getElementById('footer').offsetHeight;

const header = document.getElementById('header');

const business = document.getElementById('business');


//処理
//ページが短い時、footerが一番下にちょうど来るようにmainの長さを長くする
// main.style.minHeight = (windowHeight - headerHeight - footerHeight) + 'px';
//mainをheader分下げる

//定義


// setInterval(countUp, 10);

// const countUp = () => {
  // }
  setInterval("addFixed()", 0.00001);

function addFixed() {
  let y = window.pageYOffset ;
  if(y >= windowHeight) {
    header.classList.add('add-fixed');
    business.style.paddingTop = 50 + headerHeight + 'px';
  }
  else if(y < windowHeight) {
    header.classList.remove('add-fixed');
    business.style.paddingTop = 50 + 'px';
  }
}