//
//
// Kenny's English Website
//
//

var beforePos = 0;

function ScrollAnime() {
    var elemTop = $('#pg-2').offset().top;
    var scroll = $(window).scrollTop();

    if(scroll == beforePos) {
        // IE11
    } else if (elemTop > scroll || 0 > scroll - beforePos) {
        // Header comes down from top
        $('#header').removeClass('UpMove');
        $('#header').addClass('DownMove');
    } else {
        // Header fades
        $('#header').removeClass('DownMove');
        $('#header').addClass('UpMove');
    }

    beforePos = scroll;

}

//
// Scroll up and brings back the header
// Scrolls and call
$(window).scroll(function(){
    ScrollAnime();
});

//
// Scroll up and brings back the header
// Load the page and call
$(window).on('load', function(){
    ScrollAnime();
})

// Scroll to links
var headerH = $("#header").outerHeight(true);
$('#mv-navi li a').click(function() {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top-headerH;
    $('body,html').animate({scrollTop: pos}, 1000);
    return false;
});




