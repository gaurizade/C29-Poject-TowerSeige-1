const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polyImg
function preload() {
    polyImg = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,350,300,10);

    box1=new Box(720,280,40,40)
    box2=new Box(760,280,40,40)
    box3=new Box(800,280,40,40)
    box4=new Box(840,280,40,40)
    box8=new Box(880,280,40,40)
    box5=new Box(740,230,40,40)
    box6=new Box(780,230,40,40)
    box9=new Box(820,230,40,40)
    box10=new Box(860,230,40,40)
    box7=new Box(760,190,40,40)
    box11=new Box(800,190,40,40)
    box12=new Box(840,190,40,40)
    box13=new Box(820,150,40,40)
    box14=new Box(780,150,40,40)
    box15=new Box(800,110,40,40)
    
    
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon)
    
    slingShot=new SlingShot(polygon,{x:100, y:200})
   
}

function draw(){
    background("white");
    Engine.update(engine);
   
    ground.display();
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

    slingShot.display();

    imageMode (CENTER)
    image(polyImg,polygon.position.x, polygon.position.y,40,40);


}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

