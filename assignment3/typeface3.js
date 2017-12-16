$(document).ready(function(){

 $(".square-a1").hover(function(){
   $(".square-a2").addClass("square-a2-2");
   $(".square-a1").addClass("square-a1-2");
});
$('.bottom').bind('click', function() {
      FadeOuta1();
  });
  function FadeOuta1()
  {
      setTimeout(function () { FadeDiva1(); }, 100);
  }
  function FadeDiva1()
  {
    $(".square-a2").removeClass("square-a2-2" );
    $(".square-a1").removeClass("square-a1-2");
  };

 $(".square-a3").hover(function(){
   $(".square-a3").addClass("square-a3-2");
   $(".square-a4").addClass("square-a4-2");
 });
 $('.bottom').bind('click', function() {
       FadeOuta2();
   });
   function FadeOuta2()
   {
       setTimeout(function () { FadeDiva2(); }, 200);
   }
   function FadeDiva2()
   {
   $(".square-a3").removeClass("square-a3-2");
   $(".square-a4").removeClass("square-a4-2");
 };

 $(".square-a8").hover(function(){
   $(".square-a8").addClass("square-a8-2");
   $(".square-a9").addClass("square-a9-2");
 });
 $('.bottom').bind('click', function() {
       FadeOuta3();
   });
   function FadeOuta3()
   {
       setTimeout(function () { FadeDiva3(); }, 300);
   }
   function FadeDiva3()
   {
   $(".square-a8").removeClass("square-a8-2");
   $(".square-a9").removeClass("square-a9-2");
 };

 $(".square-a6").hover(function(){
   $(".square-a6").addClass("square-a6-2");
   $(".square-a7").addClass("square-a7-2");
 });
 $('.bottom').bind('click', function() {
       FadeOuta4();
   });
   function FadeOuta4()
   {
       setTimeout(function () { FadeDiva4(); }, 400);
   }
   function FadeDiva4()
   {
   $(".square-a6").removeClass("square-a6-2");
   $(".square-a7").removeClass("square-a7-2");
 };


 $(".square-b1").hover(function(){
   $(".square-b1").addClass("square-b1-2");
   $(".square-b5").addClass("square-b5-2");
 });
 $('.bottom').bind('click', function() {
       FadeOutb1();
   });
   function FadeOutb1()
   {
       setTimeout(function () { FadeDivb1(); }, 500);
   }
   function FadeDivb1()
   {
   $(".square-b1").removeClass("square-b1-2");
   $(".square-b5").removeClass("square-b5-2");
 };

 $(".square-b3").hover(function(){
   $(".square-b3").addClass("square-b3-2");
   $(".square-b8").addClass("square-b8-2");
 });
 $('.bottom').bind('click', function() {
       FadeOutb2();
   });
   function FadeOutb2()
   {
       setTimeout(function () { FadeDivb2(); }, 600);
   }
   function FadeDivb2()
   {
   $(".square-b3").removeClass("square-b3-2");
   $(".square-b8").removeClass("square-b8-2");
 };

 $(".square-b6").hover(function(){
   $(".square-b6").addClass("square-b6-2");
   $(".square-b7").addClass("square-b7-2");
 });
 $('.bottom').bind('click', function() {
       FadeOutb3();
   });
   function FadeOutb3()
   {
       setTimeout(function () { FadeDivb3(); }, 700);
   }
   function FadeDivb3()
   {
   $(".square-b6").removeClass("square-b6-2");
   $(".square-b7").removeClass("square-b7-2");
 };

 $(".square-b9").hover(function(){
   $(".square-b9").addClass("square-b9-2");
   $(".square-b11").addClass("square-b11-2");
 });
 $('.bottom').bind('click', function() {
       FadeOutb4();
   });
   function FadeOutb4()
   {
       setTimeout(function () { FadeDivb4(); }, 800);
   }
   function FadeDivb4()
   {
   $(".square-b9").removeClass("square-b9-2");
   $(".square-b11").removeClass("square-b11-2");
};

$(".square-b4").hover(function(){
  $(".square-b4").addClass("square-b4-2");
  $(".square-b10").addClass("square-b10-2");
});
$('.bottom').bind('click', function() {
      FadeOutb5();
  });
  function FadeOutb5()
  {
      setTimeout(function () { FadeDivb5(); }, 900);
  }
  function FadeDivb5()
  {
  $(".square-b4").removeClass("square-b4-2");
  $(".square-b10").removeClass("square-b10-2");
};


$(".square-c1").hover(function(){
  $(".square-c1").addClass("square-c1-2");
  $(".square-c2").addClass("square-c2-2");
});
$('.bottom').bind('click', function() {
      FadeOutc1();
  });
  function FadeOutc1()
  {
      setTimeout(function () { FadeDivc1(); }, 1000);
  }
  function FadeDivc1()
  {
  $(".square-c1").removeClass("square-c1-2");
  $(".square-c2").removeClass("square-c2-2");
};

$(".square-c4").hover(function(){
  $(".square-c4").addClass("square-c4-2");
  $(".square-c5").addClass("square-c5-2");
});
$('.bottom').bind('click', function() {
      FadeOutc2();
  });
  function FadeOutc2()
  {
      setTimeout(function () { FadeDivc2(); }, 1100);
  }
  function FadeDivc2()
  {

  $(".square-c4").removeClass("square-c4-2");
  $(".square-c5").removeClass("square-c5-2");
};



$(".square-d1").hover(function(){
  $(".square-d1").addClass("square-d1-2");
  $(".square-d2").addClass("square-d2-2");
});
$('.bottom').bind('click', function() {
      FadeOutd1();
  });
  function FadeOutd1()
  {
      setTimeout(function () { FadeDivd1(); }, 1200);
  }
  function FadeDivd1()
  {
  $(".square-d1").removeClass("square-d1-2");
  $(".square-d2").removeClass("square-d2-2");
};

$(".square-d4").hover(function(){
  $(".square-d4").addClass("square-d4-2");
  $(".square-d5").addClass("square-d5-2");
});
$('.bottom').bind('click', function() {
      FadeOutd2();
  });
  function FadeOutd2()
  {
      setTimeout(function () { FadeDivd2(); }, 1300);
  }
  function FadeDivd2()
  {
  $(".square-d4").removeClass("square-d4-2");
  $(".square-d5").removeClass("square-d5-2");
};

$(".square-d6").hover(function(){
  $(".square-d6").addClass("square-d6-2");
  $(".square-d7").addClass("square-d7-2");
});
$('.bottom').bind('click', function() {
      FadeOutd3();
  });
  function FadeOutd3()
  {
      setTimeout(function () { FadeDivd3(); }, 1400);
  }
  function FadeDivd3()
  {
  $(".square-d6").removeClass("square-d6-2");
  $(".square-d7").removeClass("square-d7-2");
};

$(".square-d11").hover(function(){
  $(".square-d11").addClass("square-d11-2");
  $(".square-d12").addClass("square-d12-2");
});
$('.bottom').bind('click', function() {
      FadeOutd4();
  });
  function FadeOutd4()
  {
      setTimeout(function () { FadeDivd4(); }, 1500);
  }
  function FadeDivd4()
  {
  $(".square-d11").removeClass("square-d11-2");
  $(".square-d12").removeClass("square-d12-2");
};

$(".square-d8").hover(function(){
  $(".square-d8").addClass("square-d8-2");
  $(".square-d9").addClass("square-d9-2");
});
$('.bottom').bind('click', function() {
      FadeOutd5();
  });
  function FadeOutd5()
  {
      setTimeout(function () { FadeDivd5(); }, 1600);
  }
  function FadeDivd5()
  {
  $(".square-d8").removeClass("square-d8-2");
  $(".square-d9").removeClass("square-d9-2");
};


$(".square-e1").hover(function(){
  $(".square-e1").addClass("square-e1-2");
  $(".square-e2").addClass("square-e2-2");
});
$('.bottom').bind('click', function() {
      FadeOute1();
  });
  function FadeOute1()
  {
      setTimeout(function () { FadeDive1(); }, 1700);
  }
  function FadeDive1()
  {
  $(".square-e1").removeClass("square-e1-2");
  $(".square-e2").removeClass("square-e2-2");
};

$(".square-e4").hover(function(){
  $(".square-e4").addClass("square-e4-2");
  $(".square-e3").addClass("square-e3-2");
});
$('.bottom').bind('click', function() {
      FadeOute2();
  });
  function FadeOute2()
  {
      setTimeout(function () { FadeDive2(); }, 1800);
  }
  function FadeDive2()
  {
  $(".square-e4").removeClass("square-e4-2");
  $(".square-e3").removeClass("square-e3-2");
};

$(".square-e7").hover(function(){
  $(".square-e7").addClass("square-e7-2");
  $(".square-e8").addClass("square-e8-2");
});
$('.bottom').bind('click', function() {
      FadeOute3();
  });
  function FadeOute3()
  {
      setTimeout(function () { FadeDive3(); }, 1900);
  }
  function FadeDive3()
  {
  $(".square-e7").removeClass("square-e7-2");
  $(".square-e8").removeClass("square-e8-2");
};

$(".square-f1").hover(function(){
  $(".square-f1").addClass("square-f1-2");
  $(".square-f2").addClass("square-f2-2");
});
$('.bottom').bind('click', function() {
      FadeOutf1();
  });
  function FadeOutf1()
  {
      setTimeout(function () { FadeDivf1(); }, 2000);
  }
  function FadeDivf1()
  {
  $(".square-f1").removeClass("square-f1-2");
  $(".square-f2").removeClass("square-f2-2");
};

$(".square-f4").hover(function(){
  $(".square-f4").addClass("square-f4-2");
  $(".square-f6").addClass("square-f6-2");
});
$('.bottom').bind('click', function() {
      FadeOutf2();
  });
  function FadeOutf2()
  {
      setTimeout(function () { FadeDivf2(); }, 2100);
  }
  function FadeDivf2()
  {
  $(".square-f4").removeClass("square-f4-2");
  $(".square-f6").removeClass("square-f6-2");
};


$(".square-g1").hover(function(){
  $(".square-g1").addClass("square-g1-2");
  $(".square-g2").addClass("square-g2-2");
});
$('.bottom').bind('click', function() {
      FadeOutg1();
  });
  function FadeOutg1()
  {
      setTimeout(function () { FadeDivg1(); }, 2200);
  }
  function FadeDivg1()
  {
  $(".square-g1").removeClass("square-g1-2");
  $(".square-g2").removeClass("square-g2-2");
};

$(".square-g5").hover(function(){
  $(".square-g5").addClass("square-g5-2");
  $(".square-g4").addClass("square-g4-2");
});
$('.bottom').bind('click', function() {
      FadeOutg2();
  });
  function FadeOutg2()
  {
      setTimeout(function () { FadeDivg2(); }, 2300);
  }
  function FadeDivg2()
  {
  $(".square-g5").removeClass("square-g5-2");
  $(".square-g4").removeClass("square-g4-2");
};

$(".square-g8").hover(function(){
  $(".square-g8").addClass("square-g8-2");
  $(".square-g9").addClass("square-g9-2");
});
$('.bottom').bind('click', function() {
      FadeOutg3();
  });
  function FadeOutg3()
  {
      setTimeout(function () { FadeDivg3(); }, 2400);
  }
  function FadeDivg3()
  {
  $(".square-g8").removeClass("square-g8-2");
  $(".square-g9").removeClass("square-g9-2");
};

$(".square-g6").hover(function(){
  $(".square-g6").addClass("square-g6-2");
  $(".square-g7").addClass("square-g7-2");
});
$('.bottom').bind('click', function() {
      FadeOutg4();
  });
  function FadeOutg4()
  {
      setTimeout(function () { FadeDivg4(); }, 2500);
  }
  function FadeDivg4()
  {
  $(".square-g6").removeClass("square-g6-2");
  $(".square-g7").removeClass("square-g7-2");
};


$(".square-h3").hover(function(){
  $(".square-h3").addClass("square-h3-2");
  $(".square-h1").addClass("square-h1-2");
});
$('.bottom').bind('click', function() {
      FadeOuth1();
  });
  function FadeOuth1()
  {
      setTimeout(function () { FadeDivh1(); }, 2600);
  }
  function FadeDivh1()
  {
  $(".square-h3").removeClass("square-h3-2");
  $(".square-h1").removeClass("square-h1-2");
};

$(".square-h5").hover(function(){
  $(".square-h5").addClass("square-h5-2");
  $(".square-h4").addClass("square-h4-2");
});
$('.bottom').bind('click', function() {
      FadeOuth2();
  });
  function FadeOuth2()
  {
      setTimeout(function () { FadeDivh2(); }, 2700);
  }
  function FadeDivh2()
  {

  $(".square-h5").removeClass("square-h5-2");
  $(".square-h4").removeClass("square-h4-2");
};


$(".square-i6").hover(function(){
  $(".square-i6").addClass("square-i6-2");
  $(".square-i4").addClass("square-i4-2");
});
$('.bottom').bind('click', function() {
      FadeOuti1();
  });
  function FadeOuti1()
  {
      setTimeout(function () { FadeDivi1(); }, 2800);
  }
  function FadeDivi1()
  {

  $(".square-i6").removeClass("square-i6-2");
  $(".square-i4").removeClass("square-i4-2");
};


$(".square-j2").hover(function(){
  $(".square-j2").addClass("square-j2-2");
  $(".square-j1").addClass("square-j1-2");
});
$('.bottom').bind('click', function() {
      FadeOutj1();
  });
  function FadeOutj1()
  {
      setTimeout(function () { FadeDivj1(); }, 2900);
  }
  function FadeDivj1()
  {

  $(".square-j2").removeClass("square-j2-2");
  $(".square-j1").removeClass("square-j1-2");
};

$(".square-j5").hover(function(){
  $(".square-j5").addClass("square-j5-2");
  $(".square-j4").addClass("square-j4-2");
});
$('.bottom').bind('click', function() {
      FadeOutj2();
  });
  function FadeOutj2()
  {
      setTimeout(function () { FadeDivj2(); }, 3000);
  }
  function FadeDivj2()
  {
  $(".square-j5").removeClass("square-j5-2");
  $(".square-j4").removeClass("square-j4-2");
};

$(".square-j7").hover(function(){
  $(".square-j7").addClass("square-j7-2");
  $(".square-j6").addClass("square-j6-2");
});
$('.bottom').bind('click', function() {
      FadeOutj3();
  });
  function FadeOutj3()
  {
      setTimeout(function () { FadeDivj3(); }, 3100);
  }
  function FadeDivj3()
  {
  $(".square-j7").removeClass("square-j7-2");
  $(".square-j6").removeClass("square-j6-2");
};

$(".square-k3").hover(function(){
  $(".square-k3").addClass("square-k3-2");
  $(".square-k1").addClass("square-k1-2");
});
$('.bottom').bind('click', function() {
      FadeOutk1();
  });
  function FadeOutk1()
  {
      setTimeout(function () { FadeDivk1(); }, 3200);
  }
  function FadeDivk1()
  {
  $(".square-k3").removeClass("square-k3-2");
  $(".square-k1").removeClass("square-k1-2");
};

$(".square-k8").hover(function(){
  $(".square-k8").addClass("square-k8-2");
  $(".square-k2").addClass("square-k2-2");
});
$('.bottom').bind('click', function() {
      FadeOutk2();
  });
  function FadeOutk2()
  {
      setTimeout(function () { FadeDivk2(); }, 3300);
  }
  function FadeDivk2()
  {
  $(".square-k8").removeClass("square-k8-2");
  $(".square-k2").removeClass("square-k2-2");
};

$(".square-k11").hover(function(){
  $(".square-k11").addClass("square-k11-2");
  $(".square-k12").addClass("square-k12-2");
});
$('.bottom').bind('click', function() {
      FadeOutk3();
  });
  function FadeOutk3()
  {
      setTimeout(function () { FadeDivk3(); }, 3400);
  }
  function FadeDivk3()
  {
  $(".square-k11").removeClass("square-k11-2");
  $(".square-k12").removeClass("square-k12-2");
};

$(".square-k6").hover(function(){
  $(".square-k6").addClass("square-k6-2");
  $(".square-k7").addClass("square-k7-2");
});
$('.bottom').bind('click', function() {
      FadeOutk4();
  });
  function FadeOutk4()
  {
      setTimeout(function () { FadeDivk4(); }, 3500);
  }
  function FadeDivk4()
  {
  $(".square-k6").removeClass("square-k6-2");
  $(".square-k7").removeClass("square-k7-2");
};


$(".square-l2").hover(function(){
  $(".square-l2").addClass("square-l2-2");
  $(".square-l1").addClass("square-l1-2");
});
$('.bottom').bind('click', function() {
      FadeOutl1();
  });
  function FadeOutl1()
  {
      setTimeout(function () { FadeDivl1(); }, 3600);
  }
  function FadeDivl1()
  {
  $(".square-l2").removeClass("square-l2-2");
  $(".square-l1").removeClass("square-l1-2");
};

$(".square-m1").hover(function(){
  $(".square-m1").addClass("square-m1-2");
  $(".square-m6").addClass("square-m6-2");
});
$('.bottom').bind('click', function() {
      FadeOutm1();
  });
  function FadeOutm1()
  {
      setTimeout(function () { FadeDivm1(); }, 3700);
  }
  function FadeDivm1()
  {
  $(".square-m1").removeClass("square-m1-2");
  $(".square-m6").removeClass("square-m6-2");
};

$(".square-m3").hover(function(){
  $(".square-m3").addClass("square-m3-2");
  $(".square-m7").addClass("square-m7-2");
});
$('.bottom').bind('click', function() {
      FadeOutm2();
  });
  function FadeOutm2()
  {
      setTimeout(function () { FadeDivm2(); }, 3800);
  }
  function FadeDivm2()
  {
  $(".square-m3").removeClass("square-m3-2");
  $(".square-m7").removeClass("square-m7-2");
};

$(".square-m5").hover(function(){
  $(".square-m5").addClass("square-m5-2");
  $(".square-m8").addClass("square-m8-2");
});
$('.bottom').bind('click', function() {
      FadeOutm3();
  });
  function FadeOutm3()
  {
      setTimeout(function () { FadeDivm3(); }, 3900);
  }
  function FadeDivm3()
  {
  $(".square-m5").removeClass("square-m5-2");
  $(".square-m8").removeClass("square-m8-2");
};


$(".square-n1").hover(function(){
  $(".square-n1").addClass("square-n1-2");
  $(".square-n5").addClass("square-n5-2");
});
$('.bottom').bind('click', function() {
      FadeOutn1();
  });
  function FadeOutn1()
  {
      setTimeout(function () { FadeDivn1(); }, 4000);
  }
  function FadeDivn1()
  {
  $(".square-n1").removeClass("square-n1-2");
  $(".square-n5").removeClass("square-n5-2");
};

$(".square-n3").hover(function(){
  $(".square-n3").addClass("square-n3-2");
  $(".square-n6").addClass("square-n6-2");
});
$('.bottom').bind('click', function() {
      FadeOutn2();
  });
  function FadeOutn2()
  {
      setTimeout(function () { FadeDivn2(); }, 4100);
  }
  function FadeDivn2()
  {
  $(".square-n3").removeClass("square-n3-2");
  $(".square-n6").removeClass("square-n6-2");
};

$(".square-n7").hover(function(){
  $(".square-n7").addClass("square-n7-2");
  $(".square-n8").addClass("square-n8-2");
});
$('.bottom').bind('click', function() {
      FadeOutn3();
  });
  function FadeOutn3()
  {
      setTimeout(function () { FadeDivn3(); }, 4200);
  }
  function FadeDivn3()
  {
  $(".square-n7").removeClass("square-n7-2");
  $(".square-n8").removeClass("square-n8-2");
};

$(".square-n9").hover(function(){
  $(".square-n9").addClass("square-n9-2");
  $(".square-n4").addClass("square-n4-2");
});
$('.bottom').bind('click', function() {
      FadeOutn4();
  });
  function FadeOutn4()
  {
      setTimeout(function () { FadeDivn4(); }, 4300);
  }
  function FadeDivn4()
  {
  $(".square-n9").removeClass("square-n9-2");
  $(".square-n4").removeClass("square-n4-2");
};


$(".square-o1").hover(function(){
  $(".square-o1").addClass("square-o1-2");
  $(".square-o2").addClass("square-o2-2");
});
$('.bottom').bind('click', function() {
      FadeOuto1();
  });
  function FadeOuto1()
  {
      setTimeout(function () { FadeDivo1(); }, 4400);
  }
  function FadeDivo1()
  {
  $(".square-o1").removeClass("square-o1-2");
  $(".square-o2").removeClass("square-o2-2");
};

$(".square-o4").hover(function(){
  $(".square-o4").addClass("square-o4-2");
  $(".square-o5").addClass("square-o5-2");
});
$('.bottom').bind('click', function() {
      FadeOuto2();
  });
  function FadeOuto2()
  {
      setTimeout(function () { FadeDivo2(); }, 4500);
  }
  function FadeDivo2()
  {
  $(".square-o4").removeClass("square-o4-2");
  $(".square-o5").removeClass("square-o5-2");
};

$(".square-o10").hover(function(){
  $(".square-o10").addClass("square-o10-2");
  $(".square-o6").addClass("square-o6-2");
});
$('.bottom').bind('click', function() {
      FadeOuto4();
  });
  function FadeOuto4()
  {
      setTimeout(function () { FadeDivo4(); }, 4600);
  }
  function FadeDivo4()
  {
  $(".square-o10").removeClass("square-o10-2");
  $(".square-o6").removeClass("square-o6-2");
};

$(".square-o3").hover(function(){
  $(".square-o3").addClass("square-o3-2");
  $(".square-o7").addClass("square-o7-2");
});
$('.bottom').bind('click', function() {
      FadeOuto3();
  });
  function FadeOuto3()
  {
      setTimeout(function () { FadeDivo3(); }, 4500);
  }
  function FadeDivo3()
  {
  $(".square-o3").removeClass("square-o3-2");
  $(".square-o7").removeClass("square-o7-2");
};

$(".square-o11").hover(function(){
  $(".square-o12").addClass("square-o12-2");
  $(".square-o11").addClass("square-o11-2");
});
$('.bottom').bind('click', function() {
      FadeOuto6();
  });
  function FadeOuto6()
  {
      setTimeout(function () { FadeDivo6(); }, 4700);
  }
  function FadeDivo6()
  {
  $(".square-o12").removeClass("square-o12-2");
  $(".square-o11").removeClass("square-o11-2");
};

$(".square-o14").hover(function(){
  $(".square-o14").addClass("square-o14-2");
  $(".square-o13").addClass("square-o13-2");
});
$('.bottom').bind('click', function() {
      FadeOuto7();
  });
  function FadeOuto7()
  {
      setTimeout(function () { FadeDivo7(); }, 4700);
  }
  function FadeDivo7()
  {
  $(".square-o14").removeClass("square-o14-2");
  $(".square-o13").removeClass("square-o13-2");
};

$(".square-o16").hover(function(){
  $(".square-o16").addClass("square-o16-2");
  $(".square-o15").addClass("square-o15-2");
});
$('.bottom').bind('click', function() {
      FadeOuto8();
  });
  function FadeOuto8()
  {
      setTimeout(function () { FadeDivo8(); }, 4700);
  }
  function FadeDivo8()
  {
  $(".square-o16").removeClass("square-o16-2");
  $(".square-o15").removeClass("square-o15-2");
};

$(".square-o8").hover(function(){
  $(".square-o8").addClass("square-o8-2");
  $(".square-o9").addClass("square-o9-2");
});
$('.bottom').bind('click', function() {
      FadeOuto5();
  });
  function FadeOuto5()
  {
      setTimeout(function () { FadeDivo5(); }, 4600);
  }
  function FadeDivo5()
  {
  $(".square-o8").removeClass("square-o8-2");
  $(".square-o9").removeClass("square-o9-2");
};


$(".square-p1").hover(function(){
  $(".square-p1").addClass("square-p1-2");
  $(".square-p4").addClass("square-p4-2");
});
$('.bottom').bind('click', function() {
      FadeOutp1();
  });
  function FadeOutp1()
  {
      setTimeout(function () { FadeDivp1(); }, 4700);
  }
  function FadeDivp1()
  {
  $(".square-p1").removeClass("square-p1-2");
  $(".square-p4").removeClass("square-p4-2");
};

$(".square-p3").hover(function(){
  $(".square-p3").addClass("square-p3-2");
  $(".square-p2").addClass("square-p2-2");
});
$('.bottom').bind('click', function() {
      FadeOutp2();
  });
  function FadeOutp2()
  {
      setTimeout(function () { FadeDivp2(); }, 4800);
  }
  function FadeDivp2()
  {
  $(".square-p3").removeClass("square-p3-2");
  $(".square-p2").removeClass("square-p2-2");
};

$(".square-p6").hover(function(){
  $(".square-p6").addClass("square-p6-2");
  $(".square-p5").addClass("square-p5-2");
});
$('.bottom').bind('click', function() {
      FadeOutp3();
  });
  function FadeOutp3()
  {
      setTimeout(function () { FadeDivp3(); }, 4800);
  }
  function FadeDivp3()
  {
  $(".square-p6").removeClass("square-p6-2");
  $(".square-p5").removeClass("square-p5-2");
};

$(".square-p8").hover(function(){
  $(".square-p8").addClass("square-p8-2");
  $(".square-p9").addClass("square-p9-2");
});
$('.bottom').bind('click', function() {
      FadeOutp4();
  });
  function FadeOutp4()
  {
      setTimeout(function () { FadeDivp4(); }, 4800);
  }
  function FadeDivp4()
  {
  $(".square-p8").removeClass("square-p8-2");
  $(".square-p9").removeClass("square-p9-2");
};

$(".square-p13").hover(function(){
  $(".square-p13").addClass("square-p13-2");
  $(".square-p11").addClass("square-p11-2");
});
$('.bottom').bind('click', function() {
      FadeOutp5();
  });
  function FadeOutp5()
  {
      setTimeout(function () { FadeDivp5(); }, 4900);
  }
  function FadeDivp5()
  {
  $(".square-p13").removeClass("square-p13-2");
  $(".square-p11").removeClass("square-p11-2");
};

$(".square-p12").hover(function(){
  $(".square-p12").addClass("square-p12-2");
  $(".square-p14").addClass("square-p14-2");
});
$('.bottom').bind('click', function() {
      FadeOutp6();
  });
  function FadeOutp6()
  {
      setTimeout(function () { FadeDivp6(); }, 5000);
  }
  function FadeDivp6()
  {
  $(".square-p12").removeClass("square-p12-2");
  $(".square-p14").removeClass("square-p14-2");
};

$(".square-q1").hover(function(){
  $(".square-q1").addClass("square-q1-2");
  $(".square-q2").addClass("square-q2-2");
});
$('.bottom').bind('click', function() {
      FadeOutq1();
  });
  function FadeOutq1()
  {
      setTimeout(function () { FadeDivq1(); }, 5100);
  }
  function FadeDivq1()
  {
  $(".square-q1").removeClass("square-q1-2");
  $(".square-q2").removeClass("square-q2-2");
};

$(".square-q4").hover(function(){
  $(".square-q4").addClass("square-q4-2");
  $(".square-q6").addClass("square-q6-2");
});
$('.bottom').bind('click', function() {
      FadeOutq2();
  });
  function FadeOutq2()
  {
      setTimeout(function () { FadeDivq2(); }, 5200);
  }
  function FadeDivq2()
  {
  $(".square-q4").removeClass("square-q4-2");
  $(".square-q6").removeClass("square-q6-2");
};

$(".square-q10").hover(function(){
  $(".square-q10").addClass("square-q10-2");
  $(".square-q11").addClass("square-q11-2");
});
$('.bottom').bind('click', function() {
      FadeOutq3();
  });
  function FadeOutq3()
  {
      setTimeout(function () { FadeDivq3(); }, 5300);
  }
  function FadeDivq3()
  {
  $(".square-q10").removeClass("square-q10-2");
  $(".square-q11").removeClass("square-q11-2");
};

$(".square-q12").hover(function(){
  $(".square-q12").addClass("square-q12-2");
  $(".square-q13").addClass("square-q13-2");
});
$('.bottom').bind('click', function() {
      FadeOutq4();
  });
  function FadeOutq4()
  {
      setTimeout(function () { FadeDivq4(); }, 5400);
  }
  function FadeDivq4()
  {
  $(".square-q12").removeClass("square-q12-2");
  $(".square-q13").removeClass("square-q13-2");
};

$(".square-q14").hover(function(){
  $(".square-q14").addClass("square-q14-2");
  $(".square-q15").addClass("square-q15-2");
});
$('.bottom').bind('click', function() {
      FadeOutq5();
  });
  function FadeOutq5()
  {
      setTimeout(function () { FadeDivq5(); }, 5500);
  }
  function FadeDivq5()
  {
  $(".square-q14").removeClass("square-q14-2");
  $(".square-q15").removeClass("square-q15-2");
};

$(".square-q17").hover(function(){
  $(".square-q17").addClass("square-q17-2");
  $(".square-q9").addClass("square-q9-2");
});
$('.bottom').bind('click', function() {
      FadeOutq6();
  });
  function FadeOutq6()
  {
      setTimeout(function () { FadeDivq6(); }, 5200);
  }
  function FadeDivq6()
  {
  $(".square-q17").removeClass("square-q17-2");
  $(".square-q9").removeClass("square-q9-2");
};

$(".square-q8").hover(function(){
  $(".square-q8").addClass("square-q8-2");
  $(".square-q7").addClass("square-q7-2");
});
$('.bottom').bind('click', function() {
      FadeOutq7();
  });
  function FadeOutq7()
  {
      setTimeout(function () { FadeDivq7(); }, 5100);
  }
  function FadeDivq7()
  {
  $(".square-q8").removeClass("square-q8-2");
  $(".square-q7").removeClass("square-q7-2");
};

$(".square-r1").hover(function(){
  $(".square-r1").addClass("square-r1-2");
  $(".square-r2").addClass("square-r2-2");
});
$('.bottom').bind('click', function() {
      FadeOutr1();
  });
  function FadeOutr1()
  {
      setTimeout(function () { FadeDivr1(); }, 5600);
  }
  function FadeDivr1()
  {
  $(".square-r1").removeClass("square-r1-2");
  $(".square-r2").removeClass("square-r2-2");
};

$(".square-r3").hover(function(){
  $(".square-r3").addClass("square-r3-2");
  $(".square-r5").addClass("square-r5-2");
});
$('.bottom').bind('click', function() {
      FadeOutr2();
  });
  function FadeOutr2()
  {
      setTimeout(function () { FadeDivr2(); }, 5700);
  }
  function FadeDivr2()
  {
  $(".square-r3").removeClass("square-r3-2");
  $(".square-r5").removeClass("square-r5-2");
};

$(".square-r11").hover(function(){
  $(".square-r11").addClass("square-r11-2");
  $(".square-r10").addClass("square-r10-2");
});
$('.bottom').bind('click', function() {
      FadeOutr3();
  });
  function FadeOutr3()
  {
      setTimeout(function () { FadeDivr3(); }, 5800);
  }
  function FadeDivr3()
  {
  $(".square-r11").removeClass("square-r11-2");
  $(".square-r10").removeClass("square-r10-2");
};

$(".square-r16").hover(function(){
  $(".square-r16").addClass("square-r16-2");
  $(".square-r17").addClass("square-r17-2");
});
$('.bottom').bind('click', function() {
      FadeOutr4();
  });
  function FadeOutr4()
  {
      setTimeout(function () { FadeDivr4(); }, 5900);
  }
  function FadeDivr4()
  {
  $(".square-r16").removeClass("square-r16-2");
  $(".square-r17").removeClass("square-r17-2");
};

$(".square-r14").hover(function(){
  $(".square-r14").addClass("square-r14-2");
  $(".square-r13").addClass("square-r13-2");
});
$('.bottom').bind('click', function() {
      FadeOutr5();
  });
  function FadeOutr5()
  {
      setTimeout(function () { FadeDivr5(); }, 6000);
  }
  function FadeDivr5()
  {
  $(".square-r14").removeClass("square-r14-2");
  $(".square-r13").removeClass("square-r13-2");
};

$(".square-r6").hover(function(){
  $(".square-r6").addClass("square-r6-2");
  $(".square-r8").addClass("square-r8-2");
});
$('.bottom').bind('click', function() {
      FadeOutr6();
  });
  function FadeOutr6()
  {
      setTimeout(function () { FadeDivr6(); }, 6100);
  }
  function FadeDivr6()
  {
  $(".square-r6").removeClass("square-r6-2");
  $(".square-r8").removeClass("square-r8-2");
};

$(".square-s1").hover(function(){
  $(".square-s1").addClass("square-s1-2");
  $(".square-s2").addClass("square-s2-2");
});
$('.bottom').bind('click', function() {
      FadeOuts1();
  });
  function FadeOuts1()
  {
      setTimeout(function () { FadeDivs1(); }, 6200);
  }
  function FadeDivs1()
  {
  $(".square-s1").removeClass("square-s1-2");
  $(".square-s2").removeClass("square-s2-2");
};

$(".square-s4").hover(function(){
  $(".square-s4").addClass("square-s4-2");
  $(".square-s5").addClass("square-s5-2");
});
$('.bottom').bind('click', function() {
      FadeOuts2();
  });
  function FadeOuts2()
  {
      setTimeout(function () { FadeDivs2(); }, 6300);
  }
  function FadeDivs2()
  {
  $(".square-s4").removeClass("square-s4-2");
  $(".square-s5").removeClass("square-s5-2");
};

$(".square-s6").hover(function(){
  $(".square-s6").addClass("square-s6-2");
  $(".square-s7").addClass("square-s7-2");
});
$('.bottom').bind('click', function() {
      FadeOuts3();
  });
  function FadeOuts3()
  {
      setTimeout(function () { FadeDivs3(); }, 6400);
  }
  function FadeDivs3()
  {
  $(".square-s6").removeClass("square-s6-2");
  $(".square-s7").removeClass("square-s7-2");
};

$(".square-s9").hover(function(){
  $(".square-s9").addClass("square-s9-2");
  $(".square-s8").addClass("square-s8-2");
});
$('.bottom').bind('click', function() {
      FadeOuts4();
  });
  function FadeOuts4()
  {
      setTimeout(function () { FadeDivs4(); }, 6500);
  }
  function FadeDivs4()
  {
  $(".square-s9").removeClass("square-s9-2");
  $(".square-s8").removeClass("square-s8-2");
};

$(".square-t2").hover(function(){
  $(".square-t2").addClass("square-t2-2");
  $(".square-t4").addClass("square-t4-2");
});
$('.bottom').bind('click', function() {
      FadeOutt1();
  });
  function FadeOutt1()
  {
      setTimeout(function () { FadeDivt1(); }, 6600);
  }
  function FadeDivt1()
  {
  $(".square-t2").removeClass("square-t2-2");
  $(".square-t4").removeClass("square-t4-2");
};

$(".square-u3").hover(function(){
  $(".square-u3").addClass("square-u3-2");
  $(".square-u1").addClass("square-u1-2");
});
$('.bottom').bind('click', function() {
      FadeOutu1();
  });
  function FadeOutu1()
  {
      setTimeout(function () { FadeDivu1(); }, 6700);
  }
  function FadeDivu1()
  {
  $(".square-u3").removeClass("square-u3-2");
  $(".square-u1").removeClass("square-u1-2");
};

$(".square-u5").hover(function(){
  $(".square-u5").addClass("square-u5-2");
  $(".square-u2").addClass("square-u2-2");
});
$('.bottom').bind('click', function() {
      FadeOutu2();
  });
  function FadeOutu2()
  {
      setTimeout(function () { FadeDivu2(); }, 6700);
  }
  function FadeDivu2()
  {
  $(".square-u5").removeClass("square-u5-2");
  $(".square-u2").removeClass("square-u2-2");
};

$(".square-v3").hover(function(){
  $(".square-v3").addClass("square-v3-2");
  $(".square-v1").addClass("square-v1-2");
});
$('.bottom').bind('click', function() {
      FadeOutv1();
  });
  function FadeOutv1()
  {
      setTimeout(function () { FadeDivv1(); }, 6800);
  }
  function FadeDivv1()
  {
  $(".square-v3").removeClass("square-v3-2");
  $(".square-v1").removeClass("square-v1-2");
};

$(".square-v9").hover(function(){
  $(".square-v9").addClass("square-v9-2");
  $(".square-v2").addClass("square-v2-2");
});
$('.bottom').bind('click', function() {
      FadeOutv2();
  });
  function FadeOutv2()
  {
      setTimeout(function () { FadeDivv2(); }, 6800);
  }
  function FadeDivv2()
  {
  $(".square-v9").removeClass("square-v9-2");
  $(".square-v2").removeClass("square-v2-2");
};

$(".square-v5").hover(function(){
  $(".square-v5").addClass("square-v5-2");
  $(".square-v6").addClass("square-v6-2");
});
$('.bottom').bind('click', function() {
      FadeOutv3();
  });
  function FadeOutv3()
  {
      setTimeout(function () { FadeDivv3(); }, 6900);
  }
  function FadeDivv3()
  {
  $(".square-v5").removeClass("square-v5-2");
  $(".square-v6").removeClass("square-v6-2");
};

$(".square-v7").hover(function(){
  $(".square-v7").addClass("square-v7-2");
  $(".square-v8").addClass("square-v8-2");
});
$('.bottom').bind('click', function() {
      FadeOutv4();
  });
  function FadeOutv4()
  {
      setTimeout(function () { FadeDivv4(); }, 6900);
  }
  function FadeDivv4()
  {
  $(".square-v7").removeClass("square-v7-2");
  $(".square-v8").removeClass("square-v8-2");
};

$(".square-w4").hover(function(){
  $(".square-w4").addClass("square-w4-2");
  $(".square-w1").addClass("square-w1-2");
});
$('.bottom').bind('click', function() {
      FadeOutw1();
  });
  function FadeOutw1()
  {
      setTimeout(function () { FadeDivw1(); }, 7000);
  }
  function FadeDivw1()
  {
  $(".square-w4").removeClass("square-w4-2");
  $(".square-w1").removeClass("square-w1-2");
};

$(".square-w6").hover(function(){
  $(".square-w6").addClass("square-w6-2");
  $(".square-w7").addClass("square-w7-2");
});
$('.bottom').bind('click', function() {
      FadeOutw2();
  });
  function FadeOutw2()
  {
      setTimeout(function () { FadeDivw2(); }, 7100);
  }
  function FadeDivw2()
  {
  $(".square-w6").removeClass("square-w6-2");
  $(".square-w7").removeClass("square-w7-2");
};

$(".square-w8").hover(function(){
  $(".square-w8").addClass("square-w8-2");
  $(".square-w3").addClass("square-w3-2");
});
$('.bottom').bind('click', function() {
      FadeOutw3();
  });
  function FadeOutw3()
  {
      setTimeout(function () { FadeDivw3(); }, 7200);
  }
  function FadeDivw3()
  {
  $(".square-w8").removeClass("square-w8-2");
  $(".square-w3").removeClass("square-w3-2");
};

$(".square-x3").hover(function(){
  $(".square-x3").addClass("square-x3-2");
  $(".square-x1").addClass("square-x1-2");
});
$('.bottom').bind('click', function() {
      FadeOutx1();
  });
  function FadeOutx1()
  {
      setTimeout(function () { FadeDivx1(); }, 7300);
  }
  function FadeDivx1()
  {
  $(".square-x3").removeClass("square-x3-2");
  $(".square-x1").removeClass("square-x1-2");
};

$(".square-x5").hover(function(){
  $(".square-x5").addClass("square-x5-2");
  $(".square-x4").addClass("square-x4-2");
});
$('.bottom').bind('click', function() {
      FadeOutx2();
  });
  function FadeOutx2()
  {
      setTimeout(function () { FadeDivx2(); }, 7500);
  }
  function FadeDivx2()
  {
  $(".square-x5").removeClass("square-x5-2");
  $(".square-x4").removeClass("square-x4-2");
};

$(".square-x10").hover(function(){
  $(".square-x10").addClass("square-x10-2");
  $(".square-x11").addClass("square-x11-2");
});
$('.bottom').bind('click', function() {
      FadeOutx3();
  });
  function FadeOutx3()
  {
      setTimeout(function () { FadeDivx3(); }, 7400);
  }
  function FadeDivx3()
  {
  $(".square-x10").removeClass("square-x10-2");
  $(".square-x11").removeClass("square-x11-2");
};

$(".square-x7").hover(function(){
  $(".square-x7").addClass("square-x7-2");
  $(".square-x6").addClass("square-x6-2");
});
$('.bottom').bind('click', function() {
      FadeOutx4();
  });
  function FadeOutx4()
  {
      setTimeout(function () { FadeDivx4(); }, 7600);
  }
  function FadeDivx4()
  {
  $(".square-x7").removeClass("square-x7-2");
  $(".square-x6").removeClass("square-x6-2");
};

$(".square-x9").hover(function(){
  $(".square-x9").addClass("square-x9-2");
  $(".square-x2").addClass("square-x2-2");
});
$('.bottom').bind('click', function() {
      FadeOutx5();
  });
  function FadeOutx5()
  {
      setTimeout(function () { FadeDivx5(); }, 7300);
  }
  function FadeDivx5()
  {
  $(".square-x9").removeClass("square-x9-2");
  $(".square-x2").removeClass("square-x2-2");
};

$(".square-x14").hover(function(){
  $(".square-x14").addClass("square-x14-2");
  $(".square-x15").addClass("square-x15-2");
});
$('.bottom').bind('click', function() {
      FadeOutx6();
  });
  function FadeOutx6()
  {
      setTimeout(function () { FadeDivx6(); }, 7400);
  }
  function FadeDivx6()
  {
  $(".square-x14").removeClass("square-x14-2");
  $(".square-x15").removeClass("square-x15-2");
};

$(".square-y3").hover(function(){
  $(".square-y3").addClass("square-y3-2");
  $(".square-y1").addClass("square-y1-2");
});
$('.bottom').bind('click', function() {
      FadeOuty1();
  });
  function FadeOuty1()
  {
      setTimeout(function () { FadeDivy1(); }, 7700);
  }
  function FadeDivy1()
  {
  $(".square-y3").removeClass("square-y3-2");
  $(".square-y1").removeClass("square-y1-2");
};

$(".square-y5").hover(function(){
  $(".square-y5").addClass("square-y5-2");
  $(".square-y8").addClass("square-y8-2");
});
$('.bottom').bind('click', function() {
      FadeOuty2();
  });
  function FadeOuty2()
  {
      setTimeout(function () { FadeDivy2(); }, 7800);
  }
  function FadeDivy2()
  {
  $(".square-y5").removeClass("square-y5-2");
  $(".square-y8").removeClass("square-y8-2");
};

$(".square-y7").hover(function(){
  $(".square-y7").addClass("square-y7-2");
  $(".square-y2").addClass("square-y2-2");
});
$('.bottom').bind('click', function() {
      FadeOuty3();
  });
  function FadeOuty3()
  {
      setTimeout(function () { FadeDivy3(); }, 7900);
  }
  function FadeDivy3()
  {
  $(".square-y7").removeClass("square-y7-2");
  $(".square-y2").removeClass("square-y2-2");
};

$(".square-z2").hover(function(){
  $(".square-z2").addClass("square-z2-2");
  $(".square-z1").addClass("square-z1-2");
});
$('.bottom').bind('click', function() {
      FadeOutz1();
  });
  function FadeOutz1()
  {
      setTimeout(function () { FadeDivz1(); }, 8000);
  }
  function FadeDivz1()
  {
  $(".square-z2").removeClass("square-z2-2");
  $(".square-z1").removeClass("square-z1-2");
};

$(".square-z12").hover(function(){
  $(".square-z12").addClass("square-z12-2");
  $(".square-z7").addClass("square-z7-2");
  $(".square-z8").addClass("square-z8-2");
  $(".square-z9").addClass("square-z9-2");
  $(".square-z10").addClass("square-z10-2");
  $(".square-z11").addClass("square-z11-2");
  $(".square-z16").addClass("square-z16-2");

});
$('.bottom').bind('click', function() {
      FadeOutz2();
  });
  function FadeOutz2()
  {
      setTimeout(function () { FadeDivz2(); }, 8100);
  }
  function FadeDivz2()
  {
  $(".square-z12").removeClass("square-z12-2");
  $(".square-z7").removeClass("square-z7-2");
  $(".square-z8").removeClass("square-z8-2");
  $(".square-z9").removeClass("square-z9-2");
  $(".square-z10").removeClass("square-z10-2");
  $(".square-z11").removeClass("square-z11-2");
  $(".square-z16").removeClass("square-z16-2");

};

$(".square-z14").hover(function(){
  $(".square-z14").addClass("square-z14-2");
  $(".square-z15").addClass("square-z15-2");
});
$('.bottom').bind('click', function() {
      FadeOutz3();
  });
  function FadeOutz3()
  {
      setTimeout(function () { FadeDivz3(); }, 8200);
  }
  function FadeDivz3()
  {
  $(".square-z14").removeClass("square-z14-2");
  $(".square-z15").removeClass("square-z15-2");
};

$(".square-z6").hover(function(){
  $(".square-z6").addClass("square-z6-2");
  $(".square-z5").addClass("square-z5-2");
});
$('.bottom').bind('click', function() {
      FadeOutz4();
  });
  function FadeOutz4()
  {
      setTimeout(function () { FadeDivz4(); }, 8300);
  }
  function FadeDivz4()
  {
  $(".square-z6").removeClass("square-z6-2");
  $(".square-z5").removeClass("square-z5-2");
};

$(".square-z4").hover(function(){
  $(".square-z4").addClass("square-z4-2");
  $(".square-z3").addClass("square-z3-2");
});
$('.bottom').bind('click', function() {
      FadeOutz5();
  });
  function FadeOutz5()
  {
      setTimeout(function () { FadeDivz5(); }, 8400);
  }
  function FadeDivz5()
  {
  $(".square-z4").removeClass("square-z4-2");
  $(".square-z3").removeClass("square-z3-2");
};

$(".square-01").hover(function(){
  $(".square-01").addClass("square-01-2");
  $(".square-02").addClass("square-02-2");
});
$('.bottom').bind('click', function() {
      FadeOut01();
  });
  function FadeOut01()
  {
      setTimeout(function () { FadeDiv01(); }, 8500);
  }
  function FadeDiv01()
  {
  $(".square-01").removeClass("square-01-2");
  $(".square-02").removeClass("square-02-2");
};

$(".square-06").hover(function(){
  $(".square-06").addClass("square-06-2");
  $(".square-04").addClass("square-04-2");
});
$('.bottom').bind('click', function() {
      FadeOut02();
  });
  function FadeOut02()
  {
      setTimeout(function () { FadeDiv02(); }, 8500);
  }
  function FadeDiv02()
  {
  $(".square-06").removeClass("square-06-2");
  $(".square-04").removeClass("square-04-2");
};

$(".square-015").hover(function(){
  $(".square-015").addClass("square-015-2");
  $(".square-08").addClass("square-08-2");
});
$('.bottom').bind('click', function() {
      FadeOut03();
  });
  function FadeOut03()
  {
      setTimeout(function () { FadeDiv03(); }, 8600);
  }
  function FadeDiv03()
  {
  $(".square-015").removeClass("square-015-2");
  $(".square-08").removeClass("square-08-2");
};

$(".square-010").hover(function(){
  $(".square-010").addClass("square-010-2");
  $(".square-013").addClass("square-013-2");
});
$('.bottom').bind('click', function() {
      FadeOut04();
  });
  function FadeOut04()
  {
      setTimeout(function () { FadeDiv04(); }, 8600);
  }
  function FadeDiv04()
  {
  $(".square-010").removeClass("square-010-2");
  $(".square-013").removeClass("square-013-2");
};

$(".square-012").hover(function(){
  $(".square-011").addClass("square-011-2");
  $(".square-012").addClass("square-012-2");
});
$('.bottom').bind('click', function() {
      FadeOut07();
  });
  function FadeOut07()
  {
      setTimeout(function () { FadeDiv07(); }, 8800);
  }
  function FadeDiv07()
  {
  $(".square-011").removeClass("square-011-2");
  $(".square-012").removeClass("square-012-2");
};

$(".square-016").hover(function(){
  $(".square-016").addClass("square-016-2");
  $(".square-014").addClass("square-014-2");
});
$('.bottom').bind('click', function() {
      FadeOut08();
  });
  function FadeOut08()
  {
      setTimeout(function () { FadeDiv08(); }, 8800);
  }
  function FadeDiv08()
  {
  $(".square-016").removeClass("square-016-2");
  $(".square-014").removeClass("square-014-2");
};

$(".square-07").hover(function(){
  $(".square-07").addClass("square-07-2");
  $(".square-09").addClass("square-09-2");
});
$('.bottom').bind('click', function() {
      FadeOut05();
  });
  function FadeOut05()
  {
      setTimeout(function () { FadeDiv05(); }, 8700);
  }
  function FadeDiv05()
  {
  $(".square-07").removeClass("square-07-2");
  $(".square-09").removeClass("square-09-2");
};

$(".square-03").hover(function(){
  $(".square-03").addClass("square-03-2");
  $(".square-05").addClass("square-05-2");
});
$('.bottom').bind('click', function() {
      FadeOut06();
  });
  function FadeOut06()
  {
      setTimeout(function () { FadeDiv06(); }, 8700);
  }
  function FadeDiv06()
  {
  $(".square-03").removeClass("square-03-2");
  $(".square-05").removeClass("square-05-2");
};

$(".square-one1").hover(function(){
  $(".square-one1").addClass("square-one1-2");
  $(".square-one3").addClass("square-one3-2");
});
$('.bottom').bind('click', function() {
      FadeOutone1();
  });
  function FadeOutone1()
  {
      setTimeout(function () { FadeDivone1(); }, 8900);
  }
  function FadeDivone1()
  {
  $(".square-one1").removeClass("square-one1-2");
  $(".square-one3").removeClass("square-one3-2");
};

$(".square-one2").hover(function(){
  $(".square-one2").addClass("square-one2-2");
  $(".square-one4").addClass("square-one4-2");
});
$('.bottom').bind('click', function() {
      FadeOutone2();
  });
  function FadeOutone2()
  {
      setTimeout(function () { FadeDivone2(); }, 9000);
  }
  function FadeDivone2()
  {
  $(".square-one2").removeClass("square-one2-2");
  $(".square-one4").removeClass("square-one4-2");
};

$(".square-one5").hover(function(){
  $(".square-one5").addClass("square-one5-2");
  $(".square-one7").addClass("square-one7-2");
});
$('.bottom').bind('click', function() {
      FadeOutone3();
  });
  function FadeOutone3()
  {
      setTimeout(function () { FadeDivone3(); }, 9100);
  }
  function FadeDivone3()
  {
  $(".square-one5").removeClass("square-one5-2");
  $(".square-one7").removeClass("square-one7-2");
};


$(".square-two2").hover(function(){
  $(".square-two2").addClass("square-two2-2");
  $(".square-two1").addClass("square-two1-2");
});
$('.bottom').bind('click', function() {
      FadeOuttwo1();
  });
  function FadeOuttwo1()
  {
      setTimeout(function () { FadeDivtwo1(); }, 9200);
  }
  function FadeDivtwo1()
  {
  $(".square-two2").removeClass("square-two2-2");
  $(".square-two1").removeClass("square-two1-2");
};

$(".square-two4").hover(function(){
  $(".square-two4").addClass("square-two4-2");
  $(".square-two3").addClass("square-two3-2");
});
$('.bottom').bind('click', function() {
      FadeOuttwo2();
  });
  function FadeOuttwo2()
  {
      setTimeout(function () { FadeDivtwo2(); }, 9300);
  }
  function FadeDivtwo2()
  {
  $(".square-two4").removeClass("square-two4-2");
  $(".square-two3").removeClass("square-two3-2");
};

$(".square-two6").hover(function(){
  $(".square-two6").addClass("square-two6-2");
  $(".square-two5").addClass("square-two5-2");
});
$('.bottom').bind('click', function() {
      FadeOuttwo3();
  });
  function FadeOuttwo3()
  {
      setTimeout(function () { FadeDivtwo3(); }, 9400);
  }
  function FadeDivtwo3()
  {
  $(".square-two6").removeClass("square-two6-2");
  $(".square-two5").removeClass("square-two5-2");
};

$(".square-two8").hover(function(){
  $(".square-two8").addClass("square-two8-2");
  $(".square-two7").addClass("square-two7-2");
});
$('.bottom').bind('click', function() {
      FadeOuttwo4();
  });
  function FadeOuttwo4()
  {
      setTimeout(function () { FadeDivtwo4(); }, 9500);
  }
  function FadeDivtwo4()
  {
  $(".square-two8").removeClass("square-two8-2");
  $(".square-two7").removeClass("square-two7-2");
};

$(".square-two10").hover(function(){
  $(".square-two10").addClass("square-two10-2");
  $(".square-two11").addClass("square-two11-2");
});
$('.bottom').bind('click', function() {
      FadeOuttwo5();
  });
  function FadeOuttwo5()
  {
      setTimeout(function () { FadeDivtwo5(); }, 9600);
  }
  function FadeDivtwo5()
  {
  $(".square-two10").removeClass("square-two10-2");
  $(".square-two11").removeClass("square-two11-2");
};

$(".square-three2").hover(function(){
  $(".square-three2").addClass("square-three2-2");
  $(".square-three1").addClass("square-three1-2");
});
$('.bottom').bind('click', function() {
      FadeOutthree1();
  });
  function FadeOutthree1()
  {
      setTimeout(function () { FadeDivthree1(); }, 9700);
  }
  function FadeDivthree1()
  {
  $(".square-three2").removeClass("square-three2-2");
  $(".square-three1").removeClass("square-three1-2");
};

$(".square-three4").hover(function(){
  $(".square-three4").addClass("square-three4-2");
  $(".square-three3").addClass("square-three3-2");
});
$('.bottom').bind('click', function() {
      FadeOutthree2();
  });
  function FadeOutthree2()
  {
      setTimeout(function () { FadeDivthree2(); }, 9800);
  }
  function FadeDivthree2()
  {
  $(".square-three4").removeClass("square-three4-2");
  $(".square-three3").removeClass("square-three3-2");
};

$(".square-three10").hover(function(){
  $(".square-three10").addClass("square-three10-2");
  $(".square-three9").addClass("square-three9-2");
});
$('.bottom').bind('click', function() {
      FadeOutthree3();
  });
  function FadeOutthree3()
  {
      setTimeout(function () { FadeDivthree3(); }, 9900);
  }
  function FadeDivthree3()
  {
  $(".square-three10").removeClass("square-three10-2");
  $(".square-three9").removeClass("square-three9-2");
};

$(".square-three7").hover(function(){
  $(".square-three7").addClass("square-three7-2");
  $(".square-three8").addClass("square-three8-2");
});
$('.bottom').bind('click', function() {
      FadeOutthree4();
  });
  function FadeOutthree4()
  {
      setTimeout(function () { FadeDivthree4(); }, 10000);
  }
  function FadeDivthree4()
  {
  $(".square-three7").removeClass("square-three7-2");
  $(".square-three8").removeClass("square-three8-2");
};

$(".square-four1").hover(function(){
  $(".square-four1").addClass("square-four1-2");
  $(".square-four3").addClass("square-four3-2");
  $(".square-four4").addClass("square-four4-2");
  $(".square-four5").addClass("square-four5-2");

});
$('.bottom').bind('click', function() {
      FadeOutfour1();
  });
  function FadeOutfour1()
  {
      setTimeout(function () { FadeDivtfour1(); }, 10100);
  }
  function FadeDivtfour1()
  {
  $(".square-four1").removeClass("square-four1-2");
  $(".square-four3").removeClass("square-four3-2");
  $(".square-four4").removeClass("square-four4-2");
  $(".square-four5").removeClass("square-four5-2");

};

$(".square-four2").hover(function(){
  $(".square-four2").addClass("square-four2-2");
  $(".square-four9").addClass("square-four9-2");
});
$('.bottom').bind('click', function() {
      FadeOutfour2();
  });
  function FadeOutfour2()
  {
      setTimeout(function () { FadeDivtfour2(); }, 10200);
  }
  function FadeDivtfour2()
  {
  $(".square-four2").removeClass("square-four2-2");
  $(".square-four9").removeClass("square-four9-2");
};

$(".square-four7").hover(function(){
  $(".square-four7").addClass("square-four7-2");
  $(".square-four8").addClass("square-four8-2");
});
$('.bottom').bind('click', function() {
      FadeOutfour3();
  });
  function FadeOutfour3()
  {
      setTimeout(function () { FadeDivtfour3(); }, 10300);
  }
  function FadeDivtfour3()
  {
  $(".square-four7").removeClass("square-four7-2");
  $(".square-four8").removeClass("square-four8-2");
};

$(".square-four10").hover(function(){
  $(".square-four10").addClass("square-four10-2");
  $(".square-four11").addClass("square-four11-2");
});
$('.bottom').bind('click', function() {
      FadeOutfour4();
  });
  function FadeOutfour4()
  {
      setTimeout(function () { FadeDivtfour4(); }, 10400);
  }
  function FadeDivtfour4()
  {
  $(".square-four10").removeClass("square-four10-2");
  $(".square-four11").removeClass("square-four11-2");
};

$(".square-five2").hover(function(){
  $(".square-five2").addClass("square-five2-2");
  $(".square-five1").addClass("square-five1-2");
});
$('.bottom').bind('click', function() {
      FadeOutfive1();
  });
  function FadeOutfive1()
  {
      setTimeout(function () { FadeDivtfive1(); }, 10500);
  }
  function FadeDivtfive1()
  {
  $(".square-five2").removeClass("square-five2-2");
  $(".square-five1").removeClass("square-five1-2");
};

$(".square-five4").hover(function(){
  $(".square-five4").addClass("square-five4-2");
  $(".square-five5").addClass("square-five5-2");
});
$('.bottom').bind('click', function() {
      FadeOutfive2();
  });
  function FadeOutfive2()
  {
      setTimeout(function () { FadeDivtfive2(); }, 10600);
  }
  function FadeDivtfive2()
  {
  $(".square-five4").removeClass("square-five4-2");
  $(".square-five5").removeClass("square-five5-2");
};

$(".square-five6").hover(function(){
  $(".square-five6").addClass("square-five6-2");
  $(".square-five7").addClass("square-five7-2");
});
$('.bottom').bind('click', function() {
      FadeOutfive3();
  });
  function FadeOutfive3()
  {
      setTimeout(function () { FadeDivtfive3(); }, 10700);
  }
  function FadeDivtfive3()
  {
  $(".square-five6").removeClass("square-five6-2");
  $(".square-five7").removeClass("square-five7-2");
};

$(".square-five8").hover(function(){
  $(".square-five8").addClass("square-five8-2");
  $(".square-five9").addClass("square-five9-2");
});
$('.bottom').bind('click', function() {
      FadeOutfive4();
  });
  function FadeOutfive4()
  {
      setTimeout(function () { FadeDivtfive4(); }, 10800);
  }
  function FadeDivtfive4()
  {
  $(".square-five8").removeClass("square-five8-2");
  $(".square-five9").removeClass("square-five9-2");
};

$(".square-five10").hover(function(){
  $(".square-five10").addClass("square-five10-2");
  $(".square-five11").addClass("square-five11-2");
});
$('.bottom').bind('click', function() {
      FadeOutfive5();
  });
  function FadeOutfive5()
  {
      setTimeout(function () { FadeDivtfive5(); }, 10900);
  }
  function FadeDivtfive5()
  {
  $(".square-five10").removeClass("square-five10-2");
  $(".square-five11").removeClass("square-five11-2");
};

$(".square-six2").hover(function(){
  $(".square-six1").addClass("square-six1-2");
  $(".square-six2").addClass("square-six2-2");
});
$('.bottom').bind('click', function() {
      FadeOutsix1();
  });
  function FadeOutsix1()
  {
      setTimeout(function () { FadeDivtsix1(); }, 11000);
  }
  function FadeDivtsix1()
  {
  $(".square-six1").removeClass("square-six1-2");
  $(".square-six2").removeClass("square-six2-2");
};

$(".square-six6").hover(function(){
  $(".square-six6").addClass("square-six6-2");
  $(".square-six5").addClass("square-six5-2");
});
$('.bottom').bind('click', function() {
      FadeOutsix2();
  });
  function FadeOutsix2()
  {
      setTimeout(function () { FadeDivtsix2(); }, 11100);
  }
  function FadeDivtsix2()
  {
  $(".square-six6").removeClass("square-six6-2");
  $(".square-six5").removeClass("square-six5-2");
};

$(".square-six4").hover(function(){
  $(".square-six4").addClass("square-six4-2");
  $(".square-six11").addClass("square-six11-2");
});
$('.bottom').bind('click', function() {
      FadeOutsix3();
  });
  function FadeOutsix3()
  {
      setTimeout(function () { FadeDivtsix3(); }, 11200);
  }
  function FadeDivtsix3()
  {
  $(".square-six4").removeClass("square-six4-2");
  $(".square-six11").removeClass("square-six11-2");
};

$(".square-six10").hover(function(){
  $(".square-six10").addClass("square-six10-2");
  $(".square-six9").addClass("square-six9-2");
});
$('.bottom').bind('click', function() {
      FadeOutsix4();
  });
  function FadeOutsix4()
  {
      setTimeout(function () { FadeDivtsix4(); }, 11300);
  }
  function FadeDivtsix4()
  {
  $(".square-six10").removeClass("square-six10-2");
  $(".square-six9").removeClass("square-six9-2");
};

$(".square-six8").hover(function(){
  $(".square-six8").addClass("square-six8-2");
  $(".square-six7").addClass("square-six7-2");
});
$('.bottom').bind('click', function() {
      FadeOutsix5();
  });
  function FadeOutsix5()
  {
      setTimeout(function () { FadeDivtsix5(); }, 11400);
  }
  function FadeDivtsix5()
  {
  $(".square-six8").removeClass("square-six8-2");
  $(".square-six7").removeClass("square-six7-2");
};

$(".square-seven2").hover(function(){
  $(".square-seven2").addClass("square-seven2-2");
  $(".square-seven3").addClass("square-seven3-2");
});
$('.bottom').bind('click', function() {
      FadeOutseven1();
  });
  function FadeOutseven1()
  {
      setTimeout(function () { FadeDivtseven1(); }, 11500);
  }
  function FadeDivtseven1()
  {
  $(".square-seven2").removeClass("square-seven2-2");
  $(".square-seven3").removeClass("square-seven3-2");
};
$(".square-seven6").hover(function(){
  $(".square-seven6").addClass("square-seven6-2");
  $(".square-seven1").addClass("square-seven1-2");
});
$('.bottom').bind('click', function() {
      FadeOutseven2();
  });
  function FadeOutseven2()
  {
      setTimeout(function () { FadeDivtseven2(); }, 11600);
  }
  function FadeDivtseven2()
  {
  $(".square-seven6").removeClass("square-seven6-2");
  $(".square-seven1").removeClass("square-seven1-2");
};

$(".square-seven4").hover(function(){
  $(".square-seven4").addClass("square-seven4-2");
  $(".square-seven9").addClass("square-seven9-2");
});
$('.bottom').bind('click', function() {
      FadeOutseven3();
  });
  function FadeOutseven3()
  {
      setTimeout(function () { FadeDivtseven3(); }, 11700);
  }
  function FadeDivtseven3()
  {
  $(".square-seven4").removeClass("square-seven4-2");
  $(".square-seven9").removeClass("square-seven9-2");
};

$(".square-seven8").hover(function(){
  $(".square-seven8").addClass("square-seven8-2");
  $(".square-seven5").addClass("square-seven5-2");
});
$('.bottom').bind('click', function() {
      FadeOutseven4();
  });
  function FadeOutseven4()
  {
      setTimeout(function () { FadeDivtseven4(); }, 11800);
  }
  function FadeDivtseven4()
  {
  $(".square-seven8").removeClass("square-seven8-2");
  $(".square-seven5").removeClass("square-seven5-2");
};

$(".square-eight2").hover(function(){
  $(".square-eight2").addClass("square-eight2-2");
  $(".square-eight3").addClass("square-eight3-2");
});
$('.bottom').bind('click', function() {
      FadeOuteight1();
  });
  function FadeOuteight1()
  {
      setTimeout(function () { FadeDivteight1(); }, 11900);
  }
  function FadeDivteight1()
  {
  $(".square-eight2").removeClass("square-eight2-2");
  $(".square-eight3").removeClass("square-eight3-2");
};

$(".square-eight12").hover(function(){
  $(".square-eight12").addClass("square-eight12-2");
  $(".square-eight13").addClass("square-eight13-2");
});
$('.bottom').bind('click', function() {
      FadeOuteight2();
  });
  function FadeOuteight2()
  {
      setTimeout(function () { FadeDivteight2(); }, 12000);
  }
  function FadeDivteight2()
  {
  $(".square-eight12").removeClass("square-eight12-2");
  $(".square-eight13").removeClass("square-eight13-2");
};

$(".square-eight4").hover(function(){
  $(".square-eight4").addClass("square-eight4-2");
  $(".square-eight5").addClass("square-eight5-2");
});
$('.bottom').bind('click', function() {
      FadeOuteight3();
  });
  function FadeOuteight3()
  {
      setTimeout(function () { FadeDivteight3(); }, 12100);
  }
  function FadeDivteight3()
  {
  $(".square-eight4").removeClass("square-eight4-2");
  $(".square-eight5").removeClass("square-eight5-2");
};

$(".square-eight10").hover(function(){
  $(".square-eight10").addClass("square-eight10-2");
  $(".square-eight11").addClass("square-eight11-2");
});
$('.bottom').bind('click', function() {
      FadeOuteight4();
  });
  function FadeOuteight4()
  {
      setTimeout(function () { FadeDivteight4(); }, 12200);
  }
  function FadeDivteight4()
  {
  $(".square-eight10").removeClass("square-eight10-2");
  $(".square-eight11").removeClass("square-eight11-2");
};

$(".square-eight8").hover(function(){
  $(".square-eight8").addClass("square-eight8-2");
  $(".square-eight9").addClass("square-eight9-2");
});
$('.bottom').bind('click', function() {
      FadeOuteight5();
  });
  function FadeOuteight5()
  {
      setTimeout(function () { FadeDivteight5(); }, 12300);
  }
  function FadeDivteight5()
  {
  $(".square-eight8").removeClass("square-eight8-2");
  $(".square-eight9").removeClass("square-eight9-2");
};

$(".square-eight6").hover(function(){
  $(".square-eight6").addClass("square-eight6-2");
  $(".square-eight7").addClass("square-eight7-2");
});
$('.bottom').bind('click', function() {
      FadeOuteight6();
  });
  function FadeOuteight6()
  {
      setTimeout(function () { FadeDivteight6(); }, 12400);
  }
  function FadeDivteight6()
  {
  $(".square-eight6").removeClass("square-eight6-2");
  $(".square-eight7").removeClass("square-eight7-2");
};

$(".square-nine2").hover(function(){
  $(".square-nine2").addClass("square-nine2-2");
  $(".square-nine1").addClass("square-nine1-2");
});
$('.bottom').bind('click', function() {
      FadeOutnine1();
  });
  function FadeOutnine1()
  {
      setTimeout(function () { FadeDivtnine1(); }, 12500);
  }
  function FadeDivtnine1()
  {
  $(".square-nine2").removeClass("square-nine2-2");
  $(".square-nine1").removeClass("square-nine1-2");
};

$(".square-nine4").hover(function(){
  $(".square-nine4").addClass("square-nine4-2");
  $(".square-nine3").addClass("square-nine3-2");
});
$('.bottom').bind('click', function() {
      FadeOutnine2();
  });
  function FadeOutnine2()
  {
      setTimeout(function () { FadeDivtnine2(); }, 12600);
  }
  function FadeDivtnine2()
  {
  $(".square-nine4").removeClass("square-nine4-2");
  $(".square-nine3").removeClass("square-nine3-2");
};
$(".square-nine6").hover(function(){
  $(".square-nine6").addClass("square-nine6-2");
  $(".square-nine5").addClass("square-nine5-2");
});
$('.bottom').bind('click', function() {
      FadeOutnine3();
  });
  function FadeOutnine3()
  {
      setTimeout(function () { FadeDivtnine3(); }, 12700);
  }
  function FadeDivtnine3()
  {
  $(".square-nine6").removeClass("square-nine6-2");
  $(".square-nine5").removeClass("square-nine5-2");
};

$(".square-nine8").hover(function(){
  $(".square-nine8").addClass("square-nine8-2");
  $(".square-nine7").addClass("square-nine7-2");
});
$('.bottom').bind('click', function() {
      FadeOutnine4();
  });
  function FadeOutnine4()
  {
      setTimeout(function () { FadeDivtnine4(); }, 12800);
  }
  function FadeDivtnine4()
  {
  $(".square-nine8").removeClass("square-nine8-2");
  $(".square-nine7").removeClass("square-nine7-2");
};

$(".square-nine10").hover(function(){
  $(".square-nine10").addClass("square-nine10-2");
  $(".square-nine9").addClass("square-nine9-2");
});
$('.bottom').bind('click', function() {
      FadeOutnine5();
  });
  function FadeOutnine5()
  {
      setTimeout(function () { FadeDivtnine5(); }, 12900);
  }
  function FadeDivtnine5()
  {
  $(".square-nine10").removeClass("square-nine10-2");
  $(".square-nine9").removeClass("square-nine9-2");
};

$(".square-nine12").hover(function(){
  $(".square-nine12").addClass("square-nine12-2");
  $(".square-nine13").addClass("square-nine13-2");
});
$('.bottom').bind('click', function() {
      FadeOutnine6();
  });
  function FadeOutnine6()
  {
      setTimeout(function () { FadeDivtnine6(); }, 13000);
  }
  function FadeDivtnine6()
  {
  $(".square-nine12").removeClass("square-nine12-2");
  $(".square-nine13").removeClass("square-nine13-2");
};
});
