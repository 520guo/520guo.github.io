
// <!--绉诲姩绔増鏈吋瀹� -->
   var phoneWidth =  parseInt(window.screen.width);
   var phoneScale = phoneWidth/640;
   var ua = navigator.userAgent;
   if (/Android (\d+\.\d+)/.test(ua)){
             var version = parseFloat(RegExp.$1);
   if(version>2.3){
       document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
             }else{
      document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
             }
   } else {
      document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
   }

$(function(){
   // 鍥剧墖棰勫姞杞�
    var speed=0;
    function preloadimages(arr){
    var newimages=[], loadedimages=0
    var arr=(typeof arr!="object")? [arr] : arr
    function imageloadpost(){
        loadedimages++;
        speed=parseInt(loadedimages/arr.length*100);
        $('.loading p').text(speed+'% loading...');
        $('.line_c .line').css('left',-(100-speed)+'%');
        if (loadedimages==arr.length){
            $('.loading').hide();
            
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
        newimages[i].onload=function(){
            imageloadpost();
        }
        newimages[i].onerror=function(){01
        imageloadpost()
        }
      }
    }
    var imagesarray=['img/bg_1.jpg','img/bg_2.jpg','img/bg_3.jpg','img/bg_4.jpg','img/bg_5.jpg','img/bg_6.jpg','img/bg_7.jpg','img/kuang1.png','img/kuang2.png','img/kuang3.png','img/logo.png','img/p1_1.png','img/p1_2.png','img/p1_3.png','img/p2_1.png','img/p2_2.png','img/p2_3.png','img/p3_1.png','img/p3_2.png','img/p3_3.png','img/p3_4.png','img/p3_5.png','img/p4_1.png','img/p4_2.png','img/p4_3.png','img/p5_1.png','img/p5_2.png','img/p6_1.png','img/p6_2.png','img/p7_1.png','img/p7_2.png','img/p7_3.png'];
    preloadimages(imagesarray);

   // <!-- 鑷€傚簲灞忓箷 -->
   wHeight=$(window).height();
        if(wHeight<832){
            wHeight=832;
            }
        $('.page').height(wHeight).css('background-position','center '+(wHeight-1136)/2+'px');
        $('.h832').css('padding-top',(wHeight-832)/2+'px');

})
