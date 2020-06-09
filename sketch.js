const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,platform1,platform2,sling1,box,player,playerimg;

function preload(){
     playerimg = loadImage("hex.png")
}

function setup() {
	createCanvas(window.innerWidth,window.innerHeight);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(window.innerWidth/2,window.innerHeight,window.innerWidth,30);

  platform1 = new Ground(500,450,270,20);

  platform2 = new Ground(1150,300,270,20);

  player = new Poly();

  

  // Base Layer
  box = new Box(600,430,0,255,255);
  box1 = new Box(390,430,255,182,193);
  box2 = new Box(420,430,0,255,255);
  box3 = new Box(450,430,255,182,193);
  box4 = new Box(480,430,0,255,255);
  box5 = new Box(510,430,255,182,193);
  box6 = new Box(540,430,0,255,255);
  box7 = new Box(570,430,255,182,193);

  // 2nd layer

  box8 = new Box(405,390,135,206,235);
  box9 = new Box(435,390,69,69,69);
  box10 = new Box(465,390,135,206,235);
  box11 = new Box(495,390,69,69,69);
  box12 = new Box(525,390,135,206,235);
  box13 = new Box(555,390,69,69,69);
  box14 = new Box(585,390,135,206,235);

  // 3rd layer

  box15 = new Box(455,350,255,182,193);
  box16 = new Box(485,350,69,69,69);
  box17 = new Box(515,350,69,69,69);
  box18 = new Box(545,350,255,182,193);

  //Last layer 

  box19 = new Box(500,310,0,255,255);

    // 2nd Tower Base Layer
    box20 = new Box(1250,260,0,255,255);
    box21 = new Box(1010,260,255,182,193);
    box21 = new Box(1040,260,0,255,255);
    box22 = new Box(1070,260,255,182,193);
    box23 = new Box(1100,260,0,255,255);
    box24 = new Box(1130,260,255,182,193);
    box25 = new Box(1160,260,0,255,255);
    box26 = new Box(1190,260,255,182,193);
    box39 = new Box(1220,260,0,255,255);
  
    // 2nd layer
  
    box27 = new Box(1055,220,135,206,235);
    box28 = new Box(1085,220,69,69,69);
    box29 = new Box(1115,220,135,206,235);
    box30 = new Box(1145,220,69,69,69);
    box31 = new Box(1175,220,135,206,235);
    box32 = new Box(1205,220,69,69,69);
    box33 = new Box(1235,220,135,206,235);
  
    // 3rd layer
  
    box34 = new Box(1105,180,255,182,193);
    box35 = new Box(1135,180,69,69,69);
    box36 = new Box(1165,180,69,69,69);
    box37= new Box(1195,180,255,182,193);
  
    //Last layer 
    box38 = new Box(1150,138,0,255,255);

 sling1 = new SlingShot(player.body,{x:100,y:500});

	 
}


function draw() {

  background(0);
  Engine.update(engine);

  ground.display();
  platform1.display();
  platform2.display();



  

  push();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();

  

  

  player.display();

  sling1.display();

}
function mouseDragged(){
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling1.fly();
}
