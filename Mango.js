class Mango{
    constructor(x,y){
        var options={
isStatic:true,
restitution:0,
friction:1,
        }
        this.image=loadImage("mango.png")
        this.r=50
        this.body=Bodies.circle(x,y,this.r,options)
        
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        
        image(this.image,pos.x,pos.y,this.r,this.r)
    }
}