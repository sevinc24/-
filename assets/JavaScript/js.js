$('.client-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplaySpeed:100,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:3
            },
            800:{
                items:5
            }
        }
})

setTimeout(function(){
    $(".loader_bg").fadeToggle();
}, 1200);

$(function(){
    $('#none').focus(function(){
        $(this).css("border-style","none");
    })
})

$(function(){
    $('#click').click(function(){
        window.open('file:///C:/Users/Sevinc/Desktop/ishlediyim%20ishler/%D0%92%D1%82%D0%B0%D1%80%D0%BE%D0%B9%20%D1%81%D0%B0%D0%B9%D1%82%20%D1%84%D1%83%D0%BB%20%D0%BA%D0%B0%D1%81%D0%BA%D0%BE/tables.html', '_blank');
    })
})