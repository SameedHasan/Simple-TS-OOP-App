#!/usr/bin/env node
import inquirer from "inquirer";
import { Person } from "./person.js";
import { Student } from "./student.js";
// Main function to handle user input
async function main() {
    const answer = await inquirer.prompt({
        type: "number",
        name: "action",
        message: "Enter 1 if you like to talk to others and enter 2 if you would rather keep it to yourself:",
        validate: function (input) {
            if (isNaN(input) || input <= 0) {
                return "Please enter an integer value.";
            }
            else {
                return true;
            }
        },
    });
    const myPerson = new Person();
    myPerson.askQuestion(Number(answer.action));
    console.log(`You are ${myPerson.getPersonality()}\n`);
    const myStudent = new Student();
    const { name } = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "What is your name?",
    });
    myStudent.name = name;
    console.log(`Your name is: ${myStudent.name} and your personality type is: ${myStudent.getPersonality()}\n`);
}
// Start the application
main().catch(console.error);
