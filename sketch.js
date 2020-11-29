
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperobject,groundobject;
var dustbinobject;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
    engine = Engine.create();
	world = engine.world;

	groundobject=new Ground(width/2,670,width,10);
	dustbinobject= new dustbin(1200,650);
   paperobject = new Paper(200,450,40);
   
   var render =Render.create({
	   element:document.body,
	   engine:engine,
	   options:{
		   width:1200,
		   height:700,
		   wireframes:false
	   }
   });
   Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paperobject.display();
  dustbinobject.display();
  groundobject.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85})
	}
}



