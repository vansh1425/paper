class Paper {
    constructor(x,y,r){
        var options={
           ' restitution': 0.3,
            'isStatic' :false,
            'density' : 1.2,
            'friction' :0.5
        }
        this.x=x;
        this.y=y
        this.r=r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var paperpos = this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        //fill("pink");
        stroke("pink");
        strokeWeight(3);
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 70);
        
        pop();
    }
}