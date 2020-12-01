const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world, ground, ball



function setup() {
  createCanvas(800,400);
   engine= Engine.create();
   world= engine.world; 

   var ground_option = { 
     isStatic : true 
    
   }
   ground = Bodies.rectangle(400,390,800,20,ground_option);
   World.add(world,ground);

   var world_option = {
     restitution : 1.0
   }
   ball = Bodies.circle(400,50,40, world_option);
   World.add(world,ball);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40,40);
}