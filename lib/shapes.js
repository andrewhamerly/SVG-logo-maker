class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
};

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
};

class Square extends Shape {
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
    }
};

class Svg {
    constructor(shape, color, message) {
        this.shape = shape;
        this.color = color;
        this.message = message;
    }
    
    render(color, message) {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="#f5f5f5" />

        ${this.shape.render()}

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.message}</text>

        </svg>
        `;
    }
}


// Pass different variables and function to module exports.
module.exports = { Shape, Circle, Triangle, Square, Svg };