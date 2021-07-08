class Mypoint{
    x : number;
    y : number;

    constructor(x : number = 0, y : number = 0){
        this.x = x;
        this.y = y;
    }
}


class MyCircle{
    center : Mypoint;
    radius : number;
    constructor(radius : number = 1,x? : Mypoint | number,y? : number){
        if(typeof x == 'number'){
            this.center = new Mypoint(x,y);
        }else{
            this.center = x;
            this,radius = radius;
        }
    }
    toString = () => this.radius; 
}
const m = new Mypoint(2,6)
const c = new MyCircle(2,m);
const c2 = new MyCircle(2,3,6);
console.log(c.toString());

