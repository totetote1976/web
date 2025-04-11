'use strict'


//burgermenu
const burger = document.getElementById('burger');
const burgerNav = document.getElementById('burgerNav');


if(burger){
    burger.addEventListener('click',function(){
        burger.classList.toggle('is-active');
        burgerNav.classList.toggle('slide-nav');
    });
}



//observer


let getItems = [...document.querySelectorAll('.slide')]; // 'slide' 要素を配列に変換


// 監視対象になった瞬間アクティブにする
let setItemActive = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Item is active:', entry.target);
      // ここでアクティブ化の処理を追加（例えばクラス追加など）
      entry.target.classList.add('fader');
    }else{
        entry.target.classList.remove('fader');
    }
  });
};

let options = {
  threshold: 0.5 // 50% 以上が視界に入ったら発動する設定（オプション）
};

// IntersectionObserverを設定
let observer = new IntersectionObserver(setItemActive, options);

// 各アイテムを監視
getItems.forEach(item => {
  observer.observe(item);
});



