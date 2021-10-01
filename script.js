class Ball {
  constructor(x, y, w, h, vx, vy, colour) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.colour = ("red");
  }

  drawBall() {
    fill(this.colour);
    ellipse(this.x, this.y, 50, 50);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.y <= 25 || this.y > 475) {
      this.vy = this.vy * -1;
    }

    if (this.x <= 25 || this.x > 475) {
      this.vx = this.vx * -1;
    }
  }
}

class Goal {
  constructor(xg, yg, wg, hg, colourg) {
    this.xg = xg;
    this.yg = yg;
    this.wg = wg;
    this.hg = hg;
    this.colourg = ("black");
  }

  drawGoal() {
    fill(this.colourg);
    rect(this.xg, this.yg, 15, 80);
  }
}

class Speler {
  constructor(xs, ys, controls) {
    this.xs = xs;
    this.ys = ys;
    this.controls = controls;
  }

  drawSpeler() {
    fill("cyan");

    if (this.controls == "m") {
      //console.log(mouseY);
      if(mouseX + 25 >= width){
        mouseX = width - 25;
      }
      if(mouseX <= 25){
        mouseX = 25;
      }
      if(mouseY <= 25){
        mouseY = 25;
      }
      if(mouseY + 25 >= height){
        mouseY = height - 30;
      }

      ellipse(mouseX, mouseY, 50, 50);
    }

    else {
      fill("pink");
      ellipse(this.xs, this.ys, 50, 50);

      if (keyIsDown(LEFT_ARROW)) {
        this.xs -= 5;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.xs += 5;
      }
      if (keyIsDown(UP_ARROW)) {
        this.ys -= 5;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.ys += 5;
      }
    }

     if(this.xs + 25 >= width){
      this.xs = width - 25;
    }
    if(this.xs <= 25){
      this.xs = 25;
    }
    if(this.ys <= 25){
      this.ys = 25;
    }
    if(this.ys + 25 >= height){
      this.ys = height - 25;
    }
  }
}


function setup() {
  createCanvas(500, 500);

  ball1 = new Ball(191, 102, 301, 30, 5, 5, this.colour);
  goal1 = new Goal(0, 225, 20, 80, this.colourg);
  goal2 = new Goal(485, 225, 15, 80, this.colourg);
  speler1 = new Speler(50, 250, "m");
  speler2 = new Speler(450, 250);
}

function draw() {
  background(150);

  ball1.drawBall();
  goal1.drawGoal();
  goal2.drawGoal();
  speler1.drawSpeler();
  speler2.drawSpeler();
}

