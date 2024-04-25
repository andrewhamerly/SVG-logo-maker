const renderShape = require('./shapes.js');

describe('Shape rendering', () => {
    test('Triangle render', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.renderShape()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
    test('Circle render', () => {
        const shape2 = new Circle();
        shape2.setColor("blue");
        expect(shape2.renderShape()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
    test('Square render', () => {
        const shape3 = new Square();
        shape3.setColor("blue");
        expect(shape3.renderShape()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue" />');
    });
});
