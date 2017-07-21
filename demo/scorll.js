$(function() {
    $(window).scroll(function(){
        var scrolltop=$(this).scrollTop();      
        if(scrolltop>=610){      
            $("#tab_usual1").addClass("cc_top");
        }else{
            $("#tab_usual1").removeClass("cc_top");
        }
    });     
});