var Spaceship = function(settings) {

  // Settings
  var spaceshipElement = null;
  var spaceshipRotation = 0;
  var velY = 0;
  var velX = 0;


  // Resources
  var oxygen = 100;
  var fuel = 100;
  var ore = 0;


  // Thrust velocity
  var thrust = 0.8;




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
    if (interactions.up) {
      spaceshipElement.style.top = parseInt(spaceshipElement.style.top) - 8 + "px";
    }

    if (interactions.down) {
      spaceshipElement.style.top = parseInt(spaceshipElement.style.top) + 8 + "px";
    }

    if (interactions.left) {
      spaceshipElement.style.left = parseInt(spaceshipElement.style.left) - 8 + "px";
    }

    if (interactions.right) {
      spaceshipElement.style.left = parseInt(spaceshipElement.style.left) + 8 + "px";
    }

    // SPACESHIP
    // if (interactions.left) {
    //   spaceshipElement.style.transform = 'rotate(' + (parseInt(spaceshipRotation) - 8) + 'deg)';
    //   spaceshipRotation = spaceshipRotation - 8;
    //   console.log(spaceshipRotation);
    // }
    //
    // if (interactions.right) {
    //   spaceshipElement.style.transform = 'rotate(' + (parseInt(spaceshipRotation) + 8) + 'deg)';
    //   spaceshipRotation = spaceshipRotation + 8;
    //   console.log(spaceshipRotation);
    // }
    //
    // if (interactions.space) {
    //   // convert angle to radians (direction that spaceship is facing)
    //   var radians = spaceshipRotation / Math.PI * 180;
    //   // current X and Y coord of spaceship
    //   function getOffset(spaceship) {
    //     spaceship = spaceship.getBoundingClientRect();
    //     return {
    //       left: spaceship.left + window.scrollX,
    //       top: spaceship.top + window.scrollY
    //     }
    //   }
    //   // Change in X and Y coords
    //   velY += Math.sin(radians) * thrust;
    //   velX += Math.cos(radians) * thrust;
    //   // Apply friction factor (deceleration)
    //   velY *= 0.9;
    //   velX *= 0.9;
    //   // New change in coords with friction applied
    //   getOffset(spaceship).top -= velY;
    //   getOffset(spaceship).left -= velX;
    //   console.log('velocityY is ' + velY + 'velocityX is ' + velX);
    // }




    if (settings.walls) {
      wall();
    }
  }




  function spaceshipplanetcollision() {
    var spaceshipRect = spaceshipElement.getBoundingClientRect();
    var earth = document.getElementById('earth').getBoundingClientRect();
    // CIRCULATE COLLISION DETECTION BETWEEN SPACESHIPS AND OTHER PLANETS.

    var spaceshipCol = {
      radius: spaceshipRect.width/2,
      x: spaceshipRect.left,
      y: spaceshipRect.top,
    };
    var earthCol = {
      radius: earth.width/2,
      x: earth.left,
      y: earth.top,
    };

    console.log(spaceshipCol.radius, spaceshipCol.x, spaceshipCol.y)
    var dx = spaceshipCol.x - earthCol.x;
    var dy = spaceshipCol.y - earthCol.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < spaceshipCol.radius + earthCol.radius) {
      console.log("Collision with Earth detected!");
      // collision detected!
    }
  };
  // SHIP RESOURCES
  function resources(contact) {

    // if contact value = 1 {


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
    spaceshipplanetcollision();

  }

  init();
}
