class Bob{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:1,
            friction: 0,
            density: 0.8,
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
        
        this.radius = 10;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
       ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        fill(255,0,255);
        pop();
    }
}