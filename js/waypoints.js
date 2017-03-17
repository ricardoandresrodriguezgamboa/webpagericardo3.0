var $dipper = $('.dipper');

$dipper.waypoint(function(){
             $dipper.addClass('dipper-animation');
              
},{offset:'80%'});

/*var $dipper2 = $('.circle1');

$dipper2.waypoint(function(){
             $dipper2.attr('id', 'circle1');
              
},{offset:'80%'});*/


/*$(document).ready(function(){
        
    $(window).on('resize',function(){
     
          if($(this).width() < 769){

             $dipper.removeClass('dipper');
             $dipper.removeClass('dipper-animation');
             $('.hola').css("font-size", "100px"); 
                
          }else{
               $('.hola').css("font-size", "20px"); 
          }
    });

});*/

