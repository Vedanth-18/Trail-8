class Chain{
    constructor(bodyA, pointB){
       var options={
           bodyA: bodyA,
           pointB:pointB,
           length:70
       }
       this.chain =Constraint.create(options);
       this.bodyA = bodyA;
       this.pointB=pointB;
       World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
     if(this.chain.bodyA){
            var bodyA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(2);
            stroke(255, 255, 255);
            fill(255, 255, 255);
            line(bodyA.x-50,bodyA.y+30, pointB.x-55, pointB.y);
            pop();
     } 
    }
    attach(body){
        this.chain.bodyA=body;
    }
}