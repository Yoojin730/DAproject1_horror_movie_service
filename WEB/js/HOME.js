//slick.js

$(function() {
    $('.visual .slide').slick({
        arrows: false, //화살표
        dots: false, //인디케이트 해제
        fade: true, //페이드 효과
        autoplay: true, //자동재생
        autoplaySpeed:2000, //재생시간 4초
        pauseOnHover: false, //마우스 호버시 정지
        pauseOnFocus: false //포커스시 정지
    });
});