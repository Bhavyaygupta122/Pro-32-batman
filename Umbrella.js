class Umbrella{
    constructor(x,y){
        var options ={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,230,options);
        this.radius=5;  
        this.Animation=loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png",)
        World.add(world,this.body);

    }
    display(){
        
        var pos=this.body.position;
        pop()
        imageMode(CENTER);
        animation(this.Animation,pos.x,pos.y+50,100,100);
        push()
    }
}