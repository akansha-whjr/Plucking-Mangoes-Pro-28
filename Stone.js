class Stone{
    constructor(){
        var options={
isStatic:false,
restitution:0,
friction:1,
density:1.2
        }
        this.image=loadImage("stone.png")
        this.r=50
        this.body=Bodies.circle(250,480,this.r,options)
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        fill ("Brown")
        image(this.image,pos.x,pos.y,this.r,this.r)
    }
}