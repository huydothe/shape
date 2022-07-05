//Shape
class Shape {
     color;
     filled;
     constructor(color,filled) {
         this.color=color;
         this.filled=filled;
     }
}
let shape=new Shape('red',true);


//Circle
class Circle{
    color;
    filled;
    radius;
    constructor(color,filled,radius) {
        this.filled=filled;
        this.color=color;
        this.radius=radius;
    }
    getArea=()=> Math.PI*Math.pow(this.radius,2);
    getPerimeter=()=> Math.PI*this.radius;
}
let cirle=new Circle('red', true, 100);
console.log('Chu vi hình tròn = ' + cirle.getPerimeter());
console.log('Diện tích hình tròn = '+ cirle.getArea());


//rectangle
class Rectangle {
    color;
    filled;
    width;
    length;
    constructor(color,filled,width,length) {
        this.filled=filled;
        this.color=color;
        this.width=width;
        this.length=length;
    }
    getArea=()=> this.width*this.length;
    getPerimeter=()=> (this.width+this.length)*2;
}
let rectangle= new Rectangle('blue',true,100,50);
console.log('Chu vi hình chữ nhật = ' + rectangle.getPerimeter());
console.log('Diện tích hình chữ nhật = '+ rectangle.getArea());


//square
class Square {
    color;
    filled;
    side;
    constructor(color,filled,side=1.0) {
        this.filled=filled;
        this.color=color;
        this.side=side;
    }
    getArea=()=> Math.pow(this.side,2);
    getPerimeter=()=> this.side*4;
}
let square=new Square('yellow',true);
let square1=new Square('yellow',true,50);
console.log('Chu vi hình vuông 1 = ' + square.getPerimeter());
console.log('Diện tích hình vuông 1 = '+ square.getArea());
console.log('Chu vi hình vuông 2 = ' + square1.getPerimeter());
console.log('Diện tích hình vuông 2 = '+ square1.getArea());


