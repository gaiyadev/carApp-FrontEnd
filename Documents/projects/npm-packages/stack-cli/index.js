#!/usr/bin/env node
const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");
const clear = require("clear");
const { fs, writeFileSync } = require("fs");
var clone = require("git-clone");

const log = console.log;
clear();

console.log(
  chalk.blue(figlet.textSync("STACK CLI", { horizontalLayout: "full" }))
);
inquirer
  .prompt([
    {
      type: "list",
      message: "Pick a framework",
      name: "framework",
      choices: ["react", "vue", "react-native", "nest", "express", "angular"],
    },
  ])
  .then(({ framework }) => {
    switch (framework) {
      case "react":
        inquirer
          .prompt({
            type: "input",
            message: "Project name",
            name: "project",
            validate: function (input) {
              var projectRegex = /^[a-zA-Z\-_]+$/;
              var done = this.async();

              if (!input) {
                done(log(chalk.red.bold("Project name is required")));
                return;
              } else if (!projectRegex.test(input)) {
                done(log(chalk.red.bold("Invalid Project name")));
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            },
          })
          .then(({ project }) => {
            const path = process.cwd();
            clone("https://github.com/gaiyadev/vidlyAPI.git", project);
            writeFileSync(path + project);
          })
          .catch((error) => {
            if (error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else went wrong
            }
          });
        break;
      case "vue":
        inquirer
          .prompt({
            type: "input",
            message: "Project name",
            name: "project",
            validate: function (input) {
              var projectRegex = /^[a-zA-Z\-_]+$/;
              var done = this.async();

              if (!input) {
                done(log(chalk.red.bold("Project name is required")));
                return;
              } else if (!projectRegex.test(input)) {
                done(log(chalk.red.bold("Invalid Project name")));
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            },
          })
          .then(({ project }) => {
            console.log(project);
          })
          .catch(() => {});
        break;
      case "express":
        inquirer
          .prompt({
            type: "input",
            message: "Project name",
            name: "project",
            validate: function (input) {
              var projectRegex = /^[a-zA-Z\-_]+$/;
              var done = this.async();

              if (!input) {
                done(log(chalk.red.bold("Project name is required")));
                return;
              } else if (!projectRegex.test(input)) {
                done(log(chalk.red.bold("Invalid Project name")));
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            },
          })
          .then(({ project }) => {
            console.log(project);
          })
          .catch(() => {});
        break;
      case "angular":
        inquirer
          .prompt({
            type: "input",
            message: "Project name",
            name: "project",
            validate: function (input) {
              var projectRegex = /^[a-zA-Z\-_]+$/;
              var done = this.async();

              if (!input) {
                done(log(chalk.red.bold("Project name is required")));
                return;
              } else if (!projectRegex.test(input)) {
                done(log(chalk.red.bold("Invalid Project name")));
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            },
          })
          .then(({ project }) => {
            console.log(project);
          })
          .catch(() => {});
        break;
      case "nest":
        inquirer
          .prompt({
            type: "input",
            message: "Project name",
            name: "project",
            validate: function (input) {
              var projectRegex = /^[a-zA-Z\-_]+$/;
              var done = this.async();

              if (!input) {
                done(log(chalk.red.bold("Project name is required")));
                return;
              } else if (!projectRegex.test(input)) {
                done(log(chalk.red.bold("Invalid Project name")));
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            },
          })
          .then(({ project }) => {
            console.log(project);
          })
          .catch(() => {});
        break;
      case "react-native":
        inquirer
          .prompt({
            type: "input",
            message: "Project name",
            name: "project",
            validate: function (input) {
              var projectRegex = /^[a-zA-Z\-_]+$/;
              var done = this.async();
              if (!input) {
                done(log(chalk.red.bold("Project name is required")));
                return;
              } else if (!projectRegex.test(input)) {
                done(log(chalk.red.bold("Invalid Project name")));
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            },
          })
          .then(({ project }) => {
            console.log(project);
          })
          .catch(() => {
            return;
          });
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
