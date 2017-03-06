function checkAlliance(){
  $( ".alliance" ).each(function( i ) {

  // if($(this).text()=='Blue' || ){
  //   $(this).css('color','blue');
  // }else{
  //   $(this).css('color','red');
  // }
  switch($(this).text()){
    case "Blue":
    case "blue":
    case "b":
    case "B":
    $(this).css('color','#304ffe');
    break;
    case "Red":
    case "red":
    case "r":
    case "R":
    $(this).css('color','#F44336');
    break;

  }
});
}

function checkStats(){
  $( ".stats" ).each(function( i ) {
    if($(this).text().toLowerCase() =="w" || $(this).text().toLowerCase() == "win"){
      $(this).css('color','ghostwhite');
      $(this).css('background-color','#689f38');
    }else{
      $(this).css('color','ghostwhite');
      $(this).css('background-color','#F44336');
    }
  })
}
var r = 255;
var g = 0;
function checkScore(){
  $( '.score' ).each(function(){
    if($(this).text() < 100){
      $(this).css('color','ghostwhite');
      $(this).css('background-color','#F44336');
    }else {
      $(this).css('color','ghostwhite');
      $(this).css('background-color','#689f38');
    }
  })

};
function checkRank(){
  $( '.rank' ).each(function(){
    if($(this).text() <= 10){
      $(this).css('color','ghostwhite');
      $(this).css('background-color','#daa520');
    }else if($(this).text() <= 30){
      $(this).css('color','black');
      $(this).css('background-color','#c0c0c0');
    }else{
      $(this).css('color','ghostwhite');
      $(this).css('background-color','#cd7f32');
    }
  })
};
function checkAllColors(){
  checkAlliance();
  checkStats();
  checkRank();
  checkScore();
}
$( document ).ready(function(){
  checkAllColors();
  var contents = $('.alliance').html();
  $(".alliance").on( 'click', function(){
    checkAllColors();
  });
  $(".alliance").on('keydown', function(e) {
      if(e.keyCode == 13){
        checkAllColors();
          e.preventDefault();
      }
  });
  //.stats handlers
  $(".stats").on('keydown', function(e) {
      if(e.keyCode == 13){
        checkAllColors();
          e.preventDefault();
      }
  });
  $(".stats").on('click', function(e) {
        checkAllColors();
  });
  $(".score").on('click', function(e) {
        checkAllColors();
  });
  $(".rank").on('click', function(e) {
        checkAllColors();
  });
  $(".rank").on('keydown', function(e) {
      if(e.keyCode == 13){
        checkAllColors();
          e.preventDefault();
      }
  });
  $(".stats").on('keydown', function(e) {
      if(e.keyCode == 13){
        checkAllColors();
          e.preventDefault();
      }
  });
  $(".score").on('keydown', function(e) {
      if(e.keyCode == 13){
        checkAllColors();
          e.preventDefault();
      }
  });
});
