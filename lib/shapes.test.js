const {Square, Circle,Triangle} = require("./shapes.js");

describe('Shape', () => {
    describe('circle', () => {
        it('should produce a circle that is blue', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
    });
    describe('square', () => {
        it('should produce a square that is blue', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
    });
    });
    describe('triangle', () => {
        it('should produce a triangle that is blue', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
    });
});