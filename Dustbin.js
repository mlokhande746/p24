class Dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=100;
        this.wallThick=10;
        this.angle=0;
        this.image=loadImage("dustbingreen.png");
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThick,{isStatic:true});
        this.leftBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThick,
                      this.dustbinHeight,{isStatic:true});
        Matter.Body.setAngle(this.leftBody,this.angle);

        this.rightBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThick,
		               this.dustbinHeight,{isStatic:true});
		Matter.Body.setAngle(this.rightBody,-1*this.angle);
        World.add(world,this.bottomBody);
        World.add(world,this.rightBody);
        World.add(world,this.leftBody);
    }
    display(){
        
        var bottomPos=this.bottomBody.position;
		var leftPos=this.leftBody.position;
		var rightPos=this.rightBody.position;

			
		push()
		translate(leftPos.x, leftPos.y);
		rectMode(CENTER)
		angleMode(RADIANS)
		fill(255);
		stroke(255);
		rotate(this.angle)
        rect(0,0,this.wallThick, this.dustbinHeight);
		pop()

		push()
        translate(rightPos.x, rightPos.y);
    	rectMode(CENTER)
		stroke(255);
		angleMode(RADIANS)
		fill(255);
		rotate(-1*this.angle)
		rect(0,0,this.wallThick, this.dustbinHeight);
		pop()

		push()
		translate(bottomPos.x,bottomPos.y);
		rectMode(CENTER)
		stroke(255);
		angleMode(RADIANS)
		fill(255);
		rect(0,0,this.dustbinWidth, this.wallThick);
		imageMode(CENTER);
		image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
        pop()
    }
};