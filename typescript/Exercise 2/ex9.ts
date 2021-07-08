class MyPoint2{
    x : number;
    y : number;

    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }
}

class MyTriangle{
    v1 : MyPoint;
    v2 : MyPoint;
    v3 : MyPoint;

    constructor(v1 : MyPoint2,v2 : MyPoint2,v3 : MyPoint2){
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }
}

