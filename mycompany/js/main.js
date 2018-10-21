// Script for scroll down
$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});


// Script for menu #1
$(function() {
	var link = $('.m-menu-link');

	var close = $('.close-menu');

	var menu = $('.m-menu');

	link.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	});

	close.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	});
});


// Script for menu #2
/*var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.5, {
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});
t1.to(".two", 0.5, {
     y: -6,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.5
});

t1.to(".fa fa-bars", 0.3, {
     top: "0%",
     ease: Expo.easeInOut,
     delay: -0.5
});

t1.staggerFrom(".menu li, a", 1, {
    x: -200,
    opacity: 0,
    ease:Expo.easeOut
}, 0.2);

t1.reverse();

$(document).on("click", ".close-menu", function() {
     t1.reversed(!t1.reversed());
});

$(document).on("click", "a", function() {
     t1.reversed(!t1.reversed());
});*/