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
    $('.slick_team').slick();
    /*$('.container').slick({



        /!*prevArrow:'<img class="prev" src="img/back_arrow.png">',
        nextArrow:'<img class="next" src="img/forward_arrow.png">',*!/

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

    });*/
    /*====================== END OF SLICK SLIDER =====================*/


    /*====================== ISOTOPE =====================*/
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function( itemElem ) {
                var weight = $( itemElem ).find('.weight').text();
                return parseFloat( weight.replace( /[\(\)]/g, '') );
            }
        }
    });

// filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
    };

// bind filter button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
    });

// bind sort button click
    $('#sorts').on( 'click', 'button', function() {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({ sortBy: sortByValue });
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
        document.getElementById('map'), {zoom: 10, center: requiredPlacement});
    // The marker, positioned at requiredPlacement
    var marker = new google.maps.Marker({position: requiredPlacement, map: map});
    disableDefaultUI: true
}
