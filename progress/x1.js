var count1 =0;
var count2 =0;
    $(document).ready(function(){
    $(".item").each(function(){
    $(this).css("top", Math.random()*0);
    $(this).css("width",Math.random()*30);
    $(this).css("height",80+ Math.random()*50);
    $(this).css("left",60* count1++);
    });
  $(".item2").each(function(){
    $(this).css("bottom", Math.random()*0);
    $(this).css("width",Math.random()*30);
    $(this).css("height",80+ Math.random()*50);
    $(this).css("left",60* count2++);
  });
  
});
