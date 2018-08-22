// Loading Screen

 $(document).ready(function() {

         $(".loading-overlay .sk-folding-cube").fadeOut(3000 , function () {
            
               $("body").css("overflow","auto");
               $(this).parent().fadeOut(3000 , function () {
                  
                      $(this).remove();
                  });
            }); 
                       
    });
 
 
 // Button ScrollTop
 
 var Y = $("#scrollTop"),
 X = $(".color-box ul li");
 
 $(window).scroll(function () {
    
        if($(this).scrollTop() >= 700)
           {
               Y.fadeIn(1000);
           }
        else
         {
               Y.fadeOut(1000);     
         }
         
         
    });
 
 // Click On Button To ScrollTop
 
  Y.click(function () {
         
            $("html,body").animate({scrollTop: 0} , 1000);
         });
 

// Interval El Carousel

$(document).ready(function () {

    $('.carousel').carousel(
    {
      interval: 5000
    });
    
    // Toggle Tool Box 
    
    $(".gear-check").click(function () {              
    
        $(".color-box").fadeToggle(700);
      
    });

    
    //Color of li
    
    X
    .eq(0).css("backgroundColor", "#E6B89C").end()
    .eq(1).css("backgroundColor", "#C84B65").end()
    .eq(2).css("backgroundColor", "#F5BAB6").end()
    .eq(3).css("backgroundColor", "#E41e17").end()
    .eq(4).css("backgroundColor", "#8A3060").end();
    
    X.click(function () {
                $("link[href*='Theme']").attr("href", $(this).attr("data-value"));  
            });  
});


// Wow

new WOW().init();

