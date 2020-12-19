
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope1;
var bob1,bob2,bob3,bob4,bob5;
var roof
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(width/2,200,500,20)
	rope1=new Rope(bob1.Body,roof.Body,100)
    bob1=new Bob(200,500,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display()
  drawSprites();
 
}



