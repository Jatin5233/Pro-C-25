class Dustbin{
    constructor(){
    var options={
        'isStatic':true
    }
   
    this.body2=Bodies.rectangle(500,500,20,100,options);
    this.width2=20;
    this.height2=100;
    
    this.body3=Bodies.rectangle(700,500,20,100,options);
    this.width3=20;
    this.height3=100;
    

  
    World.add(world,this.body2);
    World.add(world,this.body3);
    }
display(){
     var pos=this.body1.position;
     var pos2=this.body2.position;
     var pos3=this.body3.position;

    fill("white");
   
   
   rectMode(CENTER);
    rect(pos2.x,pos2.y,this.width2,this.height2);
    rect(pos3.x,pos3.y,this.width3,this.height3);
}
};