var rooms = {
    "start": {
        "description": "At the age of 14, however, one day, you find that your shoes collapse from years of running and tarnishing. \
        Instead of staggering stealthily into the nearby Nation of the Yellows and stealing a pair of shoes, you decide to put your clever \
        thief tactics to the test and steal \
         a pair of shoes from the King of the Blues. On a dazed night, you hide under a blanket of bushes outside the Blue Kingdom until \
         the dusty streets are silent. \
         There are two ways to enter the Blue Kingdom: you can climb the wall or look around for a crack in the thick kingdom \
         walls for you to climb through. ", 
         "directions": {
            "up": "room1",
            "around": "room2", 
        }
    },

    "room1": {
        "description": "You strut to the south side of the kingdom and, wedging your feet on bulging bricks, \
     you are able to climb to the peak of the wall. \
     You must quickly climb down to avoid being seen by the kingdom guards.",
        "directions": {
        "down": "room3", 
   }},
    
   "room2": {
         "description": "You strut to the west, east, and south side of the kingdom, \
     running your hand along the piney jutting stones in hope of finding a passageway \
     or breach in the wall that smugglers and other thieves use to enter to Nation of \
     the Blues unnoticed. However, the vines and thickets grow strong and thick and gaunt \
      thorny branches are strewn across the wall, making it that more difficult, in the pitch darkness,\
     to find a crack in kingdom walls to climb through. You are now on the south side of the kingdom and \
     you’re only real option is to climb the walls.", 
        "directions": {
            "up": "room1",
        },
    },
   
    "room3": {
    "description": "You land in the sand of the floor of the Kingdom with a thud. \
    You landed in the storage sect of the kingdom, where crates of silver, gold, and blueberries \
     -- the cash crop of the Blue Kingdom -- are stacked into pyramids all around you. \
     Dust rises around you from your fall and when you finally adjust to the scenery, \
     you hear heavy footsteps, the whispers of metal, and the faintest of breath, assumably, \
     a Kingdom guard, approaching your location. You have two options: you can hide inside a \
     crate or confront the guard.",
     "directions": {
         "now": "room4", 
     }
    },
     "room4": {
         "description": "You open a massive crate of blueberries and are able to fit your entire body and the lid safely back on. \
     As you lay silently, you hear the sound of the foot steps approach your crate. \
     Suddenly, you feel that the crate you are in is lifted briefly and placed down roughly  upon another platform. \
     You can hear the wood of other crates stack next to you and on top of you. Then, someone pulls all the crates away.\
      The crates placed besides you close up all tunnels that air, making the environment suffocating and difficult to \
      breathe in and the weight of the crates above you cause the lid of your crate to sink in and weaken.\
      You can lie quietly and hope that a chance to escape the crates comes soon or you can yell for help."}
}

var currentRoom = "start"; 
function changeroom(dir) {
    if (rooms[currentRoom].directions[dir] != undefined) {
        currentRoom = rooms[currentRoom].directions[dir]; 
        var i = 0;
        var txt = rooms[currentRoom].description; /* The text */
        var speed = 30; /* The speed/duration of the effect in milliseconds */

        function typeWriter() {
          if (i < txt.length) {
            document.getElementById("game-text").innerHTML += txt.charAt(i);
           i++;
           setTimeout(typeWriter, speed);
        }
         }
         typeWriter.call(); 
    }
}
var inventory = ["slingshot"]; 
var commands = ["go north", "go south", "go west", "go east", "look around", "climb up", "climb down", "hide now", "talk to", "show inventory", "show help"];
function showHelp(){
    $("#game-text").append("<p>Here are your complete list of commands: </p>"); 
    $("#game-text").append("<ul>"); 
    for (var l = 0; l < commands.length; l++){
        $("#game-text").append("<li>" + commands[l] + "</li>"); 
    }
    $("#game-text").append("</ul>"); 

}

function showInventory(){
    $("#game-text").append("<p>Here is your inventory: </p>"); 
    $("#game-text").append("<ul>"); 
    for (var l = 0; l < inventory.length; l++){
        $("#game-text").append("<li>" + inventory[l] + "</li>"); 
    }
    $("#game-text").append("</ul>"); 

}

function playerInput(inputs) {
    var command = inputs.split(" ")[0]; 
    switch (command) {
        case "go": 
            var dir = inputs.split(" ")[1]; 
            changeroom(dir); 
            break; 
        case "climb": 
            var dir = inputs.split(" ")[1]; 
            changeroom(dir);
            break; 
        case "look": 
            var dir = inputs.split(" ")[1]; 
            changeroom(dir); 
            break; 
        case "show": 
            if (inputs.split(" ")[1] == "help"){
                showHelp(); 
            }

            else if (inputs.split(" ")[1] == "inventory") {
                showInventory(); 
            }
            break; 
        default: 
         var i = 0;
         var txt = "Uh oh! That's not a command I recognize. Try again or view a complete list of commands by typing 'show help'"; /* The text */
         var speed = 30; /* The speed/duration of the effect in milliseconds */

        function typeWriter() {
          if (i < txt.length) {
            document.getElementById("game-text").innerHTML += txt.charAt(i);
           i++;
           setTimeout(typeWriter, speed);
        }
         }
         typeWriter.call(); 
    }
}

$(document).ready(function(){ //when document is ready, function will be executed.

    var i = 0;
    var txt = rooms.start.description; /* The text */
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

    $(document).keypress(function(key){
        if (key.which == 13){
            var input1 = $('#userinput').val().toLowerCase();
            playerInput(input1); 


               
            }
          
    })
    })