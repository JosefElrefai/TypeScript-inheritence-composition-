"use strict";
var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.area = function () {
        return this.height * this.width;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(diameter) {
        this.width = diameter;
        this.height = diameter;
    }
    Circle.prototype.area = function () {
        return (this.width / 2) * (this.width / 2) * Math.PI;
    };
    return Circle;
}());
var Wall = /** @class */ (function () {
    function Wall() {
    }
    return Wall;
}());
var Windoww = /** @class */ (function () {
    function Windoww(shape) {
        this.isOpen = false;
        this.dimensions = shape;
    }
    Windoww.prototype.area = function () {
        return this.dimensions.area();
    };
    Windoww.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return Windoww;
}());
var windoww = new Windoww(new Rectangle(100, 2));
var circleWindow = new Windoww(new Circle(10));
