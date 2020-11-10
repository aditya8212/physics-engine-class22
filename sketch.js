const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;
var myengine, myworld,ground;
function setup() {
  createCanvas(400,400);

  myengine = Engine.create();  //.world
  myworld = myengine.world;

  var ground_options={
    isStatic:true
  }

  ground = Bodies.rectangle(200,380,400,40,ground_options);

  World.add(myworld,ground);

  var ball_options ={
    restitution:1
  }

  ball = Bodies.circle(200,50,20,ball_options);

  World.add(myworld,ball);
}

function draw() {
  background("black");
  Engine.update(myengine);

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);

  fill("aquamarine");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}