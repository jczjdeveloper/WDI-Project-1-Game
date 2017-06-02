var Spaceship = function(settings) {
  // Ship general settings
  var shipElement = null;
  var angle = 0;
  var speed = 0;
  // shipPosition
  var shipPosition = {};


  this.getElement = function(){
    return shipElement;
  }


  // Interactions to STEER ship
  function turn(interactions) {

    if (interactions.left) {
      angle -= settings.turnspeed;
    }

    if (interactions.right) {
      angle += settings.turnspeed;
    }

    if (angle > 360) {
      angle = 0;
    }

    if (angle < -360) {
      angle = 0;
    }
  }

  // Interactions to INCREASE SPEED of ship
  function accelerate(interactions) {

    if (speed > 0) {
      speed -= settings.acceleration / 4;

      if (speed < 0) {
        speed = 0;
      }
    }

    if (speed < 0) {
      speed += settings.acceleration / 4;

      if (speed > 0) {
        speed = 0;
      }
    }

    if (interactions.accelerate) {
      speed += settings.acceleration;
    }

    // Friction factor
    if (speed > settings.maxspeed) {
      speed = settings.maxspeed;
    }

    // Friction factor
    if (speed < (settings.maxspeed * -0.9)) {
      speed = settings.maxspeed * -0.9;
    }
  }

  // MOVEMENT OF SHIP - NEW X AND Y COORDS after acceleration
  function move() {

    // Set speed
    shipPosition.x += Math.cos(toRadians(angle)) * speed;
    shipPosition.y += Math.sin(toRadians(angle)) * speed;
    shipElement.style.top = shipPosition.y + "px";
    shipElement.style.left = shipPosition.x + "px";

    // Set angle
    shipElement.style.transform = 'rotate(' + (angle + 90) + 'deg)';

  }


  // GRAVITY variables

  // var earthElement = document.getElementById('earth');
  //
  // var earthPosition = {};
  //
  // var earthElementRect = earth.getBoundingClientRect();
  // earthPosition = {
  //   y: earthElementRect.top,
  //   x: earthElementRect.left
  // }
  //
  // // GRAVITY - finding distance between ship and planet
  // var diffX = earthPosition.x - shipPosition.x;
  // var diffY = earthPosition.y - shipPosition.y;
  // var distSquare = (diffX * diffX) + (diffY * diffY);
  // var dist = Math.sqrt(distSquare);

  // Apply GRAVITY to ship if planet is not in collision with ship

  // function gravityForce() {
  //   if (dist < 500) {
  //     var gForce = 50/distSquare;
  //     shipPosition.x += gForce * diffX/dist;
  //     shipPosition.y += gForce * diffY/dist;
  //   }
  // };

  // this.applyGravity(){
  //
  //
  // }

  function wall() {

    var shipRect = shipElement.getBoundingClientRect();
    // var w = parseInt(window.innerWidth);
    // var h = parseInt(window.innerHeight);
    var w = parseInt(window.innerWidth);
    var h = parseInt(window.innerHeight);


    if(shipRect.bottom > h){
      shipElement.style.top = (h-shipRect.height) + 'px';
    }

    if(shipRect.top < 0){
      shipElement.style.top = '0px';
    }

    if(shipRect.left < 0){
        shipElement.style.left = '0px';
    }

    if(shipRect.right > w){
        shipElement.style.left = ( w - shipRect.width) + 'px' ;
    }


  }

  this.render = function(interactions) {
    accelerate(interactions);
    turn(interactions);
    move();
    wall();

  }

  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  function init() {
    shipElement = document.getElementById('ship');

    var shipElementRect = shipElement.getBoundingClientRect();
    shipPosition = {
      y: shipElementRect.top,
      x: shipElementRect.left
    }
    // console.log(shipPosition.y);
    // console.log(shipPosition.x);
    shipElement.style.transform = 'rotate(' + angle + 'deg)';
  }

  init();
}
