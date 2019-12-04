$(function(){
    //Переключает активный селектор на одном уровне
    function activated(activeItem) {
        $(activeItem).click(function(){
            $(this).parent().children().removeClass("active");
            $(this).addClass("active");
        })
    }
    activated(".navbar__elem");

    //Детальный просмотр изображения
    function detalGallery(classElem) {
        activated(classElem+"__elem");
        $(classElem +"__elem").click(function() {
            let className = classElem.slice(1);
            $(classElem+"__img-active").remove();
            $(classElem+"__text-active").remove();
            let imgActive = $(classElem+"__elem.active").children(classElem+"__img").clone().removeClass(className+"__img").addClass(className+"__img-active"),
                textActive = $(classElem+"__elem.active").children(classElem+"__text").clone().removeClass(className+"__text").addClass(className+"__text-active");
            $(classElem).prepend(textActive).prepend(imgActive);
        })
    }

    detalGallery(".detal-gallery");

    //Свёрнутое меню
    $(".navbar__menu-icon").click(function() {
        $(".navbar__nav-list").slideToggle(200);
    })
    $(window).resize(function() {
        if($(document).width()<720) {
            $(".navbar__menu-icon").css("display","flex");
            $(".navbar__nav-list").addClass("scroll").css("display", "none");
        } else {
            $(".navbar__menu-icon").css("display", "");
            $(".navbar__nav-list").removeClass("scroll").css("display", "");
        }
    });
    
    $(".menu-icon").click(function() {
        $(".nav-mini").slideToggle(200);
        $(".header-nav-wrap").addClass("scroll");
    })

    //Анимация скрола через якоря
    $(".navbar__elem").click(function(){
        $("html, body").clearQueue();
        let scrollId = $(this).attr("href");
            scrollPoint = $(scrollId).offset().top;
        $("html, body").animate({"scrollTop": scrollPoint}, 1000);
    });

    
    $(".detal-gallery__elem.active").click();
    $(window).resize();
  
});