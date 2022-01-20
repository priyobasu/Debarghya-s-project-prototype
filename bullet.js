class Bullet
{
    constructor(x,y,r)
    {
        var options={
            isStatic:true,
        }
     this.x = x;
     this.y = y;
     this.r=r;
     this.image = loadImage("j6-removebg-preview.png");
     this.body = Bodies.circle(this.x,this.y,this.r,options);
     World.add(world, this.body);
    }
    
    display()
    {
    var bulletPos = this.body.position;
    push();
    translate(bulletPos.x,bulletPos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.r*2,this.r*2);
    pop();
    }


}