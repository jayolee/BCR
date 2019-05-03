function topCarousel() {
    const images = document.getElementsByClassName("topimgs");
    let curImageTop = 0;
    setInterval(function () {
        images[curImageTop].style.opacity = 0;
        (curImageTop < (images.length - 1)) ? (curImageTop += 1) : (curImageTop = 0);
        setTimeout(function () {
                images[curImageTop].style.opacity = 0.7;

        }, 400);
    }, 3000)
};

$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        if($(this).hasClass('open')){
           $('.menus').addClass('open');
           }
        else{
            $('.menus').removeClass('open');
        };				   
    });
})

