
class Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor;
    }
    setColor(color){
        this.shapeColor = color;
    }
}

class Circle extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }
        render(){
            return(`<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`)
    }
}

class Triangle extends Shape {
    constructor(shapeColor){
        super(shapeColor)
        }
        render(){
            return (`<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`)
    }
}

class Square extends Shape {
    constructor(shapeColor){
        super(shapeColor)
        }
        render(){
            return (`<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />`)
    }
}

function myLogo(logoShape, shapeColor){
    let choiceLogo;
        if(logoShape == "circle"){
            choiceLogo = new Circle(shapeColor);
        } else if (logoShape == "triangle"){
            choiceLogo = new Triangle(shapeColor);
        } else {
            choiceLogo = new Square(shapeColor);
        }
            return choiceLogo;
};

function renderSVG({ logoText, textColor, logoShape, shapeColor }){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    ${myLogo(logoShape, shapeColor).render()}
    
    <text x="150" y="120" font-size="70" text-anchor="middle" fill="${textColor}">${logoText}</text>

    </svg>`
}


module.exports = {renderSVG, Circle, Triangle, Square}