var inquirer = require("inquirer");
var fs = require("fs");

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
  {
    type: "input",
    name: "License",
    message: "Enter your license",
  },
  {
    type: "input",
    name: "Contributions",
    message: "Who/what contributed to the completion of this project?",
  },
  {
    type: "input",
    name: "Tests",
    message: "How can this app be tested?",
  },
  {
    type: "input",
    name: "Questions",
    message: "Please enter your email address and explain any way in which you can be reached.",
  },
];

function askQuestions() {
  inquirer
    .prompt(questions)
    .then((res) => {
      console.log(res);
      let textoutput = "# ";
      let toc = "";
      let rx = new RegExp(/ /g);
      for (let prop in res) {
        console.log(prop)
         if (prop === "License"){
          textoutput += "[![Generic badge](https://img.shields.io/badge/License-"+res[prop]+"-GREEN.svg)](https://shields.io/)" 
        } else if (prop !== "readme title") {
          textoutput += "## " + prop + "<br> \n" + res[prop] + "<br> \n";
          toc +=
            "[" + prop + "](#" + prop.toLowerCase().replace(rx, "-") + ") \n";
        }
         else {
          textoutput += prop + "<br> \n" + res[prop] + "<br> \n";
        }
      }
      console.log(textoutput);
      return toc + textoutput;
    })
    .then((readmetext) => {
      fs.writeFile("readme.md", readmetext, (err) =>
        console.log("readme.md saved!")
      );
    })
    .catch((error) => {
      if (error.isTtyError) {
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
