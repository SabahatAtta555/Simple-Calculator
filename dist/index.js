#! /usr/bin/env node
import { answers } from "./add.js";
console.log("\n\tWelcome to \'CodeWithSabi\' -CLI Simple Calculator\n");
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
