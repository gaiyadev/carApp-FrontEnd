const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "list",
      message: "Pick the framework",
      name: "framework",
      choices: ["react", "vue", "react-native", "nest", "express"],
    },
  ])
  .then(({ framework }) => {
    console.log(framework);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
