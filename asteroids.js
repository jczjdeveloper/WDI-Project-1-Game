var Asteroids = function(settings) {



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
