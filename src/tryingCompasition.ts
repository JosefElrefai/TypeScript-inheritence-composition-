class Rectangle {
    constructor(public height: number, public width: number ) {}

    area(): number{
        return this.height * this.width;
    }
}

class Circle {
    width: number;
    height: number;

    constructor(diameter: number){
        this.width = diameter;
        this.height = diameter;
    }

    area(): number{
        return (this.width/2)*(this.width/2)*Math.PI;
    }
}

class Wall {
    
}

interface Shape {
    height: number
    width: number
    area(): number;
}

class Windoww {
    dimensions: Shape;
    isOpen = false;
    constructor(shape: Shape) {
        this.dimensions = shape;
    }
    
    area(): number{
        return this.dimensions.area();
    }

    toggleOpen(): void {
        this.isOpen = !this.isOpen;
    }

}


const windoww = new Windoww(new Rectangle(100, 2));
const circleWindow = new Windoww(new Circle(10));
