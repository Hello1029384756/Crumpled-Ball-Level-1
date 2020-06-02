const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var dustbin;
var ball;
var ground

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
	world = engine.world;

	ball = new Ball(400,200,30);
	dustbin = new Bin(800,300,50,50);
	console.log(dustbin);
	
	var options ={
		isStatic: true
	}

	ground = Bodies.rectangle(600,370, 1200, 10, options);
	World.add(world, ground);
}

function draw () {
	background(225,225,0);

	Engine.update(engine);

	ball.display();
	dustbin.display();
	//bin.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85})
	}
}