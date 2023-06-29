function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 10;
  this.h = 0;
  this.prevPos = this.pos.copy();
  this.head;
  


  this.update = () => {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);

  };

  this.recieveField = () => {
    let x, y;
    x = map(floor(this.pos.x / scl),0,cols,0,height/cols*inc);
    y = map(floor(this.pos.y / scl),0,rows,0,width/rows*inc);

    let angle = noise(y,x,zoff) * 4 * TWO_PI;
    
    let force = p5.Vector.fromAngle(angle);
    this.head = force;
    force.setMag(5);
    this.applyForce(force);

  console.log(this.head);

  };

  this.applyForce = (force) => {

    this.acc.add(force);

  };

  this.show = () => {
    stroke(this.h, 50, 255, 25);
    this.h = this.h + 1;
    if (this.h > 255) {
      this.h = 0;
    }
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  };

  this.updatePrev = () => {
    this.prevPos.set(this.pos);
  };
  

  this.edges = () => {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
    
  };

  

}

