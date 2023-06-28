function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 10;
  this.h = 0;
  this.prevPos = this.pos.copy();


  this.update = () => {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);

  };

  this.recieveField = (field) => {
    let x, y;
    y = floor(this.pos.x / scl);
    x = floor(this.pos.y / scl);
    this.applyForce(field[x][y]);

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

