"use strict"
//メイン

//高さ調整
//定義
const windowHeight = document.documentElement.clientHeight;

const headerHeight = document.getElementById('header').offsetHeight;

const main = document.getElementById('main');

const footerHeight = document.getElementById('footer').offsetHeight;

//処理
//ページが短い時、footerが一番下にちょうど来るようにmainの長さを長くする
main.style.minHeight = (windowHeight - headerHeight - footerHeight) + 'px';
//mainをheader分下げる
main.style.marginTop = headerHeight + 'px';