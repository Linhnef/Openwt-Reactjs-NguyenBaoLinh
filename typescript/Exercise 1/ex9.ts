class theBall{
    x : number;
    y : number;
    radius : number;
    xDelta : number;
    yDelta : number;

    constructor(x : number = 0, y : number = 0, radius : number = 0,xDelta : number = 0, yDelta : number = 0){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xDelta = xDelta;
        this.yDelta = yDelta;
    }

    move = () => {
        this.x += this.xDelta;
        this.y += this.yDelta;
    }
    reflectHorizontal = () => {
        this.xDelta = -this.xDelta;
    }
    reflectVertical = () =>{
        this.yDelta = this.yDelta;
    }
}