$(document).ready(function(){
$("span1").mouseover(function() {
    $("span1").animate({opacity:0});
  });
  $("span2").mouseover(function() {
      $("span2").animate({opacity:0});
    });
    $("span3").mouseover(function() {
        $("span3").animate({opacity:0});
            });
            $("span4").mouseover(function() {
        $("span4").animate({opacity:0});
});
$("span1").mouseout(function() {
    $("span1").animate({opacity:100});
        });
    $("span2").mouseout(function() {
    $("span2").animate({opacity:100});
      });
      $("span3").mouseout(function() {
    $("span3").animate({opacity:100});
          });
          $("span4").mouseout(function() {
    $("span4").animate({opacity:100});
});
});
