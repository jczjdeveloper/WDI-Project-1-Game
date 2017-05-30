var Spaceship = function(settings){

  var shipElement = null;
  var angle = 0;
  var speed = 0;

  var shipPosition = {};

  function turn(interactions){

    if(interactions.left){
      angle -= settings.turnspeed;
    }

    if(interactions.right){
      angle += settings.turnspeed;
    }

    if(angle > 360){
      angle =0;
    }

    if(angle < -360){
      angle =0;
    }
  }

  function accelerate(interactions){

    if(speed > 0){
      speed -= settings.acceleration/4;

      if(speed < 0){
        speed =0;
      }
    }

    if(speed < 0){
      speed += settings.acceleration/4;

      if(speed > 0){
        speed =0;
      }
    }

    if(interactions.accelerate){
      speed += settings.acceleration;
    }

    if(interactions.break){
      speed -= settings.acceleration;
    }

    // Friction factor
    if(speed > settings.maxspeed){
      speed = settings.maxspeed;
    }

    // Friction factor
    if(speed < (settings.maxspeed*-0.9)){
      speed = settings.maxspeed*-0.9;
    }
  }

  function move(){

    // Set speed
    shipPosition.x += Math.cos(toRadians(angle)) * speed;
    shipPosition.y += Math.sin(toRadians(angle)) * speed;
    shipElement.style.top = shipPosition.y  + "px";
    shipElement.style.left =  shipPosition.x + "px";

    // Set angle
    shipElement.style.transform = 'rotate('+ (angle+90) + 'deg)';
  }

  this.render = function(interactions){
      accelerate(interactions);
      turn(interactions);
      move();
  }

  function toRadians (angle) {
    return angle * (Math.PI / 180);
  }

  function init(){
    shipElement = document.getElementById('ship');

    var shipElementRect = shipElement.getBoundingClientRect();
    shipPosition = {
      y: shipElementRect.top,
      x: shipElementRect.left
    }

    shipElement.style.transform = 'rotate('+ angle + 'deg)';
  }

  init();
}



// function spaceshipplanetcollision() {
//   var spaceshipRect = spaceshipElement.getBoundingClientRect();
//   var earth = document.getElementById('earth').getBoundingClientRect();
//
//   // CIRCULAR COLLISION DETECTION BETWEEN SPACESHIPS AND OTHER PLANETS.
//
//   var spaceshipCol = {
//     radius: spaceshipRect.width / 2,
//     x: spaceshipRect.left,
//     y: spaceshipRect.top,
//   };
//   var earthCol = {
//     radius: earth.width / 2,
//     x: earth.left,
//     y: earth.top,
//   };
//
//   // console.log(spaceshipCol.radius, spaceshipCol.x, spaceshipCol.y)
//   var dx = spaceshipCol.x - earthCol.x;
//   var dy = spaceshipCol.y - earthCol.y;
//   var distance = Math.sqrt(dx * dx + dy * dy);
//   if (distance < spaceshipCol.radius + earthCol.radius) {
//     console.log("Collision with Earth detected!");
//     // collision detected!
//   }
// };
