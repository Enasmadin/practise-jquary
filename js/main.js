$(function () {
    'use strict';

  // to make aheader fixed by height nav 
  $("body").css("paddingTop",$('nav').innerHeight());

    $("nav li a ").on("click",function (e) {
        // to prevent go to aload  seconed this page 
        e.preventDefault();

        $("html , body ").animate({
            scrollTop: $('#'+ $(this).data('scroll')).offset().top + 1
        },1000)
    })
  // to put class active  when  click "a" it  and remove another 
  $("li a").on("click",function () {
     $(this).addClass("active").parent().siblings().find("a").removeClass("active");
                 // this is another soluation 
    // $(this).addClass("active").parent().siblings().children().removeClass("active");
                 // this is another soluation
    // $("li a").removeClass("active");
    // $(this).addClass("active");
     
  })
  // to make asynchrouns for header of a  to it is section 
  $(window).scroll(function () {
    $(".block").each(function () {
        if($(window).scrollTop() > $(this).offset().top){
        //   console.log($(this).attr('id'))
          var blockID =$(this).attr('id');
          $("li a").removeClass("active");
          $('nav li a[data-scroll="'+ blockID +'"] ').addClass("active");
          

        }  
    })
   
  })
})