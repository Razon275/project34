const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var Background,Monster1Image,Monster2Image,SuperheroImage;
var Superhero,blocks,fly;
function preload()
{
	SuperheroImage=("images/Superhero-01.png")
	BackGround=("images/Gamingbackground.png")
}

function setup() {
	createCanvas(2000, 800);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Superhero=new Hero(200,200,80,80)
    fly=new Fly(Superhero.body,{x:500,y:50})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(Background);
  Superhero.display();
  fly.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(Superhero.body,{x:mouseX,y:mouseY});
}