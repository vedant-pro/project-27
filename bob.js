class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false
            
        }
        this.Body=Bodies.circle(x,y,r,options)
        World.add(world,this.Body)
        this.r=r
    }
    display(){
        var pos=this.Body.position
        push()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}