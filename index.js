const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square, Svg } = require('./lib/shapes.js');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What is the logo text? (3 character maximum)',
        validate: function (input) {
            if (input.length <= 3) {
                return true;
              } else {
                return '3 character maximum.';
              }
        }
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'What is your text color?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape is for this logo?',
        choices: ['circle', 'triangle', 'square'],
        default: 'circle',
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'What shape color for the logo?'
    }
];

// TODO: Create a function to write logo file
function writeFile(fileName, svgString) {
    fs.writeFile(fileName, svgString, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

console.log('----------SVG Logo Maker----------') // Added for styling during prompts
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        let shape;
        switch (answers.shape) {
            case 'circle':
                    shape = new Circle();
                    break;
            case 'triangle':
                shape = new Triangle();
                break;
            case 'square':
                shape = new Square();
                break;
            default:
                console.log('Invalid shape');
                return;
        }
        shape.setColor(answers.shapecolor);
        const svg = new Svg(shape, answers.textcolor, answers.text);
        const svgString = svg.render();
        console.log('Generated logo.svg');
        writeFile('./examples/logo.svg', svgString); // Use user feedback for writing new file function
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log('Error with current environment'); // Prompt couldn't be rendered in the current environment
        } else {
            console.log(error);
            console.log('Something went wrong.'); // Something else went wrong
        }
    });
}

// Function call to initialize app
init();