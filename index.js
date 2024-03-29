const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Rectangle, Square, Triangle } = require('./lib/shapes');
const questions = require('./lib/questions.js');


const init = () => {

    inquirer.prompt(questions)
    .then((data) => {
        console.log("Creating svg logo...");
        switch (`${data.shape}`) {
            case 'Circle':
                console.log("Creating a circle...");
                const circle = new Circle(data.fill, data.text, data.textColor );
                fs.writeFile("circle.svg", circle.getSVG(), (err) => {
                    if (err) throw err;
                    console.log("Circle created successfully!");
                });
                break;
           
            case 'Square':
                console.log("Creating a square...");
                const square = new Square(data.fill, data.text, data.textColor );
                fs.writeFile("square.svg", square.getSVG(), (err) => {
                    if (err) throw err;
                    console.log("Square created successfully!");
                });
                break;
            case 'Triangle':
                console.log("Creating a triangle...");
                const triangle = new Triangle(data.fill, data.text, data.textColor);
                fs.writeFile("triangle.svg", triangle.getSVG(), (err) => {
                    if (err) throw err;
                    console.log("Triangle created successfully!");
                });
                break;
        }
    });
    };

init();
 