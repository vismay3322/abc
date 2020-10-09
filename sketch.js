
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var GROUND;
//var DIVISION;
var plinko;
var divisions=[]

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	GROUND = new Ground(400,790,1000,20);
	divisions = new Division(5,600,10,400);
	plinko = new Plinko(200,200,10);

	
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  for (var k = 0; k < divisions.length; k++)
   { divisions[k].display(); }

  GROUND.display();
  divisions.display();
  plinko.display();

  
  drawSprites();
 
}



