export let answers= await inquirer.prompt([
        {  message: "Enter your first number: ",type:"number",name: "numberOne"},
        {  message: "Enter your Second number: ",type:"number",name: "numberTwo"},
        {message: "Select Operator to perform operation: ",
            type:"list",
            name: "operator",
            choices:["Addition","subtration","Division","Multiplication"]
            
        },
    ]);
    