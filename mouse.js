$(document).on("mousemove", function(e){
  
  var mx= e.originalEvent.pageX;
  var my= e.originalEvent.pageY;
  
  $("img.mouse").each(function(){
    
    var imgX= $(this).position().left + 25;
    var imgY= $(this).position().top + 25;
    
    var diffX= mx-imgX;
    var diffY= my-imgY;
    
    var rad= Math.atan2(diffY, diffX);
    var angle = (rad * 180)/Math.PI;
    
    $(this).css("transform", "rotate("+angle+"deg)");
  })
  
})


var count= 0;
var images= ["https://cdn.glitch.com/5c00dbf5-8a65-49b9-8cb8-bec934e5ff5f%2Fmousepointer%20(1).svg?v=1607169921064",
          "https://cdn.glitch.com/5c00dbf5-8a65-49b9-8cb8-bec934e5ff5f%2Fwhite%20(1).svg?v=1607169920759",
          "https://cdn.glitch.com/5c00dbf5-8a65-49b9-8cb8-bec934e5ff5f%2Ftransparent%20(1).svg?v=1607169921006",
          "https://cdn.glitch.com/5c00dbf5-8a65-49b9-8cb8-bec934e5ff5f%2Fhand.svg?v=1607167766352"]

setInterval(function(){
  
  count= (count+1) % images.length;
  var img= images[count];
 
  $("img.mouse").attr("src", img);
  
}, 3000)