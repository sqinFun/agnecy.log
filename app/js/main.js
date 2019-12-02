$(function(){
    function activated(activeItem) {
        $(activeItem).click(function(){
            $(this).parent().children().removeClass("active");
            $(this).addClass("active");
        })
    }

    activated(".navbar__elem");

    //

    function detalGallery(classElem) {
        activated(classElem+"__elem");
        $(classElem).click(function(){
            /*
            <img class="detal-gallery__img-active" src="img/detalGallery/1.jpg">
            <div class="detal-gallery__text-active">
                <h2>mark waugh</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui / Ux , print template.</p>
            </div>
            */
            let className = classElem.slice(1);
            $(classElem+"__img-active").remove();
            $(classElem+"__text-active").remove();
            let imgActive = $(classElem+"__elem.active").children(classElem+"__img").clone().removeClass(className+"__img").addClass(className+"__img-active");
                textActive = $(classElem+"__elem.active").children(classElem+"__text").clone().removeClass(className+"__text").addClass(className+"__text-active");
            $(classElem).prepend(textActive).prepend(imgActive);
        })

    }

    detalGallery(".detal-gallery")
    $(".detal-gallery").click();
  
});