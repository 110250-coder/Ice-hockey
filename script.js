var speler1, speler2;
class Ball {
  constructor(x, y, w, h, vx, vy, colour) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.colour = "red";
  }

  drawBall() {
    fill(this.colour);
    rect(this.x, this.y, this.w, this.h);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.y <= 25 || this.y > 475) {
      this.vy = this.vy * -1;
    }

    if (this.x <= 25 || this.x > 475) {
      this.vx = this.vx * -1;
    }

    text(speler1.x, 10, 10);
    text(speler1.y, 10, 30);

    spelers.forEach((speler1) => {
      if (speler1.x < this.x + this.w && speler1.x + speler1.w > this.x) {
        if (speler1.y < this.y + this.h && speler1.y + speler1.h > this.y) {
          this.colour = "orange";        
          this.vx = this.vx * -1;
        }
      }
      else {
        this.colour = "red";
      }
    })
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
    this.x = xs;
    this.y = ys;
    this.w = 10;
    this.h = 50;
    this.controls = controls;
  }

  drawSpeler() {
    fill("cyan");

    if (this.controls == "m") {
      this.x = mouseX;
      this.y = mouseY;     

      rect(this.x, this.y, this.w, this.h);
    }

    else {
      fill("pink");
      rect(this.x, this.y, this.w, this.h);

      if (keyIsDown(LEFT_ARROW)) {
        this.x -= 5;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += 5;
      }
      if (keyIsDown(UP_ARROW)) {
        this.y -= 5;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.y += 5;
      }
    }

    if (this.x + this.w >= width) {
      this.x = width - this.w;
    }
    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.y <= 0) {
      this.y = 0;
    }
    if (this.y + this.h >= height) {
      this.y = height - this.h;
    }
  }
}

var spelers = [];
function setup() {
  createCanvas(500, 500);

  ball1 = new Ball(151, 70, 30, 30, 5, 5, this.colour);
  goal1 = new Goal(0, 225, 20, 80, this.colourg);
  goal2 = new Goal(485, 225, 15, 80, this.colourg);
  speler1 = new Speler(50, 210, "m");
  speler2 = new Speler(460, 265);
  spelers.push(speler1);
  spelers.push(speler2);
}

function draw() {
  background(150);

  ball1.drawBall();
  goal1.drawGoal();
  goal2.drawGoal();
  speler1.drawSpeler();
  speler2.drawSpeler();
}

