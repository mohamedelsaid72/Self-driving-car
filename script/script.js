// navbar toggler icon 
var menuIcon = document.getElementById("menu");

menuIcon.addEventListener("click", function (){

    menuIcon.classList.toggle("fa-times");

});


// loader
$(window).on('load', function () {
    $('#preloader').delay(1200).fadeOut(300);
    $('body').delay(1300).css({'overflow': 'visible'});
})


// up button
window.addEventListener('scroll', function () {
    var homeHeight = document.querySelector('header');
    var up = document.querySelector('.up');
    up.classList.toggle('upShow', window.scrollY > homeHeight.offsetHeight);
})


// sticky navbar
window.addEventListener('scroll',function(){
    var nav=document.querySelector('nav');
    nav.classList.toggle('sticky',window.scrollY>0);
})