const inquirer = require('inquirer');
const fs = require('fs');
const { renderSVG } = require('./lib/shapes.js');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter text for Logo (no more than 3 characters): ',
            name: 'logoText',
            validate: textInput => {
                if (textInput && textInput.length <= 3){
                    return true
                } else {
                    console.log('please use 3 characters or less')
                    return false
                };
            }
        },
        {
            type: 'input',
            message: 'Enter text color (or hexidecimal): ',
            name: 'textColor',
            default: 'white',
        },
        {
            type: 'list',
            message: 'Select a shape',
            choices: ['triangle', 'square', 'circle'],
            name: 'logoShape',
            default: 'circle'
        },
        {
            type: 'input',
            message: 'Enter shape color (or hexidecimal)',
            name: 'shapeColor',
            default:'blue'
        }
    ])
    .then((answers) => {
        console.log(answers)
        const svgFinal = renderSVG(answers);

        fs.writeFile('./examples/logo.svg', svgFinal, (err) => 
        err ? console.log(err) : console.log('Succesfully Generated!')
        );
    })
    .catch((error) => {
        if (error) {
            console.log(error)
        }
    });
}

questions();