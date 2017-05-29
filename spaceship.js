var Spaceship = function(settings) {

  // Settings
  var spaceshipElement = null;
  var spaceshipRotation = 0;
  var velY = 0;
  var velX = 0;
  // Thrust velocity
  var thrust = 0.2;




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


  // Move the spaceship around manually
  function move(interactions) {


    if (interactions.left) {
      spaceshipElement.style.transform = 'rotate(' + (parseInt(spaceshipRotation) - 8) + 'deg)';
      spaceshipRotation = spaceshipRotation - 8;
      console.log(spaceshipRotation);
    }

    if (interactions.right) {
      spaceshipElement.style.transform = 'rotate(' + (parseInt(spaceshipRotation) + 8) + 'deg)';
      spaceshipRotation = spaceshipRotation + 8;
      console.log(spaceshipRotation);
    }

    if (interactions.space) {
      // convert angle to radians (direction that spaceship is facing)
      var radians = spaceshipRotation / Math.PI * 180;
      // current X and Y coord of spaceship
      function getOffset(spaceship) {
        spaceship = spaceship.getBoundingClientRect();
        return {
          left: spaceship.left + window.scrollX,
          top: spaceship.top + window.scrollY
        }
      }
      // Change in X and Y coords
      velY += Math.sin(radians) * thrust;
      velX += Math.cos(radians) * thrust;
      // Apply friction factor (deceleration)
      velY *= 0.9;
      velX *= 0.9;
      // New change in coords with friction applied
      getOffset(spaceship).top -= velY;
      getOffset(spaceship).left -= velX;
      console.log('velocityY is ' + velY + 'velocityX is ' + velX);

    }


    if (settings.walls) {
      wall();
    }
  }

  function accelerate(interactions) {


  }

  function create() {
    // Create the object asset
  }

  function init() {
    // create();
    spaceshipElement = document.getElementById('spaceship');
    spaceshipElement.style.top = '400px';
    spaceshipElement.style.left = '400px';
    spaceshipElement.style.height = '100px';

  }

  this.render = function(interactions) {
    move(interactions);

  }

  init();
}
