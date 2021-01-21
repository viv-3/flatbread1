class Ball {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'frictionAir':0.005,
          'density':1.0
      }
      this.body = Bodies.circle(x,y,r,options)
      this.x=x
      this.y=y
      this.r=r
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipse( 0, 0, this.r,this.r);
      pop();
    }
}