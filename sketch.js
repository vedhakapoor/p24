
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor=color(255)

	boxPosition = 900;
	BoxY = 610;

	ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.5
	}
	ball = Bodies.circle(150,500,3,ball_options);
	World.add(world,ball);

	boxLeftSprite = createSprite(boxPosition,BoxY,20,100);
	boxLeftSprite.shapeColor = "blue";

	boxleftSprite = Bodies.rectangle(boxPosition,BoxY,20,100,{isStatic:true});
	World.add(world,boxleftSprite);

	boxRightSprite = createSprite(boxPosition+200,BoxY,20,100);
	boxRightSprite.shapeColor = "blue";

	boxrightSprite = Bodies.rectangle(boxPosition+200,BoxY,20,100,{isStatic:true});
	World.add(world,boxrightSprite);

	baseBoxSprite = createSprite(boxPosition+100,BoxY+50,200,20);
	baseBoxSprite.shapeColor = "blue";

	baseboxSprite = Bodies.rectangle(boxPosition+100,BoxY+50,200,20,{isStatic:true});
	World.add(world,baseboxSprite);

	ground = Bodies.rectangle(width/2, 650, width, 10,{isStatic:true});
	World.add(world, ground);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:100,y:-100})
	}
}


