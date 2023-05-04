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

 
  $(window).scroll(function () {
     // to make asynchrouns for header of a  to it is section 

    $(".block").each(function () {
        if($(window).scrollTop() > $(this).offset().top){
        //   console.log($(this).attr('id'))
          var blockID =$(this).attr('id');
          $("li a").removeClass("active");
          $('nav li a[data-scroll="'+ blockID +'"] ').addClass("active");
          

        }  
    })

  // click on scroll to Go UP 

 
   var scrollTop = $(".scroll-to-top");
    
    if($(window).scrollTop() >= 1000){
      if($(scrollTop).is(":hidden")){
        $(scrollTop).fadeIn(5000)
        $(scrollTop).on("click",function () {
          $("body,html").animate({
            scrollTop:0
          })
        })
      }
    }
    else{
      $(scrollTop).fadeOut(5000)
    }
  })

  /// to show popup 

  $(".show-popup").on("click",function (e) {
    e.preventDefault();
    // $(".popup").fadeIn();
    $('.'+ $(this).data('popup')).fadeIn()
  })

// to close popup when click it 

$(".popup").on("click",function () {
  $(this).fadeOut();
})

// to stop event in inner 

$(".popup .inner").on("click",function (e) {
  e.stopPropagation()
})

// to close it by button close 

$(".popup .close").on("click",function (e) {
  e.preventDefault();
  // $(".popup ").fadeOut()
  $(this).parentsUntil('.popup').parent().fadeOut();
})

//  to make scape 

$(document).keydown(function (e) {
  if(e.keyCode ==  27){
    $(".popup").fadeOut(); 
  }
})

// to make animation that effect button left
$(".effct-button-left").hover(function () {
  $(this).find("span").eq(0).animate({
    width:"100%"
  },2000)
  
},function () {
  $(this).find("span").eq(0).animate({
    width:"0%"
  },3000)
})

//to make animation that effect button left

$(".effct-button-top").hover(function () {
  $(this).find("span").eq(0).animate({
    height:"100%"
  },2000)
  
},function () {
  $(this).find("span").eq(0).animate({
   height:"0%"
  },2000)
})

//to make animation that effect button border 

$(".effct-button-side").hover(function () {
  $(this).find("span").eq(0).animate({
    width:"100%"
  },1000)
  
},function () {
  $(this).find("span").eq(0).animate({
   width:"0%"
  },1000)
})
//to make animation that effect button border  top 

$(".effct-border-top").hover(function () {
  $(this).find("span").eq(0).animate({
    height:"100%"
  },1000)
  
},function () {
  $(this).find("span").eq(0).animate({
   height:"0%"
  },1000)
})

//  animated brogress 
$(".progress-animated span").each(function () {
   $(this).animate({
     width:$(this).attr("data-progress")+'%'
   },1000,function () {
    $(this). text($(this).attr("data-progress")+'%')
    
   })
})
// make fixed menu 
$(".fixed-menu .fa-gear").on("click",function () {
  // console.log(-$(this).innerWidth()+'px');
  var fixedmenu = $(".fixed-menu");
  $(this).parent(fixedmenu).toggleClass('is-vissable');
 
  if(fixedmenu.hasClass("is-vissable")){
   // by parent 

    $(fixedmenu).animate({
      left:0
  
   },500)

  // by body 
  $('body').animate({
        paddingLeft:$(fixedmenu).innerWidth()+'px'
    
     },500)


  }
  else{
    $(fixedmenu).animate({
      left:-$(fixedmenu).innerWidth()+'px'
  
   },500)

  $('body').animate({
    paddingLeft:0

 },500)

  }

})


// change color 
$(".change-color li").on("click",function () {
  $("body").attr('data-default-color',$(this).data("color"));
})

// add selected  and gallary 
var numberOfImages = $(".themes").children().length,
marginBetwenImages=".5",
totalMarginBetweenImages=(numberOfImages-1)* marginBetwenImages,
widthOfImages= (100- totalMarginBetweenImages)/numberOfImages;
console.log(widthOfImages);
$(".themes-1").css({
  width:'widthOfImages' + '%',
  
})
$(".themes-1:not(:last-child)").css({
  marginRight:'marginBetwenImages' + '%',
})
// console.log($('.themes-1:last-child'))

$(".themes-1 img").on("click",function () {
  $(this).addClass("selected").parent().siblings().children().removeClass("selected");
  $(".image-1 img").hide().attr("src", $(this).attr("src")).fadeIn(500)
})

$(".image-1 .fa-chevron-left").on("click",function () {
  if($(".themes-1 .selected ").parent().is(":first-child")){
    $(".themes-1:last").children().click();
    

   }
   else{
    $(".themes-1 .selected").parent().prev().children().click();

   }

  
  
})

$(".image-1 .fa-chevron-right").on("click",function () {
    

   if($('.themes-1 .selected').parent().is(':last-child')){
    $(".themes-1 ").eq(0).children().click();

   }
   else{
     $(".themes-1 .selected").parent().next().children().click();


   }
  
 
  
})

// toggle product description 
$(".product i ,.item i").on("click",function () {
  $(this).toggleClass(" fa-plus fa-minus");
  $(this).next('p').slideToggle();
})
   
$(".items .view-option i").on("click",function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".items").removeClass("grid-system list-system")

  $(".items").addClass($(this).data('view'))
})

// error massage 
$(".error-message").each(function () {
  $(this).animate({
    right:0
  },2000,function () {
    $(this).delay(3000).fadeOut()
  })
})

/* our form 
*/
//  hide placeholder and apper puler 
var placeAttr = '';
$('[placeholder]').focus(function () {

  placeAttr = $(this).attr('placeholder');
  $(this).attr("placeholder" ,'')
   
}).blur(function () {
  $(this).attr("placeholder" ,placeAttr)
})
// show message 

$("[required]").blur(function () {
  if($(this).val()===""){
    $(this).next("span").fadeIn().delay(2000).fadeOut();
  }
})

// add astric to all requaried filled 

$('<span class="astrice"> *  </span>').insertBefore(' :input[required]');
 $(".astrice").parent('p').css('position','relative');
$(".astrice").css({
  'position':"absolute",
  'top':15,
  'left':$('input').innerWidth()-20
})

})