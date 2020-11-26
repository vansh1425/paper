
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobject,ground;
var box1,box2,box3;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	box1 = createSprite(330,610,20,100);
	 box1.shapeColor=color(255,0,0);
	 box2 = createSprite(430,650,200,20);
	 box2.shapeColor=color(255,0,0);
	 box3 = createSprite(520,610,20,100);
	 box3.shapeColor=color(255,0,0);
   paperobject = new Paper(200,200);
   
   Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paperobject.display();
  
 keyPressed();
 drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:385,y:285})
	}
}



