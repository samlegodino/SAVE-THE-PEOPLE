var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var invis;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(RIGHT);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

invis=createSprite(0,700,10,1000000000000000000);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CORNER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
 
 
  packageSprite.collide(groundSprite);
  packageSprite.collide(invis);

  invis.display(false);
  drawSprites();
 

 if (packageSprite.x - groundSprite.x < groundSprite.width/2 + packageSprite.width/2
	&& groundSprite.x -packageSprite.x < groundSprite.width/2 + packageSprite.width/2) {
 packageSprite.velocityX = packageSprite.velocityX * (-1);
  groundSprite.velocityX = groundSprite.velocityX * (-1);

 
}
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



