var Earth = function(settings) {

  // Settings
  var earthElement = null;
  var oxygen = 100;
  var fuel = 100;

var earthPosition = {};







  function create() {
    // Create the object asset
  }

  function init() {
    // create();
    earthElement = document.getElementById('earth');

    var earthElementRect = earth.getBoundingClientRect();
    earthPosition = {
      y: earthElementRect.top,
      x: earthElementRect.left
    }

  }


  init();
}
