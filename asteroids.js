var Asteroids = function(settings) {

  // Asteroids general settings
  var asteroidsElement = null;
  var astSpeed = 0.9;
  var astAngle = 0;



  var asteroidsPosition = {};


  // SPAWN asteroids
  var spawnedAsteroids = [];

  function createAsteroid() {
      for (var i = 0; i <= 30; i++) {
        var newAsteroids = new Asteroids;
        // Set positions for newly spawned asteroids
        var asteroidsPosition.x = Math.random() * parseInt(window.innerWidth);
        var asteroidsPosition.y = Math.random() * parseInt(window.innerHeight);

        // Set speeds for newly spawned asteroids
        asteroidsPosition.x += Math.cos(toRadians(angle)) * Math.random() * astSpeed;
        asteroidsPosition.y += Math.sin(toRadians(angle)) * Math.random() * astSpeed;
        asteroidsElement.style.top = asteroidsPosition.y + "px";
        asteroidsElement.style.left = asteroidsPosition.x + "px";
    };
    spawnedAsteroids.push(createAsteroid());
  }


  function create() {
    // Create the object asset
  }

  this.render = function(interactions) {
    createAsteroid();

  }

  function init() {
    // create();
    asteroidsElement = document.getElementById('asteroids');

    var asteroidsElementRect = asteroids.getBoundingClientRect();
    asteroidsPosition = {
      y: asteroidsElementRect.top,
      x: asteroidsElementRect.left
    }
  }

  // this.render = function(interactions) {
  //   move(interactions);
  //
  // }

  init();
}
