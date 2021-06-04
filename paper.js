class paper
{

constructor(x,y,r){

var options={
    isStatics:false,
    restitution:0.3,
    friction:0,
    density:1.2
}

this.image=loadImage("paper.png");
this.r=r;
this.x=x;
this.y=y;
this.Body=Bodies.circle(this.x,this.y,(this.r/2), options);

World.add(world,this.Body);
}

display(){
    var pos = this.body.position;



    push();
    translate(pos.x,pos.y);
    Fill("white");

    imageMode(CENTER);
    image(this.image,0,0,this.r);

    pop();
}



}