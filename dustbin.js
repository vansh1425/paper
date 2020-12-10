class dustbin {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=200;
        this.height=100;
        this.Thickness=20;
       // this.angle=0;
        
       this.image = loadImage("dustbin.png");
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.Thickness,{isStatic:true})
        this.leftWallBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.Thickness, this.height, {isStatic:true})
        //Matter.Body.setAngle(this.leftWallBody,this.angle);

        this.rightWallBody = Bodies.rectangle(this.x + this.width/2,this.y-this.height/2,this.Thickness, this.height,{isStatic:true})
        //Matter.Body.setAngle(this.rightWallBody,-1*this.angle);
        this.imageBody = Bodies.rectangle(this.x,this.y,this.width/2,this.height/2);
          World.add(world,this.bottomBody);
          World.add(world,this.leftWallBody);
          World.add(world,this.rightWallBody);
            
    }
    display(){
        var posbottom = this.bottomBody.position;
        var posleft = this.leftWallBody.position;
        var posright = this.rightWallBody.position;
        push();
        translate(posleft.x,posleft.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("red");
        stroke("red");
        rotate(this.angle);
        //rect(0,0,this.Thickness,this.height);
             
        pop();

        push();
        translate(posright.x,posright.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("red");
        stroke("red");
        rotate(-1*this.angle);
        //rect(0,0,this.Thickness,this.height);
        pop();

        push();
        translate(posbottom.x,posbottom.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("red");
        stroke("red");
        //rect(0,0,this.width,this.Thickness);
        imageMode(CENTER);
        image(this.image, 0, 0, 170,170);
        
        pop();
    }
}