var count1 =0;
var count2 =0;
    $(document).ready(function(){
    $(".item").each(function(){
    $(this).css("top", Math.random()*0);
    $(this).css("width",Math.random()*30);
    $(this).css("height",30+ Math.random()*20);
    $(this).css("left",60* count1++);
    });
  $(".item2").each(function(){
    $(this).css("bottom", Math.random()*0);
    $(this).css("width",Math.random()*30);
    $(this).css("height",50+ Math.random()*10);
    $(this).css("left",60* count2++);
  });
    $(".item").hover(function(){
    $(this).animate({height:500},500);
    },function(){
    $(this).animate({height:200},200);
});
    $(".item2").hover(function(){
    $(this).animate({height:200},1000);
    },function(){
    $(this).animate({height:100},500);
});
    $(".item").click(function(){
    $(this).css("background-color","white");
    },function(){
    $(this).css("background-color","red");
});
});
