var Game = function() {

    // Game settings
    var settings = {};                     // Containes all game settings
    settings.walls = false;                 // The spaceship can not go outside the screen
    settings.automatic = false;            // The spaceship will move by itself
    settings.acceleration = 0.3;          // Acceleration per frame
    settings.maxspeed = 5;                 // Max speed of the Spaceship
    settings.turnspeed = 4;                // How fast will the Spaceship turn

    // World settings
    var assets = [];                      // All game objects
    var player = new Spaceship(settings);      // The player
    assets[0] = player;
    var frame = 0;                        // Frames since the start of the game

    // Interactions
    var interactions = {};
    interactions.left = false;            // Left arrow key pressed
    interactions.right = false;           // Right arrow key pressed
    interactions.space = false;           // Space key pressed
    interactions.accelerate = false;      // a key pressed

    // Setup event listeners
    function setupEvents() {

      document.addEventListener('keyup', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "ArrowRight":
              interactions.right = false;
              break;
          case "ArrowLeft":
              interactions.left = false;
              break;
          case "a":
              interactions.accelerate = false;
              break;
          default:
              break;
        }
      });

      document.addEventListener('keydown', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "ArrowRight":
              interactions.right = true;
              break;
          case "ArrowLeft":
              interactions.left = true;
              break;
          case "a":
              interactions.accelerate = true;
              console.log('accelerating');
              break;
          default:
              break;
        }
      });


    }



    // Startup the game
    function init(){
      setupEvents();
    }

    // The render function. It will be called 60/sec
    this.render = function(){

      for(var i=0; i < assets.length; i++){
        assets[i].render(interactions);
      }
    }

    var self = this; // Add this line
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
            })();


            (function animloop(){
              requestAnimFrame(animloop);
              self.render();
            })();

            init();
}

var g = new Game();
