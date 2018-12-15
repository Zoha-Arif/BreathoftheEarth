var rooms = {
    "con1": "climb", 
    "con2": "look", 
    "room1": "You strut to the south side of the kingdom and, wedging your feet on bulging bricks, \
     you are able to climb to the peak of the wall. \
     You must quickly climb down to avoid being seen by the kingdom guards.",
     "room2": "You strut to the west, east, and south side of the kingdom, \
     running your hand along the piney jutting stones in hope of finding a passageway \
    or breach in the wall that smugglers and other thieves use to enter to Nation of \
    the Blues unnoticed. However, the vines and thickets grow strong and thick and gaunt \
       thorny branches are strewn across the wall, making it that more difficult, in the pitch darkness,\
        to find a crack in kingdom walls to climb through. You are now on the south side of the kingdom and \
        you’re only real option is to climb the walls.", 
    "con3": "climb",
    "con4": "run", 
    "room3": "You land in the sand of the floor of the Kingdom with a thud. \
    You landed in the storage sect of the kingdom, where crates of silver, gold, and blueberries \
     -- the cash crop of the Blue Kingdom -- are stacked into pyramids all around you. \
     Dust rises around you from your fall and when you finally adjust to the scenery, \
     you hear heavy footsteps, the whispers of metal, and the faintest of breath, assumably, \
     a Kingdom guard, approaching your location. You have two options: you can hide inside a \
     crate or confront the guard.",
     "room4": "You open a massive crate of blueberries and are able to fit your entire body and the lid safely back on.\ 
     As you lay silently, you hear the sound of the foot steps approach your crate. \
     Suddenly, you feel that the crate you are in is lifted briefly and placed down roughly  upon another platform. \
     You can hear the wood of other crates stack next to you and on top of you. Then, someone pulls all the crates away.\
      The crates placed besides you close up all tunnels that air, making the environment suffocating and difficult to \
      breathe in and the weight of the crates above you cause the lid of your crate to sink in and weaken.\
      You can lie quietly and hope that a chance to escape the crates comes soon or you can yell for help."

    /*if option 1 is chosen, w increases by 2, if option 2 is chosen, w increases by 1*/
}

$(document).ready(function(){ //when document is ready, function will be executed.
    var j = 1; 
    var h = 2; 
    var w = 0; 
    var v = 4; 
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
                typeWriter.call(); 
            }
            else if (input1.includes(rooms["con" + h])){ 
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
                    typeWriter.call(); 
            } 
            else {
                var i = 0;
                var txt = "Uh oh! That's not a command that I recongize! "; /* The text */
                var speed = 30; /* The speed/duration of the effect in milliseconds */

                //This function is attributed to W3 Schools!//
                function typeWriter() {
                    if (i < txt.length) {
                    document.getElementById("game-text").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                    }
                }
                typeWriter.call(); 
            }

        //    typeWriter.call(); 
            j = j + 1; 
            h = h + 1; 
            v = v + 1; 
        }
    })
    })