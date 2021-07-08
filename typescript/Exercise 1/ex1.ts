/**
 * The Circle class models a circle with a radius and color.
 */
class Circle {  // Save as "Circle.java"
    // private instance variable, not accessible from outside this class
    radius : number;
    color : String;
    constructor(radius : number = 1,color : String = 'red'){
        this.radius = radius;
        this.color = color;
    }
    setRadius(radius : number){
        this.radius = radius;
    }

    setColor(color : String){
        this.color = color; 
    }
    
    /** Returns the radius */
     getRadius = () =>  this.radius;
    
    /** Returns the area of this Circle instance */
     getArea = () => this.radius*this.radius*Math.PI;
 }
export default Circle;