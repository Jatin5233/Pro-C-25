
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper;
var ground;
var box1,box2;
var baby,talk,talk_1,shoe_1,shoe,baby_1,madeBy,madeBy_1,bg,bg_1,bg_2,hit;
var PLAY;
var END;
var gs="PLAY";
function preload()
{
hit =loadSound("headshot.mp3");
bg_1=loadImage("ghar3.jpg");
bg_2=loadImage("ghar.png");
	
baby_1=loadImage("boy10.png");
shoe_1=loadImage("slipper.png");
madeBy_1=loadImage("madeBy.jpg");
talk_1=loadImage("talk1.png");

}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
		
bg=createSprite(400,350,10,10);
bg.addImage(bg_1);
bg.scale=1;

baby=createSprite(200,500,10,10);
baby.addImage(baby_1);
baby.scale=0.4;
shoe=createSprite(-50,100,10,10);
shoe.addImage(shoe_1);
shoe.scale=0.4;
talk=createSprite(400,150,10,10);
talk.addImage(talk_1);
talk.scale=0.4;

	//Create the Bodies Here.
paper=new Paper();
ground=new Ground();
box1=new Dustbin();
box2=new BottomDustbin();
//baby=new Baby();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(gs==="PLAY"){
 if(keyDown("space")){
	 talk_1=loadImage("talk2.png");
	 talk.addImage(talk_1);
	 talk.y=590;
	 talk.x=500;
 }
if(keyDown("shift")){
	talk.visible=false;
	shoe.velocityX=5;
	shoe.visible=false;

}
if(shoe.x===240){
	shoe.visible=true;
}
if(shoe.x===290){
	 shoe.velocityY=6;
	 shoe.velocityX=-2;
}
if(shoe.isTouching(baby)){
	shoe.x=-50;
	baby_1=loadImage("boyAgain2.png");
	baby.addImage(baby_1);
	talk.visible=true;
	talk_1=loadImage("talk3.png");
	talk.addImage(talk_1);
hit.play();
	}
}
	if(keyDown("ctrl")){
		
		gs="END";
	}
	if(gs==="END"){
		bg.changeImage(bg_2);
		background(bg_2);
		paper.display();
		box2.display();
	
	
		 baby.visible=false;
	talk.visible=false;
	bg.visible=false;
	}
	


console.log(gs);
  //baby.display();
  drawSprites();
;
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2400,y:-2400});
	
	}
}

