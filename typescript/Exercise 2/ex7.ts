class MyPoint{
    x : number;
    y : number;

    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }
}

class MyLine{
    begin : MyPoint;
    end : MyPoint;
    constructor(begin : MyPoint,end : MyPoint){
        this.begin = begin;
        this.end = end;
    }
}

