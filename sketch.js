const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1, button2
var dustbin1
var dustbin2

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  var ball_options={
    restitution:0,
    friction:0,
    density:0.8

  }
  ball= Bodies.circle(200,100,20,ball_options)
 

  
  World.add (world,ball)
  ground =new Ground(width/2,670,1600,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,600,20);
 dustbin1= new Ground (800,640,10,50)
 dustbin2=new Ground(900,640,10,50);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  
}

function draw() 
{
  background(51);
  
  Engine.update(engine);
  ground.show();
  top_wall.show();
  dustbin1.show();
  dustbin2.show();
  ellipse(ball.position.x,ball.position.y,20);
 

}

function keyPressed(){
  if (keyCode===(UP_ARROW))
  Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:-15})
}



