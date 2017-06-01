var Asteroids = function(settings) {

  // Asteroids general settings
  var asteroidsElement = null;
  var asteroidsCreated = false;
  var asteroidsPosition = {};

  // SPAWN asteroids
  var spawnedAsteroids = [];

  this.getElement = function() {
    return asteroidsElement;
  }

  function createAsteroid() {
    var space = document.getElementsByClassName('startpagebackground')[0]
    var astAngle = 100 * Math.random() + "deg";
    var astSpeed = 2;

    if (asteroidsCreated === false) {
      for (var i = 0; i <= 15; i++) {
        var asteroidsElm = document.createElement("div");
        asteroidsElm.className = "astNew";
        // Asteroid random spawned position
        asteroidsElm.style.top = parseInt(1000 * Math.random()) + "px";
        asteroidsElm.style.left = parseInt(1000 * Math.random()) + "px";
        // Asteroid random angle
        asteroidsElm.style.transform = 'rotate(' + (parseInt(Math.random() * 100)) + 'deg)';
        // Asteroid movement based on random angle
        asteroidsElm.top += Math.cos(toRadians(astAngle)) * astSpeed;
        asteroidsElm.left += Math.sin(toRadians(astAngle)) * astSpeed;

        // Append new asteroid div to Body
        document.body.appendChild(asteroidsElm)
      }
      asteroidsCreated = true
    }
    // spawnedAsteroids.push(createAsteroid());
  }

  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }


  // function createAsteroid() {
  //     for (var i = 0; i <= 30; i++) {
  //       var newAsteroids = new Asteroids;
  //       // Set positions for newly spawned asteroids
  //       var asteroidsPosition.x = Math.random() * parseInt(window.innerWidth);
  //       var asteroidsPosition.y = Math.random() * parseInt(window.innerHeight);
  //
  //       // Set speeds for newly spawned asteroids
  //       asteroidsPosition.x += Math.cos(toRadians(angle)) * Math.random() * astSpeed;
  //       asteroidsPosition.y += Math.sin(toRadians(angle)) * Math.random() * astSpeed;
  //       asteroidsElement.style.top = asteroidsPosition.y + "px";
  //       asteroidsElement.style.left = asteroidsPosition.x + "px";
  //   };
  //   spawnedAsteroids.push(createAsteroid());
  // }


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
