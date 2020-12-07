
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperobject,groundobject;
var dustbinobject;
var world,bin1,bin2,bin3,binImg;
function preload(){
 binImg = loadImage("dustbin.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
    engine = Engine.create();
	world = engine.world;

	groundobject=new Ground(width/2,672,width,10);
	
   paperobject = new Paper(200,670,40);
   dustbinobject = createSprite(964,520,20,20);
   dustbinobject.addImage(binImg);
   dustbinobject.scale=0.45;
   
   bin1 = new dustbin(902,505,10,120);
   bin2 = new dustbin(962,565,130,10);
   bin3 = new dustbin(1024,505,10,120);

 
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
  bin1.display();
  bin2.display();
  bin3.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85})
	}
}



