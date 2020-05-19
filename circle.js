class Circle{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
        }
        this.body = Bodies.ellipse(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        
        rectMode(CENTER);
        
        ellipse(this.body.position.x,this.body.position.y,this.radius.x,this.radius.y);
        
        
        
        
      }
}