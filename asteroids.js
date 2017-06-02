var Asteroids = function(settings) {

  // Asteroids general settings
  var asteroidsElement = null;
  var asteroidsCreated = false;
  var asteroidsPosition = {};
  var astAngle = 100 * Math.random() + "deg";
  var astSpeed = 5;

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
    asteroidsElement.style.top = parseInt(300 * Math.random(500)) + "px";
    asteroidsElement.style.left = parseInt(1000 * Math.random(500)) + "px";
    // Asteroid random angle
    asteroidsElement.style.transform = 'rotate(' + (parseInt(Math.random() * 100)) + 'deg)';

    // Append new asteroid div to Body
    space.appendChild(asteroidsElement)
  }

  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }

  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  function astWall() {

    var asRect = asteroidsElement.getBoundingClientRect();
    var w = parseInt(window.innerWidth);
    var h = parseInt(window.innerHeight);

    if (asRect.bottom > h) {
      asteroidsElement.style.top = (h - asRect.height) + 'px';
    }

    if (asRect.top < 0) {
      asteroidsElement.style.top = '0px';
    }

    if (asRect.left < 0) {
      asteroidsElement.style.left = '0px';
    }

    if (asRect.right > w) {
      asteroidsElement.style.left = (w - asRect.width) + 'px';
    }

    // if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    //     astSpeed = -2;
      if (asteroidsElement.style.top > window.innerHeight) {
      asteroidsElement.style.top = parseInt(asteroidsElement.style.top) + Math.cos(toRadians(parseInt(astAngle - 180))) * (astSpeed) + "px";
    }
    //   // }
    //   // if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    //   //     astSpeed = -2;
      if (asteroidsElement.style.left < window.innerWidth) {
      asteroidsElement.style.left = parseInt(asteroidsElement.style.left) + Math.sin(toRadians(parseInt(astAngle - 180))) * (astSpeed) + "px";
      }
    // }
  }

  function move() {
    // Asteroid movement based on random angle
    asteroidsElement.style.top = parseInt(asteroidsElement.style.top) + Math.cos(toRadians(parseInt(astAngle))) * astSpeed + "px";
    asteroidsElement.style.left = parseInt(asteroidsElement.style.left) + Math.sin(toRadians(parseInt(astAngle))) * astSpeed + "px";
    astWall();
  }


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
