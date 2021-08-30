"use strict"

// ヘッダー
// 固定

var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
	if ( jQuery( this ).scrollTop() > navPos ) {
		jQuery( 'body' ).css( 'padding-top', navHeight );
		jQuery( '#global-nav' ).addClass( 'm_fixed' );
	} else {
		jQuery( 'body' ).css( 'padding-top', 0 );
		jQuery( '#global-nav' ).removeClass( 'm_fixed' );
	}
});

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