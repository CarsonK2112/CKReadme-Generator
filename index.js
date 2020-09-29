var inquirer = require("inquirer");
var fs = require("fs");
const axios = require("axios")

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Project Readme",
    message: "What is the title of your project?",
  
  },
  {
    type: "input",
    name: "Description",
    message: "How would you describe your project?",
  
  },
  {
    type: "input",
    name: "Table of Contents?",
    message: "How would you lay out your table of contents?",
  },
  {
    type: "input",
    name: "Installation",
    message: "What is the installation process of your project?",
  
  },
  {
    type: "input",
    name: "Functionality",
    message: "How does your project function?",
  
  },
  {
    type: "input",
    name: "GitHub username",
    message: "Enter your GitHub username",
  
  },
];

function askQuestions() {

  inquirer.prompt(questions).then(res => {
    console.log(res)
    let textoutput = "# "
    let toc = ""
    let rx = new RegExp(/ /g)
    for (let prop in res) {
      if (prop !== 'readme title') {
        textoutput += "## " + prop + "<br> \n" + res[prop] + "<br> \n"
        toc += "["+prop+"](#"+prop.toLowerCase().replace(rx,"-")+") \n" 
        // [Project Readme](#project-readme)
        }
        else {
          textoutput += prop + "<br> \n" + res[prop] + "<br> \n"
        }
    }
    console.log(textoutput)
    return toc + textoutput
  }).then(readmetext => {
    fs.writeFile('readme.md', readmetext, err => console.log('readme.md saved!'))
  }).catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
}

const answers = askQuestions()
// console.log(answers)

// function to initialize program
function init() {}

// function call to initialize program
init();
