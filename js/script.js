$(window).scroll(function () { 
    if ($(window).scrollTop() >= $('#about').offset().top - 1) {
        $('.navbar').addClass('fixed-top');
        $('header').addClass('dummy-padding-top');
        
    }
    else{
            $('.navbar').removeClass('fixed-top');
        $('header').removeClass('dummy-padding-top');
        }
});


// counter
let valueDisplays = document.querySelectorAll(".counter");
let interval = 5000;
$('.counter').ready(function () {
    for (const valueDisplay of valueDisplays) {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute('data-val'));
        let duration = Math.ceil(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.innerHTML = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    }

});



// collapsible
$('.work .row .wrapper').click(function (e) {
    $(this).toggleClass('active');
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    mouseDrag: false,
    nav: true,
    dots: false,
    nav: true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

})

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});