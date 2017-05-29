var Spaceship = function(settings) {

    // Settings
    var spaceshipElement = null;
    var bullets = [];



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

      if(spaceshipRect.bottom > h){
        spaceshipElement.style.top = (h-spaceshipRect.height) + 'px';
      }

      if(spaceshipRect.top < 0){
        spaceshipElement.style.top = '0px';
      }

      if(spaceshipRect.left < 0){
          spaceshipElement.style.left = '0px';
      }

      if(spaceshipRect.right > w){
          spaceshipElement.style.left = ( w - spaceshipRect.width) + 'px' ;
      }





    }

    // Move the spaceship based on arrowkey
    function move(interactions){

      if(interactions.up){
        spaceshipElement.style.top = parseInt(spaceshipElement.style.top)-8+"px";
      }

      if(interactions.down){
        spaceshipElement.style.top = parseInt(spaceshipElement.style.top)+8+"px";
      }

      if(interactions.left){
        spaceshipElement.style.left = parseInt(spaceshipElement.style.left)-8+"px";
      }

      if(interactions.right){
        spaceshipElement.style.left = parseInt(spaceshipElement.style.left)+8+"px";
      }

      if(settings.walls){
        wall();
      }
    }


    function create() {
        // Create the object asset
    }

    function init(){
      // create();
      spaceshipElement = document.getElementById('spaceship');
      spaceshipElement.style.top = '400px';
      spaceshipElement.style.left = '300px';
      spaceshipElement.style.height = '100px';

    }

    this.render = function(interactions){
      move(interactions);
    }

    init();
}
