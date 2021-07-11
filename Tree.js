class Tree{
    constructor(){
        var options={
isStatic:true
        }
        this.image=loadImage("tree.png")
        this.body=Bodies.rectangle(1000,300,50,50,options)
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        image(this.image,pos.x,pos.y,200,400)
    }
}