var Spaceship = function(settings) {

  // Settings
  var spaceshipElement = null;
  var spaceshipRotation = 0;
  var spaceshipVelocity = 0;
  var friction = 0.9;
  var yCoord = Math.sin(spaceshipRotation * (180/Math.PI));
  console.log(yCoord);
  var xCoord = Math.sin(spaceshipRotation * (180/Math.PI));
    console.log(xCoord);
  this.vx = 0;
  this.vy = 0;



  /*
    bottom:265
    height:100
    left:400
    right:500
    top:165
    width:100
*/

  function wall() {

    var spaceshipRect = spaceshipElement.getBoundingClientRect();
    var w = parseInt(window.innerWidth);
    var h = parseInt(window.innerHeight);

    if (spaceshipRect.bottom > h) {
      spaceshipElement.style.top = (h - spaceshipRect.height) + 'px';
    }

    if (spaceshipRect.top < 0) {
      spaceshipElement.style.top = '0px';
    }

    if (spaceshipRect.left < 0) {
      spaceshipElement.style.left = '0px';
    }

    if (spaceshipRect.right > w) {
      spaceshipElement.style.left = (w - spaceshipRect.width) + 'px';
    }

  }

  // Move the spaceship based on arrowkey
  function move(interactions) {

    if (interactions.left) {
      spaceshipElement.style.transform = 'rotate(' + (parseInt(spaceshipRotation) - 8) + 'deg)';
      yCoord = spaceshipRotation - 8;
      console.log(yCoord);
    }

    if (interactions.right) {
      spaceshipElement.style.transform = 'rotate(' + (parseInt(spaceshipRotation) + 8) + 'deg)';
      xCoord = spaceshipRotation + 8;
      console.log(xCoord);
    }

          // thrusting without friction
    function thrusting() {

      if (interactions.space) {
      vx += xCoord * this.thrust;
      vy += yCoord * this.thrust;
      // with friction
      vx *= friction;
      vy *= friction;
      // velocity with friction applied to x and y coords
      this.x = this.vx;
      this.y = this.vy;
    }
  }

    if (settings.walls) {
      wall();
    }
  }

// converting radians to degrees
function toDegree(angle) {

}
