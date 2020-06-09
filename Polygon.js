class Poly{
    constructor(){

        var options = {
            density:0.7,
            friction:0.1
        }

        this.body = Bodies.rectangle(100,500,70,70,options);
        this.image = loadImage("hex.png");


        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,80,80);
    }
}