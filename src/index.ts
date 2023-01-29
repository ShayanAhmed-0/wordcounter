#!/usr/bin/env node
import inquirer from "inquirer";

let count:number;
let vari:string;
let val:string;
let flag:boolean=true;
const func=async()=>{
        const fun=await inquirer.prompt({
            name:"name",
            type:"list",
            message:"Do you Want to Countinue",
            choices: ["Countinue","Exit"]
        })
        if(fun.name=="Countinue"){
            flag=true;
        }else{
            flag=false;
        }
    }

    const takeVal=async()=>{
        const Val=await inquirer.prompt([
             {
            name:"words",
            type:"string",
            message:"Enter words: ",
        },
    ])
        val =Val.words;
        console.log("total Number of words including spaces: "+val.length);
        let newVal:string[]=val.split(" ");
        let withoutspaces:number=val.length-newVal.length+1;
        console.log("total Number of words without including spaces: "+withoutspaces);
    }    
while(flag){
    await takeVal();
    await func();
}    