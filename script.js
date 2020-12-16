//Jquery for the document
$(document).ready(function(){
  
  //When mouse moves over button
  $(".btn").hover(function(){
    $(this).css({"background-color":"#1D3557", "font-size":"20px","color":"black"});
    $(this).text("Submit");
    }, function(){
    $(this).css({"background-color":"#E63946", "font-size":"16px", "color":"white"});
    $(this).text("Send");
  });
  
  //When input field is in focus and loses focus
  $("input").on({
  focus: function(){
    $(this).css({"font-size":"20px", "box-shadow": "5px 10px 8px 10px #1D3557","padding":"15px"})
  },
  blur: function(){
    $(this).css({"font-size":"16px", "box-shadow":"none", "padding":"10px"})
  }
});
  
  //When textarea is in focus and loses focus
  $("textarea").on({
  focus: function(){
    $(this).css({"font-size":"20px", "box-shadow": "5px 10px 8px 10px #1D3557"})
    $(".btn").css({"font-size":"20px"})
  },
  blur: function(){
    $(this).css({"font-size":"initial", "box-shadow":"none"})
    $(".btn").css({"font-size":"initial"})
  }
});

});
