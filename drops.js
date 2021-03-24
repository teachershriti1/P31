class Drop { 
    constructor(x,y,radius){

        var opt = {
            //isStatic:false,
            //friction:0.1
            restitution:0.5
        }

        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,opt);
        World.add(world,this.body);
    }
    reposition(){
        if(this.body.position.y>900){
        Matter.Body.setPosition(this.body,{x:random(50,850),y:random(0,450)})
        }
    }

    display() {
        
        var pos = this.body.position
       
        fill("blue");
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius);
        
    }

    
}