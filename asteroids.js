var Asteroids = function(settings) {

  // Asteroids general settings
  var asteroidsElement = null;
  var asteroidsCreated = false;
  var asteroidsPosition = {};
  var astAngle = 100 * Math.random() + "deg";
  var astSpeed = 2;

  // SPAWN asteroids
  var spawnedAsteroids = [];

  this.getElement = function() {
    return asteroidsElement;
  }

  function createAsteroid() {
    var space = document.getElementsByClassName('startpagebackground')[0]
    asteroidsElement = document.createElement("div");
    asteroidsElement.className = "astNew";
    // Asteroid random spawned position
    asteroidsElement.style.top = parseInt(1000 * Math.random()) + "px";
    asteroidsElement.style.left = parseInt(1000 * Math.random()) + "px";
    // Asteroid random angle
    asteroidsElement.style.transform = 'rotate(' + (parseInt(Math.random() * 100)) + 'deg)';

    // Append new asteroid div to Body
    document.body.appendChild(asteroidsElement)
  }


  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }


  function move() {
    // Asteroid movement based on random angle
    asteroidsElement.style.top = parseInt(asteroidsElement.style.top) + Math.cos(toRadians(parseInt(astAngle))) * astSpeed + "px";
    asteroidsElement.style.left = parseInt(asteroidsElement.style.left) + Math.sin(toRadians(parseInt(astAngle))) * astSpeed + "px";
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
    move();
  }

  function init() {
    createAsteroid();
  }

  // this.render = function(interactions) {
  //   move(interactions);
  //
  // }

  init();
}
