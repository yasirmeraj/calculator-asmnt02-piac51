import inquirer from "inquirer";
import { sum, subtract, multiply, divide } from "./calculator.js";
let loop = true;
while (loop) {
    let v_answers = await inquirer.prompt([
        //Take Input for number01
        {
            type: "number",
            name: "num1",
            message: "Enter first number:"
        },
        //Take Input for number02
        {
            type: "number",
            name: "num2",
            message: "Enter second number:"
        },
        {
            type: "list",
            name: "operator",
            message: "Select Arithmetic Operation:",
            choices: ["+", "-", "*", "/", "e"]
        }
    ]);
    //Check Addition Operator is Selected
    if (v_answers.operator === "+") {
        console.log(`${v_answers.num1} + ${v_answers.num2} = `
            + sum(v_answers.num1, v_answers.num2));
    }
    //Check Subtraction Operator is Selected
    else if (v_answers.operator === "-") {
        console.log(`${v_answers.num1} - ${v_answers.num2} = `
            + subtract(v_answers.num1, v_answers.num2));
    }
    //Check Multiplication Operator is Selected
    else if (v_answers.operator === "*") {
        console.log(`${v_answers.num1} * ${v_answers.num2} = `
            + multiply(v_answers.num1, v_answers.num2));
    }
    //Check Division Operator is Selected
    else if (v_answers.operator === "/") {
        console.log(`${v_answers.num1} / ${v_answers.num2} = `
            + divide(v_answers.num1, v_answers.num2));
    }
    //Check Exit condition
    else if (v_answers.operator === "e") {
       
        loop=false;
    }
} //end of while loop
