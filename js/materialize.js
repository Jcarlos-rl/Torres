$(document).ready(function(){
    $('.slider').slider({
        indicators: false,
        height: $(window).height(),
        interval: 4500
    });
    $('#slider2').slider({
        indicators: false,
        height: 369,
        interval: 4500
    });
    $('#slider3').slider({
        indicators: false,
        height: 250,
        interval: 4500
    });
    $('#slider4').slider({
        indicators: false,
        height: 120,
        interval: 4500
    });
});
$(document).ready(function(){
    $('.parallax').parallax();
});
$(document).ready(function(){
    $('.materialboxed').materialbox();
});
$(document).ready(function(){
    $('.modal').modal();
});