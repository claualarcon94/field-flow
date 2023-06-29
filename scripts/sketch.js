var inc = 0.1;
var scl = 20;
var cols, rows;
var fr;

var field = [];
var particles = [];
var zoff = 0;
var vectors = false;
var size;


function setup() {
  //size = 800;
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(document.getElementById('canvas-container'));

  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = document.querySelector('.js-frameRate');

  //field = new Array(cols * rows);

  for (let i = 0; i < 100; i++) {

    particles[i] = new Particle();
  }
  noiseSeed(99);
  background(25);
}

function draw() {
  

    

  


  for (let particle of particles) {
    particle.recieveField();
    particle.update();
    particle.edges();
    if (!vectors) {
      
      particle.show();
    }else{
     
      push();
      translate(floor(particle.pos.x/scl)*scl,floor(particle.pos.y/scl)*scl);
      rect(0,0,scl,scl);
      rotate(particle.head.heading());
      strokeWeight(1);
      line(0, 0, scl, particle.head.y);
      pop();
    }
    
  }
  zoff += 0.02;
  fr.innerHTML = floor(frameRate());
}



let touchProcessed = false;
let touchDelay = 500; // Adjust the delay time as needed
let lastTouchTime = 0;

function touchStarted() {
  let currentTime = millis();
  if (!touchProcessed && (currentTime - lastTouchTime) > touchDelay) {
    touchProcessed = true;
    lastTouchTime = currentTime;

    console.log(touches.length);
    vectors = !vectors;
    background(255);
   

   
  }
}

function touchEnded() {
  touchProcessed = false;
}


