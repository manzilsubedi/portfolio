var upbutton = document.getElementById("up");


$(document).ready(function () {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    // $('.top-nav .nav-link').on('click', function(){
    //     $('.menu-toggler').removeClass('open');
    //     $('.top-nav').removeClaass('open');

    // });

    $('.nav-list a').on('click', function(){
        $('.menu-toggler').click(); //bootstrap 4.x
    });

    $('nav a[href*="#"]').on('click', function() {
       $('html,body').animate({
           scrollTop: $($(this).attr('href')).offset().top-100
            });
        });


    //test

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0} ,1800 );
        });



    AOS.init({
            easing: 'ease',
            duration: 1800,
            once: true
        });

});



 

    

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};