
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var world,ground,paper,dustbin;

function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
  world = engine.world
  
  ground=new Ground(width/2,660,width,20);
  paper=new Paper(200,450,60);
  dustbin=new Dustbin(1200,650);
 
  /*var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	  width: 1200,
	  height: 700,
    wireframes: false
	  }
	});*/
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
  paper.display();
  dustbin.display();

  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
  }
}



