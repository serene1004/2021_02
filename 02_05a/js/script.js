///설정///

var $slide1 = document.querySelector('.slide-wrap');
var $slide2 = document.querySelector('.slide-wrap2');

///슬라이드1///
var cnt = 0;

function prevSlideFn(){
    cnt-=1;
    cnt < 0 ? cnt=3 : cnt;
    $slide1.style = 'left:'+(-1200*cnt)+'px';
}

function nextSlideFn(){
    cnt+=1;
    cnt > 3 ? cnt=0 : cnt;
    $slide1.style = 'left:'+(-1200*cnt)+'px';
}

function doneFn(){
    cnt+=1;
    cnt > 0 ? cnt=0 : cnt;
    $slide1.style = 'left:'+(-1200*cnt)+'px';
}

setInterval(nextSlideFn, 4000);



///슬라이드2///
var cnt2 = 0;

function prevSlideFn2(){
    cnt-=1;
    cnt < 0 ? cnt=2 : cnt;
    $slide2.style = 'left:'+(-400*cnt)+'px';
}

function nextSlideFn2(){
    cnt+=1;
    cnt > 2 ? cnt=0 : cnt;
    $slide2.style = 'left:'+(-400*cnt)+'px';
}