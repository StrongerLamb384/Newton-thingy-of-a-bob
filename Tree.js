class Tree{
    constructor(x,y){
        var options = {
            isStatic :true
        }
        this.body = Bodies.rectangle(x,y,100,600,options);
        this.width = 100;
        this.height = 600;
        this.image = loadImage("tree.png");
        World.add(world,this.body);

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        this.image(this.image,0,0,this.width,this.height);
        pop();
    }
}