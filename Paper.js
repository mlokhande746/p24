class Paper{
    constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2

    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("paper.png");
    this.body=Bodies.circle(x,y,(this.r)/2,options);
    World.add(world,this.body);
}
    display(){
      var paperpos=this.body.position;
        
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image,0,this.r,this.r);
        pop();
    }
};