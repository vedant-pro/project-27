
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
	bob1=new Bob(200,500,25)
	bob2=new Bob(150,500,25)
	bob3=new Bob(100,500,25)
	bob4=new Bob(50,500,25)
	bob5=new Bob(0,500,25)
	rope1=new Rope(bob1.Body,roof.Body,100)
	rope2=new Rope(bob2.Body,roof.Body,50)
	rope3=new Rope(bob3.Body,roof.Body,0)
	rope4=new Rope(bob4.Body,roof.Body,-50)
	rope5=new Rope(bob5.Body,roof.Body,-100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob5.Body,bob5.Body.position,{x:-30,y:-40})
	}
}



