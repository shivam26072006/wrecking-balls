const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine;
var myWorld;

function setup(){
    
    createCanvas(1200,600);
  

    myEngine = Engine.create();
    myWorld = myEngine.world;

    box1 = new Box(600,550);
    box2 = new Box(600,490);
    box3 = new Box(600,430);
    box4 = new Box(600,370);
    box5 = new Box(600,310);
    box6 = new Box(600,250);
    box7 = new Box(600,190);
    box8 = new Box(600,130);
    
    box11 = new Box(680,550);
    box21 = new Box(680,490);
    box31 = new Box(680,430);
    box41 = new Box(680,370);
    box51 = new Box(680,310);
    box61 = new Box(680,250);
    box71 = new Box(680,190);
    box81 = new Box(680,130);

    box12 = new Box(760,550);
    box22 = new Box(760,490);
    box32 = new Box(760,430);
    box42 = new Box(760,370);
    box52 = new Box(760,310);
    box62 = new Box(760,250);
    box72 = new Box(760,190);
    box82 = new Box(760,130);

    ground = new Ground(600,590);

}

function draw(){

    background("black");
    Engine.update(myEngine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box11.display();
    box21.display();
    box31.display();
    box41.display();
    box51.display();
    box61.display();
    box71.display();
    box81.display();

    box12.display();
    box22.display();
    box32.display();
    box42.display();
    box52.display();
    box62.display();
    box72.display();
    box82.display();


    ground.display();

}