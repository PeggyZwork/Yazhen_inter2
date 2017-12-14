var count1 =0;
var count2 =0;
    $(document).ready(function(){
    $(".item").each(function(){
    $(this).css("top", Math.random()*0);
    $(this).css("width",Math.random()*60);
    $(this).css("height",80+ Math.random()*100);
    $(this).css("left",100* count1++);
    });
  $(".item2").each(function(){
    $(this).css("bottom", Math.random()*0);
    $(this).css("width",Math.random()*200);
    $(this).css("height",80+ Math.random()*50);
    $(this).css("left",60* count2++);
  });
    $(".item").hover(function(){
    $(this).animate({height:200},1000);
    },function(){
    $(this).animate({height:100},500);
});
    $(".item2").hover(function(){
    $(this).animate({height:200},1000);
    },function(){
    $(this).animate({height:100},500);
});
});
