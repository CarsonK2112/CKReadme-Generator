var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "How would you describe your project?",
];

async function askQuestions() {
  for (let question of questions) {
    await inquirer.prompt([
      {
        type: "input",
        message: question,
        name: "Readme name",
      },
    ]);
  }
}

// Function has to be called outside askQuestions
// If there's an argument you put it inside the parentheses when you call the function

askQuestions()

// Next steps for askQuestions is to save the answer somewhere

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
