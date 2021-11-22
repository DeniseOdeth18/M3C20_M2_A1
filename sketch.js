
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup(){
  createCanvas(400,420);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ground_options ={
    isStatic: true
  }

  //opcion de restitucion para la roca

  ground = Bodies.rectangle(0,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,4,ball_options);
  World.add(world,ball);

  //cuerpo de la pared y añadirla al mundo

  //Cuerpo de roca y añadirla al mundo
  

}

function draw() 
{
  background(51);
 
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30);

  rect(ground.position.x,ground.position.y,400,20);

  //funcion ellipse que tome la posicion x e y de la roca
  

}

