// WEBPAGES (START, INSTRUCTIONS, INTRODUCTION)

// WEBPAGES (START)
    //Follow wireframe presentation on layout of



// ENVIRONMENT




// OBJECTS


// INTERACTIONS

// World environment
// 1. deciding on a large enough screen pixel size that will encompass the planets, sun and Eden. Due to mechanics of spaceship being centred of the screen, environment should have a border of 1 x largest screen size. This is to avoid reprogramming the spaceship being the centre focal point of user viewport.
// 2. Backdrop/background should be a high res space picture with low saturation of stars. This should be a background position of tiled.
// 3. Walls should be visible in 'playable' area of environment
// 4. var asteroidHealth  = 1;
//     1. should take damage when colliding with planets and spaceship
//     2. var asteroidHealthRemaining = asteroidHealth - damage;
//     3. when asteroidHealthRemaining = 0, should show exploding animation.
//
// Planet objects
// 1. Map out planets and their fixed positions.
//     1. earth should be near max of x and y (bottom left hand of screen)
//     2. EDEN should be top right corner
//     3. In between, planets should be scattered to send the player on a indirect path to get to Eden
// 2. To represent gravitational fields, planets should have fixed circles that are larger than themselves (an additional margin of 15%). These circles should be 'sent to the back' and have a lower z index and high transparency (alpha?)
// 3. All planets to have oxygen and fuel variables
//     1. All planets to be different colours
// 4. Only some planets will have ore and they will be brown in color or a shade of brown
//     1. Instructions/introduction to tell player that only planets in shade of brown have resources
//
//
// Spaceship objects
// 1. Spaceship is a block 16x16px (MVP)
//     1. Actual spaceship image should be a clipart sourced from the internet. Spaceship should be as square/rectangular as possible. Clip art should either be 16x16px or dimension of its box for collisions is 16x16px.
// 2. Steering
//     1. Should be based on key press down of arrow keys (left and right)
//     2. Should be able to go 360 degrees.
//         1. Ensure there is no max or min.
//         2. Set 0 degrees to spaceship pointing up to top of screen.
//     3. rotation speed should be approx 10 degrees per 1/4 60fps (test and refine)
// 3. Acceleration (var speed = 0)
//     1. Ship has a var acceleration = 0 initially;
//     2. Upon press down key of spacebar, add acceleration to var acceleration
//         1. This should be done at a constant rate per 1/2 second (this can be calculated according to the 60fps of render
//         2. acceleration capped at 50/100?
//     3. Acceleration is capped at max of 10px for change in X and Y axis
//     4. Thrust only sends spaceship in a straight line (dependent on degrees of rotation)
//     5. There should be gradual deceleration without use of acceleration
//         1. When keyup of spacebar, there should be var deceleration applied.
//             1. deceleration should be large amount (eg. 5 per 0.5seconds)
//         2. var deceleration = 5 per second
//         3. var speed = acceleration - deceleration;
//         4. There should be no deceleration within gravity field (JUICE/compulsory?)
// 4. Collision detection
//     1. Spaceship should take 1/3 hull damage (start state: var hullCondition  = 3) upon collision with asteroids/comets
//     2. Spaceship to take 1/3 hull damage upon landing (if acceleration variable too high) or touching planet objects (top, left, right sides)
//     3. Spaceship should also take 1/3 hull damage upon landing too hard onto planet. This should be when acceleration is beyond x speed. This is applicable to when spaceship lands on its rear.
//     4. Upon colliding with any object (top left right sides), object should have a bounce effect to move in opposite direction of original collision.
// 5. FUEL OXYGEN
//     1. var fuel  = 100 starting (should be a global object (?) or should it be just the spaceship?
//         1. Should gradually decrease according to time spent on pressing spacebar (eg. fuel reduces 5%/10% per 1/0.5 secs(?) —> Time measured according to 60fps
//             1. This should be assigned to var fuelSpent = 0;
//             2. var fuelSpent increases on time spent on pressing spacebar
//             3. create var fuelRemaining = fuel - fuelSpent;
//             4. when var fuelRemaining = 0 without landing on a planet or just in the middle of nowhere, disable var acceleration / spacebar keydown.
//                 1. In addition, create alert (“You have used all your fuel! Now you are fated to float in space till you run out of oxygen. You have let humanity down.”)
//                 2. Should auto reset the game after player clicks “ok” for alert
//         2. When landing on a planet, var planetFuel should add to var fuelRemaining/fuel
//             1. Fuel replenished at a slow rate rather than immediate (JUICE feature)
//             2. Fuel should be capped at 100 (math.ceiling or max?)
//     2. var oxygen = 100 starting
//         1. var oxygenSpent = 0; (starting)
//             1. should decrease at a constant rate according to 60fps time system. Should increase at 4 per second.
//             2. var oxygenRemaining = oxygen - oxygenSpent;
//             3. When oxygenRemaining = 0;, set alert for (“Your have run out of oxygen. The crew has suffocated ): . You have let humanity down.”)
//             4. When landing on a planet, var planetOxygen should be added to var oxygenRemaining.
//                 1. Oxygen replenished at a slow rate rather than immediate (JUICE feature)
//             5. oxygenRemaining should be capped at 100 (math.ceiling or max?)
//                 1. Should auto reset the game after player clicks “ok” for alert
// 6. var hull = 3 starting
//     1. everytime there is a collision with an asteroid/comet/hard landing/collision with planet, var damage = 1 —> var damage increases by 1 per collision.
//     2. var hullRemaining  = hull - damage;
//     3. When hullRemaining  = 0; spaceship needs to explode and create alert ("GAME OVER! You have let humanity down.")
// 7. Navigation compass (JUICE)
//     1. At base of screen there should be a little arrow that should keep pointing to direction of Eden’s core. Arrow should be fixed to point at core x and y coordinates of Eden.
//     2. This arrow should should be in the middle of a circle? Arrow z-index should be greater than circle.
//
//
// Interactions between objects, environments
// (ENVIRONMENT)
// 1. Visible walls that surround the map should bounce spaceship object
//     1. Juice it to include asteroids and comets if there is time
// 2. Collision detection - refer to spaceship object
// 3. var deceleration - refer to spaceship object. Should it be a global variable under environment?
// 4. Planetary gravitational field should drag objects when they enter towards its center. However, planet does not allow objects to pass through. Hence spaceship, comet, asteroids should explode upon contact. (spaceship won’t explode if landing on butt.)
// 5. Gravity (GOOOGLLEEE PRIORITY)
//     1. Varying gravity pull according to different planets. (Could be based on planet size? Width and height? or Just width?
//     2. var gravityPull should be applied to spaceship.
//     3. There needs to be a formula to correlate gravityPull and var force/speed.
//     4.
// 6. Need to have var force/var speed > x then hull will take damage (this is for rear landing)
// 7. Spaceship Other sides (top left right) should have collision detection and take immediate damage value of 1 per collision.
// 8. Planetary gravitational pull should also apply to comets/asteroids. They should explode upon collision with planet.
//
// (FUEL OXYGEN ORE)
// 1. Refer to spaceship object
//
// Viewport mechanics
// 1. Player screen width traverses within the fixed pixel environment
// 2. spaceship object is always fixeated in the middle of the player screen no matter screen size
// 3. Add in visible walls at the end of the playable environment.
// 4. Zoom/enlarge objects on screen when within certain radius of planetary gravity field. Zoo out/decrease scale to normal when leaving certain radius of planetary gravity field.
// 5. (MVP) Hull (3/3), Fuel (100/100), Oxygen (100/100), top right, Fuel (x/500)
//     1. span class for these should be dynamic so that player can monitor
//     2. these variables should be public variables? so that it can be used to calculate interactions across all objects.
