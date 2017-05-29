var Game = function() {

  // Game settings
  var settings = {}; // Containes all game settings
  settings.spaceshipSpeed = 8; // The speed of the ball
  settings.walls = true; // The ball can not go outside the screen
  settings.automatic = false; // The ball will move by itself
  settings.godmode = false; // Debug mode

  // World settings
  var assets = []; // All game objects
  var player = new Spaceship(settings); // The player
  assets[0] = player;
  var frame = 0; // Frames since the start of the game

  // Interactions
  var interactions = {};
  // interactions.up = false; // Up arrow key pressed
  // interactions.down = false; // Down arrow key pressed
  interactions.left = false; // Left arrow key pressed
  interactions.right = false; // Right arrow ket pressed
  interactions.space = false; // Space key pressed

  // Setup event listeners
  function setupEvents() {

    document.addEventListener('keyup', function(event) {
      var keyName = event.key;
      var keyCode = event.code;
      switch (keyName) {
        case "ArrowRight":
          interactions.right = false;
          break;
        case "ArrowLeft":
          interactions.left = false;
          break;
        // case "ArrowUp":
        //   interactions.up = false;
        //   break;
        // case "ArrowDown":
        //   interactions.down = false;
        //   break;

        default:
          break;
      }
      switch (keyCode) {
        case "Space":
          interactions.space = false;
          break;
        default:
          break;
      }
    });

    document.addEventListener('keydown', function(event) {
      var keyName = event.key;
      var keyCode = event.code;
      switch (keyName) {
        case "ArrowRight":
          interactions.right = true;
          break;
        case "ArrowLeft":
          interactions.left = true;
          break;
        // case "ArrowUp":
        //   interactions.up = true;
        //   break;
        // case "ArrowDown":
        //   interactions.down = true;
        //   break;
        default:
          break;
      }
      switch (keyCode) {
        case "Space":
          interactions.space = true;
          break;
        default:
          break;
      }
    });





  }



  // Startup the game
  function init() {
    setupEvents();
  }

  // The render function. It will be called 60/sec
  this.render = function() {

    for (var i = 0; i < assets.length; i++) {
      assets[i].render(interactions);
    }
  }

var self = this;
  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();


  (function animloop() {
    requestAnimFrame(animloop);
    self.render();
  })();

  init();
}

var g = new Game();
