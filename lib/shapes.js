function renderShape(shape) {
    switch (shape) {
        case 'circle':
            return `circle cx="150" cy="100" r="80"`;
        case 'triangle':
            return `polygon points="150, 18 244, 182 56, 182"`;
        case 'square':
            return `rect x="75" y="25" width="150" height="150"`;
        default:
            console.log('No shape provided.');
            return '';
    };
}

function generateShape(shape) {
    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="#f5f5f5" />

    <${renderShape(shape.shape)} fill="${shape.shapecolor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textcolor}">${shape.text}</text>

    </svg>
    `;
  }
  
  module.exports = generateShape;
  module.exports = renderShape;