// Меню сайта для мобильных девайсов

$(document).ready(function() {
  $('.burger').click(function(event) {
    $('.burger, .menu, header').toggleClass('active');
    $('body').toggleClass('lock') // Блокирует скрол body когда меню открыто
  })
});


// Прокрутка к елементу по клику в меню

$("#work").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".works").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$("#process").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".work-process").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$("#services").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".services").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$("#testimonials").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".testimonials").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
