var speler1, speler2, gameState = 1;
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

    if (this.y <= 25 || this.y > 350) {
      this.vy = this.vy * -1;
    }

    if (this.x <= 25 || this.x > 440) {
      this.vx = this.vx * -1;
    }

    text(speler1.x, 10, 10);
    text(speler1.y, 10, 30);

    spelers.forEach((speler1) => {
      if (speler1.x < this.x + this.w && speler1.x + speler1.w > this.x) {
        if (speler1.y < this.y + this.h && speler1.y + speler1.h > this.y) { 
          this.colour = "orange"     
          this.vx = this.vx * -1;
        }
      }
      else {
        this.colour = "red";
      }
    })

    goals.forEach((goal1) => {
      if (goal1.x < this.x + this.w && goal1.x + goal1.w > this.x) {
        if (goal1.y < this.y + this.h && goal1.y + goal1.h > this.y) { 
          this.colour = "orange"     
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
  constructor(x, y, w, h, colour) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colour = ("black");
  }

  drawGoal() {
    fill(this.colour);
    rect(this.x, this.y, 15, 80);
  }
  
  checkcollision(){
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

function preload(){
  image = loadImage('Images/image.png');
}

var spelers = [], goals = [];
function setup() {
  createCanvas(500, 400);
  
  ball1 = new Ball(151, 70, 30, 30, 3, 3, this.colour);
  goal1 = new Goal(25, 160, 20, 80, this.colour);
  goal2 = new Goal(457, 160, 15, 80, this.colour);
  speler1 = new Speler(50, 210, "m");
  speler2 = new Speler(460, 265);
  spelers.push(speler1);
  spelers.push(speler2);
  goals.push(goal1);
  goals.push(goal2);
}

function draw() {
 

  text("gameState" + gameState, 25, 25);

  if (gameState == 1) {
    game();
  }

  if (gameState == 2) {
    gameOver();
  }

  if (gameState == 0) {
    menu();
  }
}

function menu (){
  background("cyan");
  text("1. menu", 25, 65);
  text("2. start game", 25, 85);
  text("3. game over", 25, 105);
}

function game() {
  text("GAME RUNNING", 25, 45);
  background(image);

  ball1.drawBall();
  goal1.drawGoal();
  goal2.drawGoal();
  goal1.checkcollision();
  goal2.checkcollision();
  speler1.drawSpeler();
  speler2.drawSpeler();
}

function keyPressed() {

  if (keyCode == 49) {
    gameState = 0;
  }

  if (keyCode == 50) {
    gameState = 1;
  }

  if (keyCode == 51) {
    gameState = 2;
  }
}



