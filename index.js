#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to \'CodeWithSabi\' -CLI Simple Calculator\n");
let answers = await inquirer.prompt([
    { message: "Enter your first number: ", type: "number", name: "numberOne" },
    { message: "Enter your Second number: ", type: "number", name: "numberTwo" },
    { message: "Select Operator to perform operation: ",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtration", "Division", "Multiplication"]
    },
]);
if (answers.operator === "Addition") {
    console.log(answers.numberOne + answers.numberTwo);
}
else if (answers.operator === "subtration") {
    console.log(answers.numberOne - answers.numberTwo);
}
else if (answers.operator === "Division") {
    console.log(answers.numberOne / answers.numberTwo);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.numberOne * answers.numberTwo);
}
else {
    console.log("Select again operator ");
}
