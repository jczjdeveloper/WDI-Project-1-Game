var Asteroids = function(settings) {

// Asteroids general settings
var asteroidsElement = null;

var asteroidsPosition = {};


  function create() {
    // Create the object asset
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
