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
    var frame = 0;                        // Frames since the start of the game

    // Interactions
    var interactions = {};
    interactions.left = false;            // Left arrow key pressed
    interactions.right = false;           // Right arrow key pressed
    interactions.space = false;           // Space key pressed
    interactions.accelerate = false;      // a key pressed

    // Setup Assets
    function setupAssets(){

      assets.push(new Earth());

    }

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


    // Collision Detection
    function collisionDetection(){

      /* Sample code
          var circle1 = {radius: 20, x: 5, y: 5};
          var circle2 = {radius: 12, x: 10, y: 5};

          var dx = circle1.x - circle2.x;
          var dy = circle1.y - circle2.y;
          var distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < circle1.radius + circle2.radius) {
          // collision detected!
          }
      */

      var playerElement = player.getElement();
      var playerElementRect = playerElement.getBoundingClientRect();
      var playerBoundingCircle = {radius: playerElementRect.width / 3, x: playerElementRect.left+(playerElementRect.width / 2), y: playerElementRect.top+(playerElementRect.height / 2)};

      for(var i =0; i< assets.length; i++){
          var planetElement = assets[i].getElement();
          var planetElementRect = planetElement.getBoundingClientRect();
          var planetBoundingCircle = {radius: planetElementRect.width / 3, x: planetElementRect.left+(planetElementRect.width / 2), y: planetElementRect.top+(planetElementRect.height / 2)};

        //  console.log('playerBoundingCircle',playerBoundingCircle);
        //  console.log('planetBoundingCircle',planetBoundingCircle);

          var dx = playerBoundingCircle.x - planetBoundingCircle.x;
          var dy = playerBoundingCircle.y - planetBoundingCircle.y;
          var distance = Math.sqrt(dx * dx + dy * dy);

          if(distance < planetElementRect.width){

            // apply 

          }


          if (distance < playerBoundingCircle.radius + planetBoundingCircle.radius) {
            console.log("collision detected");
          }
      }
    }


    // Startup the game
    function init(){
      setupEvents();
      setupAssets();
    }

    // The render function. It will be called 60/sec
    this.render = function(){

      player.render(interactions);

      for(var i=0; i < assets.length; i++){
        assets[i].render(interactions);
      }

      collisionDetection();
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
