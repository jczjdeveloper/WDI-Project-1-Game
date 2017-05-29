var Spaceship = function(settings) {

  // Settings
  var spaceshipElement = null;
  var spaceshipRotation = 0;
  var velocityY = 0;
  var velocityX = 0;
  var thrust = 4;


  var velocityY = Math.sin(spaceshipRotation) * thrust;
  var velocityX = Math.cos(spaceshipRotation) * thrust;


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

  // Convert radians to degrees
  //
  // function toDegrees(angle) {
  //   return spaceshipRotation * (180 / Math.PI);
  // }




  // Move the ball around manually
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

      console.log('spacebar pressed');

    }

    if (settings.walls) {
      wall();
    }
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
