class paper{
    constructor( x,y,radius){
        var options={
            isstatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle( x,y,10,options);
        this.image( "paper.png");
        World.add( world,this.body);
       
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode( RADIUS);
        image(this.image,pos.x,pos.y,20);

        pop();
    }

}