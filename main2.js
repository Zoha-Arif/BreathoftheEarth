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
     crate or confront (talk to) the guard.",
     "directions": {
         "now": "room4", 
         "to": "room5"
     }
    },
     "room4": {
         "description": "You open a massive crate of blueberries and are able to fit your entire body and the lid safely back on. \
     As you lay silently, you hear the sound of the foot steps approach your crate. \
     Suddenly, you feel that the crate you are in is lifted briefly and placed down roughly  upon another platform. \
     You can hear the wood of other crates stack next to you and on top of you. Then, someone pulls all the crates away.\
      The crates placed besides you close up all tunnels that air, making the environment suffocating and difficult to \
      breathe in and the weight of the crates above you cause the lid of your crate to sink in and weaken.\
      You can hide quietly and hope that a chance to escape the crates comes soon or you can yell (talk to) for help.", 
      "directions": {
          "now": "room6", 
          "to": "room7", 
      },

      "room5": {
          "description": "You stand still as the sound of breathing and metal approach. \
          You shield your body with a stack of two crates and wait for the guard to approach your location. \
           You crouch down and gaze from the side of the crates and see a burly guard shackled in silver and \
           tin armor and a jutting pointed sword. You have nothing on your persons but a slingshot and piney rocks. \
           Do you use your slingshot to fight to guard or stay hidden?", 
           "directions": {
               "now": "room8", 
               "slingshot": "room9", 
           }
      }
    },

    "room6": {
      "description": "The lack of air almost suffocates you but you stay within the crate of blueberries. \
      After about five minutes of rolling, the crates come to a stop and you hear the footsteps and metal fade. \
      This may be your only chance to escape. Use your slingshot to escape the crate", 
      "directions": {
          "slingshot": "room10"
      }
    },
    "room7": {
        "description": "You rapidly kick against the west side of your crate, \
        breaking the hinges and pushing the crate next to yours off the wheeled platform. \
        The crate lands upon the glass marble floors with a thud, and as you slide your body out, \
        you know that you need to run away from this scene before the guards return and discover you. \
        From the scene out a small, hooked, window, it seems that you were wheeled into the castle and now stand \
        in the Nation of the Blue’s castle’s corridors! There is a system of hallways in this corridor. Which way do you go?", 
        "directions": {
            "north": "room11", 
            "south": "room12", 
            "east": "room13", 
            "west": "room14", 
        }
    },
    "room8": {
        "description": "Using your slingshot and expert archery skills, \
        you are able to rapidly shoot three piney rocks at the guards head and face and slide \
         in for a sweeping roundhouse kick. It seems that you are safe but you need to escape the \
         scene before other guards come and discover their fallen soldier. The castle is north.", 
         "directions": {
             "north": "room15", 
            
            }
        },
    "room11": {
        "description": "There isn’t a hallway or room north of your location: only a painted wall \
         with esteemed artwork.", 
         "directions": {
             "north": "room11", 
             "south": "room12", 
             "east": "room13", 
             "west": "room14",
         }
    }, 

    "room12": {
        "description": "South of you is the massive hooked gateway of the castle. \
         Going through that gateway will lead you out of the castle. You don’t want to go there.", 
         "directions": {
             "north": "room11", 
             "south": "room12", 
             "east": "room13", 
             "west": "room14"
         }
    },

     
    "room13" : {
        "description": "East of you is a long hallway with massive painted ceilings, \
        gold embroidery along the wall finishings, and portraits of past Blue kings and queens. \
        You travel down this hallway, hiding behind statues occasionally and stopping to listen for \
        footsteps and metal. However, you are able to make it through this massive hallway without eyeing \
        a single guard. As you come about the end of this massive hallway, however, you see that you come about \
         a long corridor, at the end of which, is the chamber in which the Blue Kingdom cages their silver orb. \
         This room is heavily bolted and there are blue knights swarming this hallway heavily.\
          There is a chest north of this hallway which you can possibly climb into or you can stay \
          put behind the statue you are currently hiding behind.",
          "directions": {
              "now" : "room19", 
              "north": "room20"
          }
        },
    "room14": {
        "description": "You hear metal and the voices of guards emerging from the west wing hallway and \
        don’t think that it's a particularly good idea to go that way either.", 
        "directions": {
            "north": "room11", 
            "south": "room12", 
            "east": "room13", 
            "west": "room14"
        }
    }, 

    "room15": {
        "description": "You travel north, lurking behind crates and buildings, heading towards to the castle. \
        Using a tunnel system of sewers, you sneak into the castle and emerge in a corridor. \
        From the scene out a small, hooked, window, it seems that you were wheeled into the castle and now stand \
        in the Nation of the Blue’s castle’s corridors! There is a system of hallways in this corridor. Which way do you go?",
        "directions": {
            "north": "room11", 
            "south": "room12", 
            "east": "room13", 
            "west": "room14"
        }
    },
    "room19": {
        "description": "As you stay relatively hidden behind the statue, a peculiar scene unfolds: from the embellished, \
        painted, roof, a dense, concentrated, haze of smoke seeps through. The blue knights immediately notice the \
        concentrated smoke and scramble to alert the king and other high officials. However, as the smoke approaches \
         the marble floors of the corridor, it slowly concentrates into the vague shape of a human, so that the smoke \
          now appears to be a shadow without a body. The blue knights raise their swords and yell, “Halt! Do not come near!” \
           and the shadowy figure does not come near. Instead, a voice like melted silver and copper, profound and cold, \
           says, “You will open the gates for me and hand me the silver orb.” And, to your utter surprise, the gates \
           that barricade the blue’s silver orbs are opened by the blue knights, and one of the blue knights, \
           the chief commander, unravels the Blue’s silver orb to the shadowy figure! The shadowy figure, in \
            possession of the blue orb, now seeps back through the reef and escapes the scene. Meanwhile, a \
            guard who was sent to alert the \
        high officials, is strutting down the hallway in which you are hiding behind a statue and spots you. In which direction do you run?",
        "directions": {
            "north": "room21", 
            "south": "room21", 
            "east": "room21", 
            "west": "room21"
        }
    },
    "room20": {
        "description": "You head north and hide inside the chest for ood cover. You hold the lid open a bit and watch a rather peculiar scene unfolds: \
         from the embellished, painted, roof, a dense, concentrated, haze of smoke seeps through. \
         The blue knights immediately notice the concentrated smoke and scramble to alert the king and \
          other high officials. However, as the smoke approaches the marble floors of the corridor, it \
           slowly concentrates into the vague shape of a human, so that the smoke now appears to be a shadow \
           without a body. The blue knights raise their swords and yell, “Halt! Do not come near!” and the shadowy \
            figure does not come near. Instead, a voice like melted silver and copper, profound and cold, says,\
             “You will open the gates for me and hand me the silver orb.” And, to your utter surprise, the \
             gates that barricade the blue’s silver orbs are opened by the blue knights, and one of the blue \
              knights, the chief commander, unravels the Blue’s silver orb to the shadowy figure! The shadowy \
               figure, in possession of the blue orb, now seeps back through the reef and escapes the scene. \
               Meanwhile, a guard who was sent to alert the high officials, is strutting down the hallway in \
                which you are hiding behind a statue and spots you.\
                 “Hey you, thief!” he yells, “Don’t move!”"

    }
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

    else {
        var i = 0;
        var txt = "Uh oh, you can't execute that command. For a full list of commands type in 'show help'"; /* The text */
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
var commands = ["go north", "go south", "go west", "go east", "look around", "climb up", "climb down", "hide now", "talk to", "show inventory", "show help", "use slingshot"];
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
        case "use": 
             var dir = inputs.split(" ")[1]; 
             changeroom(dir); 
        case "hide": 
             var dir = inputs.split(" ")[1]; 
             changeroom(dir); 
        case "show": 
            if (inputs.split(" ")[1] == "help"){
                showHelp(); 
            }
        case "talk": 
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