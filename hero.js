class Hero{
   constructor(x,y, radius){
     var options={
         isStatic:false,
         restitution:0.3,
         density:10
     }
     this.body = Bodies.circle(x, y, radius, options);
     this.x=x;
     this.y=y;
     this.radius=radius;
     this.image = loadImage("assets/hero.png");
     World.add(world, this.body);
   }
   display(){
       var pos = this.body.position;
       var radius = this.body.radius;
       imageMode(CENTER);
       image(this.image,pos.x, pos.y+50,140, 180);
   }

}