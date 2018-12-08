var i = 0;
var txt = 'Want to play? y/n'; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */

//This function is attributed to W3 Schools!//
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("question").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var input = $('#play').val();
$(document).ready(function(){ //when document is ready, function will be executed.
    $(document).keypress(function(key){
        if (key.which == 13 || key.which == '13'){
            if (input == "yes" || input == "y"){
                window.location('game.html'); 
            }
        }        
    })
})

