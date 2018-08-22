// Loading Screen

$(document).ready(function(){
    
    $(".loading-overlay .sk-folding-cube").fadeOut(3000 , function () {
            
               $("body").css("overflow","auto");
               $(this).parent().fadeOut(3000 , function () {
                  
                      $(this).remove();
                  });
            }); 
    
    
    $("#flip").click(function()
    {
        $("#panel").slideToggle("slow");
    });
    
    $("#flip").click(function()
    {
        $("#flip").css("background-color", "#f5f6f9").css("color", "#3071a9").
          css("border", "solid 1px #e1e1e2");
    });
    
    /*$("#flip").mouseleave(function(){
        $("#flip").css("background-color", "#fff").css("color", "#ed5353").
          css("border", "solid 1px #f5f6f9");
    });*/
    
    
    $("#flip2").click(function()
    {
        $("#panel2").slideToggle("slow");
    });
    
    $("#flip2").click(function()
    {
        $("#flip2").css("background-color", "#f5f6f9").css("color", "#3071a9").
          css("border", "solid 1px #e1e1e2");
    });
    
    
    
    $(".part2 input").mouseover(function()
    {
        $(this).css("background-color","#fafafa");
    });
    
    $(".part2 input").mouseout(function()
    {
        $(this).css("background-color","#fff");
    });
    
    $(".part2 textarea").mouseover(function()
    {
        $(this).css("background-color","#fafafa");
    });
    
    $(".part2 textarea").mouseout(function()
    {
        $(this).css("background-color","#fff");
    });
    
   

    $("textarea[name='textareaa']").keyup
    (
        function()
        {
            if($(this).val().length < 199)
            {
               $("#Char").text(200-$(this).val().length + " Characters ");	
            }
            else
            {
               $("#Char").text("Have No Characters");
            }
        }
    )
    
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
    
});

