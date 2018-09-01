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
    /*$('.single-item').slick();*/
    $('.container').slick({



        /*prevArrow:'<img class="prev" src="img/back_arrow.png">',
        nextArrow:'<img class="next" src="img/forward_arrow.png">',*/

        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]

    });
    /*====================== END OF SLICK SLIDER =====================*/


    /*====================== ISOTOPE =====================*/
    var $isotopeGrid = $('.portfolio-images');

    $isotopeGrid.isotope({
        itemSelector: '.img-wrapper',
        percentPosition: true
    });

    $('.portfolio .filters button').click(function () {
        var filterValue = $(this).data('filter');

        $isotopeGrid.isotope({
            filter: filterValue
        });
    });
    /*====================== END OF ISOTOPE =====================*/


});


/* =========================================== GOOGLE MAPS =========================================== */
    var coordLat = 51.4868729,
        coordLng = -0.0859594;
// Initialize and add the map
function initMap() {
    // The location of requiredPlacement
    /*var requiredPlacement = {lat: 51.4868729, lng: -0.0859594};*/
    var requiredPlacement = {lat: coordLat, lng: coordLng};
    // The map, centered at requiredPlacement
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: requiredPlacement});
    // The marker, positioned at requiredPlacement
    var marker = new google.maps.Marker({position: requiredPlacement, map: map});
    disableDefaultUI: true
}
