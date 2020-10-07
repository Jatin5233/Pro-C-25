class Paper{
 constructor(x,y,r){
     var option={

'restitution':0.3,
'friction':0.5,

'density':1.2

     }
     this.body=Bodies.circle(150,100,125,option);
  
this.image=loadImage("kagaz.png");
this.r=125/2;
World.add(world,this.body);

 }
 display(){
    var pos=this.body.position;
     fill("red");
     strokeWeight(4);
   
     image(this.image,pos.x,pos.y,this.r);
 }
}