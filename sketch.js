
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

var groundObj;
var leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2


	}

	groundObj = new Ground(w/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();		
  drawSprites();
 
}

function pressed(){

	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball,{x:5,y:15},{x:0.05,y:0});
	}
}



