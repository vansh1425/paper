class Paper {
    constructor(x,y){
        var options={
           ' restitution': 0.3,
            'isStatic' :false,
            'desity' : 1.2,
            'friction' :0.5
        }
        this.x=x;
        this.y=y
        this.r=20;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var paperpos = this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        fill("pink");
        stroke("pink");
        strokeWeight(3);
        ellipse(0,0,this.r,this.r);
    }
}