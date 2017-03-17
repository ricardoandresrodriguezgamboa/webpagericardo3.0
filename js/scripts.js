$(function(){
     
 

        var header = document.getElementById('header');
        
        var headroom  = new Headroom(header);
        
        headroom.init(); 


});
   
    $(document).ready(function(){
        
        

        $('.ir-arriba').click(function(){
            $('body,html').animate({
                scrollTop: '0px'
            },500);
        });

        $(window).scroll(function(){
                if($(this).scrollTop() > 0){
                      $('.ir-arriba').slideDown(300);
                }else{
                      $('.ir-arriba').slideUp(300);
                }
        });
    });

    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('#navegacion-rr ul li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('activo');
        })
        $(this).addClass('activo');

      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navegacion-rr a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navegacion-rr ul li a').removeClass("activo");
            currLink.addClass("activo");
        }
        else{
            currLink.removeClass("activo");
        }
    });
}


