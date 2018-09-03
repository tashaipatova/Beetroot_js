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



    /*====================== ПОДКЛЮЧЕНИЕ SLICK SLIDER =====================*/
    $('.slick_team').slick({
        autoplay: true,
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    /*====================== END OF SLICK SLIDER =====================*/


    /*====================== ISOTOPE =====================*/
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        /*layoutMode: 'fitRows',*/
        layoutMode: 'masonry',
        masonry: {
            columnWidth: 300
        }
    });


// bind filter button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

// change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });

    /*====================== END OF ISOTOPE =====================*/


});


/* =========================================== GOOGLE MAPS =========================================== */
var coordLat = 49.568583,
    coordLng = 34.585416;
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
