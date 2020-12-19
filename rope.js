class Rope{
    constructor(Body1,Body2,xOffset){
        var options={
            bodyA:Body1,bodyB:Body2,pointB:{x:xOffset,y:0}

        }
        this.xOffset=xOffset
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        line(pointA.x,pointA.y,pointB.x+this.xOffset,pointB.y)
    }
}