var r = 255;
var g = 0;
function checkAlliance(){
  $( ".alliance" ).each(function() {
    if($(this).text().toLowerCase() == "blue" || $(this).text().toLowerCase() == "b"){
      $(this).css('color','blue');
    }else if($(this).text().toLowerCase() == "red" || $(this).text().toLowerCase() == "r"){
      $(this).css('color','red');
    }
  });
}

function checkStats(){
  $( ".stats" ).each(function( i ) {
    if($(this).text().toLowerCase() =="w" || $(this).text().toLowerCase() == "win" || $(this).text().toLowerCase() == "dub"){
      $(this).css('color','ghostwhite');
      $(this).css('background-color','#2ECC40');
    }else{
      $(this).css('color','ghostwhite');
      $(this).css('background-color','#FF4136');
    }
  })
}

function checkScore(){
  $( '.score' ).each(function(){
    if($(this).text() < 100){
      $(this).css('color','ghostwhite');
      $(this).css('background-color','#FF4136');
    }else{
      $(this).css('color','ghostwhite');
      $(this).css('background-color','#2ECC40');
    }
  })

};
// function checkRank(){
//   $( '.rank' ).each(function(){
//     if($(this).text() <= 10){
//       $(this).css('color','ghostwhite');
//       $(this).css('background-color','#daa520');
//     }else if($(this).text() <= 30){
//       $(this).css('color','black');
//       $(this).css('background-color','#c0c0c0');
//     }else{
//       $(this).css('color','ghostwhite');
//       $(this).css('background-color','#cd7f32');
//     }
//   })
// };
function checkAllColors(){
  checkAlliance();
  checkStats();
  // checkRank();
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
