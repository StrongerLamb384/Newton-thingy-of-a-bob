
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob = new Bob(400,400);
bob2 = new Bob(420,400);
bob3 = new Bob(380,400);
bob4 = new Bob(440,400);
bob5 = new Bob(360,400)
roof = new Roof(400,250,120,20);
rope = new Rope(bob.body,roof.body,0,0);
rope1 = new Rope(bob2.body,roof.body,+20,0);
rope2 = new Rope(bob3.body,roof.body,-20,0);
rope3 = new Rope(bob4.body,roof.body,+40,0);
rope4 = new Rope(bob5.body,roof.body,-40,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
roof.display();
bob.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();


 
}

function keyPressed(){
	if(keyCode = UP_ARROW){
Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-10,y:-10})
 }
}

