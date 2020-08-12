class Stone{
constructor(x, y, radius) {
    var options = {
        isStatic:false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y,radius, options);
    this.radius = radius;
    this.image = loadImage("stone.png");
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}