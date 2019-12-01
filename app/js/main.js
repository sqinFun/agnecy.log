$(function(){
    function activated(activeItem) {
        $(activeItem).click(function(){
            $(this).parent().children().removeClass("active");
            $(this).addClass("active");
        })
    }

    activated(".navbar__elem");


  
});