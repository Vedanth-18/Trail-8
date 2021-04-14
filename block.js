class squareBox extends BaseClass{
    constructor(x,y){
    super(x,y,100,100);
    this.image= loadImage("assets/squareBox.png");
    }
    display(){
        super.display();
        //  var pos = this.body.position;
        //  var width = this.body.width;
        //  var height = this.body.height;
        //  imageMode(CENTER);
        //  image(this.image, pos.x, pos.y,100,80);
        //this.image.resize(2000,2000);
    }
}