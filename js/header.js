"use strict";

// ヘッダー

// ーヘッダーナビ(@media screen and (max-width:520px))
// 定義
const acMenuBtn = document.getElementById('acMenuBtn');
const acMenu = document.getElementById('acMenu');

// 処理
acMenuBtn.addEventListener("click", function() {
  acMenu.classList.toggle('add-display-block');
});