$(function(){
  // HEADER
  $(".menubar").on("mouseenter", function(){
    $(".topmenu li").stop().animate({top: 0, opacity: 1}, 500);
    $(this).find("img").attr("src", "../img/mds_menubar_up.png");
  });
  $(".topmenu").on("mouseleave", function(){
    $(".topmenu li").not(".menubar").stop().animate({opacity: 0}, 500);
    $(".menubar>a>img").attr("src", "../img/mds_menubar_down.png");
  });

  // PAGE 1
  $(".door").on("dblclick" , function(){
    $(this).toggleClass("open");
    $(".logo").addClass("show");
  });

  // PAGE 2
  $(".box").hide();
  $(".poster, .cursor").on("click", function(){
    $(".box").stop().fadeIn();
  });
  $(".box").on("click", function(){
    $(this).stop().fadeOut();
  });

  // PAGE 3
  $(".char_introduce").stop().hide();
  $(".char_list>li").on("click", function(){
    const i = $(".char_list li").index(this);
    console.log(i);
    $(".char_introduce").stop().fadeOut(500);
    $(".char>li").eq(i).stop().fadeIn(800);
    $(".hole").css("transform", "scale(1)");
  });

  // PAGE 4
  $(".ycursor_click").stop().hide();
  $(".game_info").hide();
  $(".switch, .ycursor").on("click", function(){
    $(".game_info").stop().fadeIn();
  });
  $(".game_info").on("click", function(){
    $(this).stop().fadeOut();
  });
});

