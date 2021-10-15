var speler1, speler2, gameState = 0;      
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

    spelers.forEach((speler1) => {
      if (speler1.x < this.x + this.w && speler1.x + speler1.w > this.x) {
        if (speler1.y < this.y + this.h && speler1.y + speler1.h > this.y) {      
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
          this.vx = this.vx * -1;
          goal1.score++;
          this.x = width/2;
          this.y = height/2;
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
    this.score=0;
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
  constructor(x, y, control) {
    this.x = x;
    this.y = y;
    this.w = 10;
    this.h = 50;
    this.control = control;
  }

  drawSpeler() {
    fill("cyan");

    if (this.control == "m") {
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
  imageend = loadImage ('Images/end.jpg.crdownload');
  hockey = loadImage ('Images/hockey.jpeg');
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
    endgame();
  }

  if (gameState == 0) {
    menu();
  }
}

function menu (){
  background(hockey);
  fill('71BFF5');
  textSize(16);
  text("Press 1 - for the menu", 50, 100);
  text("Press 2 - to start the game", 50, 120);
  text("Press 3 - to end the game", 50, 140);
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

  if(goal1.score > 2 || goal2.score > 2){
    gameState = 2;
  }

  fill("white");
  textSize(20);
  text(goal2.score, 100, height /2);
  text(goal1.score, width - 110, height /2);
}

function endgame() {
  background(imageend);
  fill('white');
  text("END GAME, press 1 to restart", 25, 40);
  x = 0;
}

function keyPressed() {

  if (keyCode == 49) {
    gameState = 0;
  }

  if (keyCode == 50) {
    gameState = 1;
    goal1.score = 0;
    goal2.score = 0;
  }

  if (keyCode == 51) {
    gameState = 2;
  }
}



