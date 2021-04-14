class Monster{
    constructor(x,y,radius){
        this.monster = Bodies.circle(x, y, radius, {isStatic:true, friction:0.2, density:2, restitution:0.6});
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.image = loadImage("assets/monster.png");
        World.add(world, this.monster);
    }
    display(){
        var pos = this.monster.position;
        var radius = this.monster.radius;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 320, 400);
    }
}