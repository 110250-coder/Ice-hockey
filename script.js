class Ball{
  constructor(x,y,w,h,vx,vy, colour){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.colour = (random(0,255,777))
  }

  drawBall (){
    ellipse(this.x,this.y,50,50); 
    fill (this.colour);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.y <= 25 || this.y > 475){
      this.vy= this.vy * -1;
    }

    if (this.x <= 25 || this.x > 475) {
      this.vx = this.vx * -1;
    }
  }
}

function setup(){
  createCanvas(500,500);

  ball1 = new Ball(191,102,301,30,5,5, this.colour);
}

function draw(){
  background(150);

  ball1.drawBall();
}
