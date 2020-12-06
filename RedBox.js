class RedBox {
    constructor (x,y,width,height){
        var options={
            restitution:0
        }
        this.packagebody=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        
    }
    display(){
        var pos=this.packagebody.position;
        var angle=this.packagebody.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        fill ("red");
        rect(0,0,this.width,this.height);
    pop ();
    }
    }