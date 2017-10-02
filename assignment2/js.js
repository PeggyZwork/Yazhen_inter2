var count1 =0;
var count2 =0;
var barcount1=25;
$(document).ready(function(){
  $(".item").each(function(){
    $(this).css("top", Math.random()*0);
    $(this).css("width", 20+Math.random()*80);
    $(this).css("height",60+ Math.random()*40);
    $(this).css("left",75* count1++);

});
  $(".item2").each(function(){
    $(this).css("bottom", Math.random()*0);
    $(this).css("width", 20+Math.random()*80);
    $(this).css("height",60+ Math.random()*40);
    $(this).css("left",75* count2++);
});
  $(".item").hover(function(){
    $(this).animate({height:500},800);
},function(){
    $(this).animate({height:20},2500);
});
 $('#bar001').hover(function(){
   $(this).animate({height:500},800);
   $('#bar18').animate({height:450},1000);
 },function(){
     $(this).animate({height:20},2500);
     $('#bar18').animate({height:20},3000);
 });
 $('#bar18').hover(function(){
   $(this).animate({height:400},800);
   $('#bar007').animate({height:600},1000);
 },function(){
     $(this).animate({height:20},2500);
     $('#bar007').animate({height:20},2500);
 });
 $('#bar007').hover(function(){
   $(this).animate({height:500},800);
   $('#bar16').animate({height:500},800);
 },function(){
     $(this).animate({height:20},2500);
     $('#bar16').animate({height:20},3000);
 });
 $('#bar002').hover(function(){
   $(this).animate({height:700},800);
   $('#bar17').animate({height:500},3000);
 },function(){
     $(this).animate({height:20},2500);
     $('#bar17').animate({height:20},3000);
 });
 $('#bar003').hover(function(){
   $(this).animate({height:650},1000);
   $('#bar14').animate({height:650},500);
 },function(){
     $(this).animate({height:20},2500);
     $('#bar14').animate({height:20},3000);
 });
 $('#bar004').hover(function(){
   $(this).animate({height:800},1500);
   $('#bar11').animate({height:400},1000);
 },function(){
     $(this).animate({height:20},2500);
     $('#bar11').animate({height:20},3000);
 });
 $('#bar005').hover(function(){
   $(this).animate({height:500},800);
   $('#bar19').animate({height:400},1000);
   $('#bar13').animate({height:500},1000);
   $('#bar20').animate({height:600},1000);
 },function(){
     $(this).animate({height:20},2500);
     $('#bar19').animate({height:20},3000);
     $('#bar13').animate({height:20},3000);
     $('#bar20').animate({height:20},3000);
});
$('#bar006').hover(function(){
  $(this).animate({height:400},500);
  $('#bar12').animate({height:400},1500);
},function(){
    $(this).animate({height:20},2500);
    $('#bar12').animate({height:20},3000);
});
$('#bar008').hover(function(){
  $(this).animate({height:500},800);
  $('#bar010').animate({height:400},1000);
  $('#bar014').animate({height:500},1000);
  $('#bar016').animate({height:600},1000);
},function(){
    $(this).animate({height:20},2500);
    $('#bar010').animate({height:20},2000);
    $('#bar014').animate({height:20},2500);
    $('#bar016').animate({height:20},3000);
});
$('#bar009').hover(function(){
  $(this).animate({height:500},800);
  $('#bar21').animate({height:800},900);
  $('#bar15').animate({height:700},1000);
  $('#bar23').animate({height:600},1500);
},function(){
    $(this).animate({height:20},2500);
    $('#bar21').animate({height:20},3000);
    $('#bar15').animate({height:20},2500);
    $('#bar23').animate({height:20},2000);
});
 $('#bar08').hover(function(){
    $(this).animate({height:600},1000);
    $('#bar09').animate({height:400},1000);
    $('#bar04').animate({height:300},1000);
},function(){
    $(this).animate({height:20},2500);
    $('#bar09').animate({height:20},3000);
    $('#bar04').animate({height:20},3000);
});
 $('#bar011').hover(function(){
    $(this).animate({height:600},800);
    $('#bar06').animate({height:400},1000);
    $('#bar019').animate({height:300},1000);
},function(){
    $(this).animate({height:20},2500);
    $('#bar06').animate({height:20},3000);
    $('#bar019').animate({height:20},3000);
});
$('#bar10').hover(function(){
   $(this).animate({height:600},1000);
   $('#bar012').animate({height:500},1000);
   $('#bar013').animate({height:250},1000);
},function(){
   $(this).animate({height:20},2500);
   $('#bar012').animate({height:20},3000);
   $('#bar013').animate({height:20},3000);
});
$('#bar17').hover(function(){
   $(this).animate({height:600},1000);
   $('#bar021').animate({height:600},2000);
   $('#bar017').animate({height:350},800);
},function(){
   $(this).animate({height:20},2500);
   $('#bar021').animate({height:20},3000);
   $('#bar017').animate({height:20},3000);
});
$('#bar04').hover(function(){
   $(this).animate({height:600},1000);
   $('#bar018').animate({height:800},1500);
   $('#bar015').animate({height:400},1000);
},function(){
   $(this).animate({height:20},2500);
   $('#bar018').animate({height:20},3000);
   $('#bar015').animate({height:20},3000);
});
$('#bar07').hover(function(){
   $(this).animate({height:600},1000);
   $('#bar02').animate({height:700},2000);
   $('#bar018').animate({height:500},1000);
},function(){
   $(this).animate({height:20},2500);
   $('#bar02').animate({height:20},3000);
   $('#bar018').animate({height:20},3000);
});
$('#bar12').hover(function(){
   $(this).animate({height:500},1000);
   $('#bar003').animate({height:550},2000);
   $('#bar01').animate({height:600},1000);
},function(){
   $(this).animate({height:20},2500);
   $('#bar003').animate({height:20},3000);
   $('#bar01').animate({height:20},3000);
});
$('#bar06').hover(function(){
   $(this).animate({height:400},1000);
   $('#bar004').animate({height:650},1000);
   $('#bar008').animate({height:500},2000);
   $('#bar05').animate({height:650},1000);
   $('#bar020').animate({height:500},2000);
},function(){
   $(this).animate({height:20},2500);
   $('#bar004').animate({height:20},3000);
   $('#bar008').animate({height:20},3000);
   $('#bar05').animate({height:20},3000);
   $('#bar020').animate({height:20},3000);
});
$('#bar09').hover(function(){
   $(this).animate({height:400},1000);
   $('#bar13').animate({height:650},1000);
   $('#bar17').animate({height:500},2000);
   $('#bar03').animate({height:650},1000);
   $('#bar022').animate({height:500},2000);
},function(){
   $(this).animate({height:20},2500);
   $('#bar13').animate({height:20},3000);
   $('#bar17').animate({height:20},3000);
   $('#bar03').animate({height:20},3000);
   $('#bar022').animate({height:20},3000);
});
$('#bar12').hover(function(){
   $(this).animate({height:400},1000);
   $('#bar004').animate({height:650},1000);
   $('#bar14').animate({height:500},2000);
   $('#bar02').animate({height:500},2000);
},function(){
   $(this).animate({height:20},2500);
   $('#bar004').animate({height:20},3000);
   $('#bar14').animate({height:20},3000);
   $('#bar02').animate({height:20},3000);
});
$('#bar02').hover(function(){
   $(this).animate({height:400},1000);
   $('#bar01').animate({height:650},1000);
   $('#bar06').animate({height:500},2000);
   $('#bar003').animate({height:500},2000);
   $('#bar014').animate({height:500},2000);

},function(){
   $(this).animate({height:20},2500);
   $('#bar01').animate({height:20},3000);
   $('#bar06').animate({height:20},3000);
   $('#bar003').animate({height:20},3000);
   $('#bar014').animate({height:20},3000);
});

  $(".item2").hover(function(){
    $(this).animate({height:350},800);
  },function(){
    $(this).animate({height:20},4000);
});
var bar001 = 0;
$('#bar001').click(function(){
  if(bar001 % 2 == 0){
    $(this).css('background-color', 'white');
  }else if(bar001 % 2 == 1){
    $(this).css('background-color', '#0DFFD3');
    $('#bar18').css('background-color', '#7833C2');
  }
  bar001 ++;
});
var bar18 = 0;
$('#bar18').click(function(){
  if(bar18 % 2 == 0){
    $(this).css('background-color', 'white');
  }else if(bar18 % 2 == 1){
    $(this).css('background-color', '#FF420D');
    $('#bar007').css('background-color', '#87FF00');
  }
  bar18 ++;
});
var bar007 = 0;
$('#bar007').click(function(){
  if(bar007 % 2 == 0){
    $(this).css('background-color', 'white');
  }else if(bar007 % 2 == 1){
    $(this).css('background-color', '#FF00E1');
    $('#bar16').css('background-color', '#E56917');
  }
  bar007 ++;
});
var bar002 = 0;
$('#bar002').click(function(){
  if(bar002 % 2 == 0){
    $(this).css('background-color', '#FFF200');
  }else if(bar002 % 2 == 1){
    $(this).css('background-color', '#0DFFD3');
  }
  bar002 ++;
});
var bar003 = 0;
$('#bar003').click(function(){
  if(bar003 % 2 == 0){
    $(this).css('background-color', '#0DFFD3');
  }else if(bar003 % 2 == 1){
    $(this).css('background-color', '#FF00E1');
    $('#bar014').css('background-color', '#E56917');
  }
  bar003 ++;
});
var bar004 = 0;
$('#bar004').click(function(){
  if(bar004 % 2 == 0){
    $(this).css('background-color', '#FF00E1');
  }else if(bar004 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar13').css('background-color', '#E56917');
  }
  bar004 ++;
});

var bar006 = 0;
$('#bar006').click(function(){
  if(bar006 % 2 == 0){
    $(this).css('background-color', '#FFF200');
  }else if(bar006 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar12').css('background-color', '#008058');
  }
  bar006 ++;
});
var bar008 = 0;
$('#bar008').click(function(){
  if(bar008 % 2 == 0){
    $(this).css('background-color', '#87FF00');
  }else if(bar008 % 2 == 1){
    $(this).css('background-color', '#0DFFD3');
    $('#bar010').css('background-color', '#FF00E1');
    $('#bar014').css('background-color', '#FFF200');
    $('#bar016').css('background-color', '#87FF00');
  }
  bar008 ++;
});
var bar009 = 0;
$('#bar009').click(function(){
  if(bar009 % 2 == 0){
    $(this).css('background-color', '#FFF200');
  }else if(bar009 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar21').css('background-color', '#008058');
  }
  bar009 ++;
});
var bar010 = 0;
$('#bar010').click(function(){
  if(bar010 % 2 == 0){
    $(this).css('background-color', '#FFF200');
  }else if(bar010 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar09').css('background-color', '#E56917');
    $('#bar04').css('background-color', '#7833C2');
  }
  bar010 ++;
});
var bar011 = 0;
$('#bar011').click(function(){
  if(bar011 % 2 == 0){
    $(this).css('background-color', '#FFF200');
  }else if(bar011 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar06').css('background-color', '#FF420D');
    $('#bar019').css('background-color', '#7833C2');
  }
  bar011 ++;
});
var bar018 = 0;
$('#bar018').click(function(){
  if(bar018 % 2 == 0){
    $(this).css('background-color', 'white');
  }else if(bar018 % 2 == 1){
    $(this).css('background-color', '#00B7F1');
    $('#bar020').css('background-color', '#ED0874');
  }
  bar018 ++;
});
var bar07 = 0;
$('#bar07').click(function(){
  if(bar07 % 2 == 0){
    $(this).css('background-color', '#E56917');
  }else if(bar07 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar012').css('background-color', '#FF00E1');
    $('#bar013').css('background-color', '#7833C2');
  }
  bar07 ++;
});
var bar11 = 0;
$('#bar11').click(function(){
  if(bar11 % 2 == 0){
    $(this).css('background-color', '#FF420D');
  }else if(bar11 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar015').css('background-color', '#FF00E1');
  }
  bar11 ++;
});
var bar07 = 0;
$('#bar07').click(function(){
  if(bar07 % 2 == 0){
    $(this).css('background-color', '#7833C2');
  }else if(bar07 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar015').css('background-color', '#FFF200');
  }
  bar11 ++;
});
var bar015 = 0;
$('#bar015').click(function(){
  if(bar015 % 2 == 0){
    $(this).css('background-color', '#FFF200');
  }else if(bar015 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar15').css('background-color', '#FFF200');
  }
  bar015 ++;
});
var bar09 = 0;
$('#bar09').click(function(){
  if(bar09 % 2 == 0){
    $(this).css('background-color', '#7833C2');
  }else if(bar09 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar13').css('background-color', '#008058');
    $('#bar17').css('background-color', '#FF420D');
  }
  bar09 ++;
});
var bar12 = 0;
$('#bar12').click(function(){
  if(bar12 % 2 == 0){
    $(this).css('background-color', '#7833C2');
  }else if(bar12 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar004').css('background-color', '#FF00E1');
    $('#bar14').css('background-color', '#7833C2');
    $('#bar02').css('background-color', '#E56917');
  }
  bar12 ++;
});
var bar02 = 0;
$('#bar02').click(function(){
  if(bar02 % 2 == 0){
    $(this).css('background-color', '#7833C2');
  }else if(bar02 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar04').css('background-color', '#FF00E1');
    $('#bar01').css('background-color', '#7833C2');
    $('#bar06').css('background-color', '#E56917');
  }
  bar02 ++;
});
var bar005 = 0;
$('#bar005').click(function(){
  if(bar005 % 2 == 0){
    $(this).css('background-color', '#7833C2');
  }else if(bar005 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar008').css('background-color', '#FF00E1');
    $('#bar10').css('background-color', '#7833C2');
  }
  bar005 ++;
});
var bar03 = 0;
$('#bar03').click(function(){
  if(bar03 % 2 == 0){
    $(this).css('background-color', '#E56917');
  }else if(bar03 % 2 == 1){
    $(this).css('background-color', 'white');
    $('#bar19').css('background-color', '#008058');
    $('#bar017').css('background-color', '#008058');
  }
  bar03 ++;
});
var bar017 = 0;
$('#bar017').click(function(){
  if(bar017 % 2 == 0){
    $(this).css('background-color', '#7833C2');
  }else if(bar017 % 2 == 1){
    $(this).css('background-color', '#008058');
    $('#bar22').css('background-color', '#FFF200');
    $('#bar08').css('background-color', '#7833C2');
  }
  bar017 ++;
});
var bar14 = 0;
$('#bar14').click(function(){
  if(bar14 % 2 == 0){
    $(this).css('background-color', '#7833C2');
  }else if(bar14 % 2 == 1){
    $(this).css('background-color', '#008058');
    $('#bar022').css('background-color', '#FFF200');
    $('#bar013').css('background-color', '#7833C2');
  }
  bar14 ++;
});
var bar016 = 0;
$('#bar016').click(function(){
  if(bar016 % 2 == 0){
    $(this).css('background-color', '#7833C2');
  }else if(bar016 % 2 == 1){
    $(this).css('background-color', '#008058');
    $('#bar002').css('background-color', '#FF00E1');
    $('#bar020').css('background-color', '#FF00E1');
  }
  bar016 ++;
});


    var listOfClasses = ["color-scheme-1","color-scheme-2","color-scheme-3","color-scheme-4","color-scheme-4","color-scheme-6"];
    var randomNum = Math.floor(Math.random() * listOfClasses.length);
    $("html").addClass(listOfClasses[randomNum]);
});
