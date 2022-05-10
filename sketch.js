
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola;
var engine;
var world;
var chao;
var parede1;
var parede2;
function preload()


{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var bola_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	var chao_options={
		isStatic:true
		
	}
	
   parede1=Bodies.rectangle(700,height-50,20,220,chao_options);
   parede2=Bodies.rectangle(790,height-50,20,220,chao_options);



   bola=Bodies.circle(300,30,20,bola_options);

 chao=Bodies.rectangle(width/2,height-50,width,20,chao_options);


  World.add(world,bola);
  World.add(world,chao);
  World.add(world,parede1);
  World.add(world,parede2)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  fill("yellow")
  rect(chao.position.x,chao.position.y,width,20);
  circle(bola.position.x,bola.position.y,20)
  rect(parede1.position.x,parede1.position.y,20,220)
   rect(parede2.position.x,parede2.position.y,20,220)
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
     Matter.Body.applyForce(bola,bola.position,{x:56,y:-56})



	}
}


