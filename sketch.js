const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;

function setup() {
createCanvas(1800, 600);
engine = Engine.create();
world = engine.world;
ground=new ground(900,580,width,10);
paper=new paper(300,545,5);

dustbin2=new dustbin( 950,575,10,60);

Engine.run(engine);  
}

function draw() {
background(0);
paper.display();
ground.display();


dustbin2.display();

keyPressed();
drawSprites();
}
function keyPressed(){
if (keyDown===UP_ARROW){   
Matter.Body.applyForce( paper.body,paper.body.position,{ x:85,y:-85})
}
}


