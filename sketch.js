const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var clicksound;

function preload() {
  clicksound = loadSound("CLICK.mp3")
}

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 75, height / 2 - 80, 60, 60);
  blower = new Blower(width / 2 - 70, height / 2 + 62, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 130, 120);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);

  //buttonPressed(blow);
  
  //button = mousePressed(blow);
  
  //button.mousePressed();

}

function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  ball.show();
  blowerMouth.show();
}

function blow() {

  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});
  
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  clicksound.play();
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});

}

