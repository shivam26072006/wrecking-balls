class Box{
    constructor(x,y){

    var options = {
        restitution : 1,
        friction : 1,
        density : 1
    }

    this.body = Bodies.rectangle(x,y,60,60,options);
    this.width = 60;
    this.height = 60; 
    World.add(myWorld,this.body);
}

display(){
 
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    rotate(angle);
    fill("white");
    stroke("red");
    strokeWeight(3);
    rect(0,0,this.width,this.height);
    pop();

}

}