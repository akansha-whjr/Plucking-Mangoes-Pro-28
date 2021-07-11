class Ground{
    constructor(){
        var options={
isStatic:true
        }
        this.body=Bodies.rectangle(300,700,50,50,options)
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        fill ("Brown")
        rect(pos.x,pos.y,1000,20)
    }
}