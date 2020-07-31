$(document).ready(function () {
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        auto: true,
    });
    $('.menu-togglr').on('click', function () {
        $('#mainav').slideToggle('fast');
        $(this).toggleClass('active');
    });
    $('.owl-carousel').owlCarousel({
       stagePadding: 50,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1200:{
            items:5
        }
    }
});

});