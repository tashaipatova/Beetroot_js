$(document).ready(function () {

    //Smooth scrolling
    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    });

    /*======================== countdown timer ===========================*/
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 1, 2018 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="countdown"
        document.getElementById("countdown").innerHTML = days + " : " + hours + " : "
            + minutes + " : " + seconds;

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "OFFER EXPIRED";
        }
    }, 1000);


    /*=================== modal window ========================== */
    $('.open-modal').click(function () {
        openModal($(this));
    });

    $('.modal-body .close').click(function () {
        closeModal($(this));
    });


    function openModal(button) {
        var windowId = button.data('target');
        $(windowId).show();
    }

    function closeModal(closeElement) {
        closeElement.closest('.modal').hide();
    }


    /*========================= script for "back to top" arrow-button ==============================*/
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.button-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('button-visible') : $back_to_top.removeClass('button-visible');
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

    /*========================== slider for menu with dishes ===============================*/
    $('#slick_menu').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#slick_menu',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    /*========================== slider for news ===============================*/
    $('.slick_news').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear'
    });

    /*========================== slider for testimonials ===============================*/
    $('.slick_testimonials').slick({
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
    });


});

/* =========================================== GOOGLE MAPS =========================================== */
var coordLat = 40.8445774,
    coordLng = -74.8259967;

// Initialize and add the map
function initMap() {
    // The location of requiredPlacement
    /*var requiredPlacement = {lat: 51.4868729, lng: -0.0859594};*/
    var requiredPlacement = {lat: coordLat, lng: coordLng};
    // The map, centered at requiredPlacement
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, disableDefaultUI: true, center: requiredPlacement});
    // The marker, positioned at requiredPlacement
    var marker = new google.maps.Marker({position: requiredPlacement, map: map, icon: 'img/favicon.png'});
}