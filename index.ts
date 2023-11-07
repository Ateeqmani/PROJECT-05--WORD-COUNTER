#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome To The Word Counter :)");
const counter:{
    sentence:string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Write SomeThing To Count Yours Words. "
    }
])

const w = counter.sentence.trim().split("")
console.log(`Your Lenght Of The Words : ${w.length}`);