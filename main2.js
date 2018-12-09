var rooms = {
    "room1": "You strut to the south side of the kingdom and, wedging your feet on bulging bricks, \
     you are able to climb to the peak of the wall. \
     You must quickly climb down to avoid being seen by the kingdom guards.",
     "con0": "climb", 
     "con1": "look", 
     "room2": "You strut to the south side of the kingdom and, wedging your feet on bulging bricks, \
      you are able to climb to the peak of the wall. You must quickly climb down to avoid being seen \
       by the kingdom guards.", 
    "room3": "You strut to the west, east, and south side of the kingdom,\
     running your hand along the piney jutting stones in hope of finding a passageway or breach \
     in the wall that smugglers and other thieves use to enter to Nation of the Blues unnoticed.\
      However, the vines and thickets grow strong and thick and gaunt thorny branches are strewn\
       across the wall, making it that more difficult, in the pitch darkness, to find a crack in \
       kingdom walls to climb through. You are now on the south side of the kingdom and you’re only\
        real option is to climb the walls."

    /*if option 1 is chosen, w increases by 2, if option 2 is chosen, w increases by 1*/
}

$(document).ready(function(){ //when document is ready, function will be executed.
    var j = 0; 
    var h = 1; 
    var w = 0; 
    $(document).keypress(function(key){
        var input1 = $('#userinput').val();
        if (key.which == 13){
            if (input1.includes(rooms["con" + j])){ 
                var i = 0;
                w = w + 1; 
                var txt = (rooms["room" + w]); /* The text */
                var speed = 30; /* The speed/duration of the effect in milliseconds */

                //This function is attributed to W3 Schools!//
                function typeWriter() {
                    if (i < txt.length) {
                    document.getElementById("game-text").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                    }
                }
            }
            else if (input1.includes(["con" + h])){ 
                    var i = 0;
                    w = w + 2;
                    var txt = rooms["room" + w]; /* The text */
                    var speed = 30; /* The speed/duration of the effect in milliseconds */
    
                    //This function is attributed to W3 Schools!//
                    function typeWriter() {
                        if (i < txt.length) {
                        document.getElementById("game-text").innerHTML += txt.charAt(i);
                        i++;
                        setTimeout(typeWriter, speed);
                        }
                    }
            }

            typeWriter.call(); 
            j = j + 1; 
            h = h + 1; 
        }
    })
    })