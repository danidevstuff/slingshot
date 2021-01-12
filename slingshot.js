class Slingshot{
    constructor(bodyA, pointB){
        let options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        };
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world , this.sling);
    };
    fly(){
        this.sling.bodyA = null;
    };
    display(){
        if(this.sling.bodyA){
            let pointA = this.sling.bodyA.position;
            let pointB = this.pointB;
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        };
    }
}