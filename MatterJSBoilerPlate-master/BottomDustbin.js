class BottomDustbin{
    constructor(){
    var options={
        'isStatic':true
    }
    push();
    this.body1=Bodies.rectangle(width/2+200,540,200,20,options);
    this.image=loadImage("dustbin.png");
    this.width1=300;
    this.height1=300;
   World.add(world,this.body1);
    pop();
}

display(){
var pos=this.body1.position;

imageMode(CENTER);
image(this.image,pos.x,pos.y,this.width1,this.height1);
}
}