class Launcher{
    constructor(body,p){
        var options={
            bodyA:body,
            pointB:p,
            stiffness:0.004,
            length:1
        }
        this.body=body;
        this.point=p;

        this.constraint=Matter.Constraint.create(options);
        World.add(world,this.constraint)
    }

    display(){
        var pointA=this.body.position;
        var pointB=this.point
        strokeWeight(2)
        //line (pointA.x, pointA.y,pointB.x,pointB.y)
    }

    attach(body){
		this.constraint.bodyA=body;
	}

	fly()
	{
		this.constraint.bodyA=null;
	}
}