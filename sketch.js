
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,tree,boy,boyimg,stone;
var m1,m2,m3,m4,m5,m6;
var launch;
function preload()
{
	boyimg=loadImage("boy.png")

}

function setup() {
	createCanvas(1200, 700);
	boy=createSprite(350,590,10,10)
	boy.addImage(boyimg)
	boy.scale=0.16
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground();
	tree=new Tree();
	stone=new Stone();
	m1=new Mango(1040,340)
	m2=new Mango(1090,350)
	m3=new Mango(1130,360)
	m4=new Mango(1150,400)
	m5=new Mango(1050,440)
	m6=new Mango(1100,420)
	launch=new Launcher(stone.body,{x:250,y:480})
	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  //console.log(mouseX)
  ground.display();
  tree.display();
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  launch.display()
  drawSprites();
  stone.display()
  detectollision(stone,m1);
	detectollision(stone,m2);
	detectollision(stone,m3);
	detectollision(stone,m4);
	detectollision(stone,m5);
	detectollision(stone,m6);
}

function mouseReleased(){
	launch.fly();
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function detectollision(astone,amango){
	var mangoBodyPosition=amango.body.position
  var stoneBodyPosition=astone.body.position
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 console.log(amango.r+astone.r) 
  if(distance<=amango.r+astone.r)
    {
       	  Matter.Body.setStatic(amango.body,false);
    }

  }

  function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launch.attach(stone.body);
	}
  }
