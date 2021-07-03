class Ball{
constructor(x,y,r){
    var options={
        restitution:1.5
      }
      this.x=x
      this.y=y
      this.r=r
      this.body=Bodies.circle(this.x,this.y,this.r,options)
      World.add(world,this.body)





}


display(){
    fill ("orange")
 ellipseMode(RADIUS)
 ellipse(this.body.position.x,this.body.position.y,this.r,this.r)

}


}