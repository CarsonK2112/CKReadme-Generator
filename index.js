var inquirer = require("inquirer");
var fs = require("fs");
const axios = require("axios")

// array of questions for user
const questions = [
  "What is the title of your project?",
  "How would you describe your project?",
  "What is the installation process of your project?",
  "How does your project function?",

];

const licenses = [
  "Public Domain",
  "Permissive",
  "LGPL",
  "CopyLeft",
  "Proprietary",
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
  };
  
}

async function tablecontentcreator() {
  
}

// Function has to be called outside askQuestions
// If there's an argument you put it inside the parentheses when you call the function

askQuestions()

// Next steps for askQuestions is to save the answer somewhere

// function to write README file
// Put the input into the Readme
function writeToFile(fileName, data) {}

// fs.writeFile("readme.md", process.argv[2], function(err) {
//   if (err) {
//     return console.log(err);
//   }

//   console.log("Success!")

// });

// function to initialize program
function init() {}

// function call to initialize program
init();

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl)
    .then(res => {
      const repos = res.data.map(repo => repo.name)
      
      fs.writeFile('repos.txt', repos.join('\n'), err => console.log('Repos.txt saved!'))


    });

  });
