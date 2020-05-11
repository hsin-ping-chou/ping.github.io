    $(function(){
      $('#going').click(function(){ 
        $('html,body').animate({scrollTop:0}, 333);
      });
      $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ){
          $('#going').fadeIn(222);
        } else {
          $('#going').stop().fadeOut(222);
        }
      }).scroll();
    });
      
    $(function(){
      $("#going").click(function(){
       $("html,body").animate({scrollTop:0},500);
       //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
       return false;
      });
    });

    $(function(){
      $(window).scroll(function() {
        if ( $(this).scrollTop() > 180 ){
          $('#slidebar').fadeIn(222);
        } else {
          $('#slidebar').stop().fadeOut(222);
        }
      }).scroll();
    });

    $(function(){
      $("#one").click(function(){
       $("html, body").animate({
       scrollTop: $("#aboutme").offset().top }, {duration: 500,easing: "swing"});
       //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
       return false;
      });
    });

    $(function(){
      $("#two").click(function(){
       $("html, body").animate({
       scrollTop: $("#schoolarea").offset().top }, {duration: 500,easing: "swing"});
       //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
       return false;
      });
    });

     $(function(){
      $("#three").click(function(){
       $("html, body").animate({
       scrollTop: $("#hobbitarea").offset().top }, {duration: 500,easing: "swing"});
       //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
       return false;
      });
    });

    $(function(){
      $("#four").click(function(){
       $("html, body").animate({
       scrollTop: $("#clubarea").offset().top }, {duration: 500,easing: "swing"});
       //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
       return false;
      });
    });
    $(function(){
      $("#pulll").click(function(){
       $("html, body").animate({
       scrollTop: $("#clubpic").offset().top }, {duration: 500,easing: "swing"});
       //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
       return false;
      });
    });
   $(function(){
      $("#five").click(function(){
       $("html, body").animate({
       scrollTop: $("#worktitle").offset().top }, {duration: 500,easing: "swing"});
       //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
       return false;
      });
    });
    $(function(){
      $("#six").click(function(){
       $("html, body").animate({
       scrollTop: $("#lifetitle").offset().top }, {duration: 500,easing: "swing"});
       //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
       return false;
      });
    });


