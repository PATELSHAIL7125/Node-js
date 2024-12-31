console.log("Hey! There i am a js")
//  NODE JS IS MAKING WITH THE V8 ENGINE IS EMBEDDED WITH C++ BUT NODE JS WORK WITH THE 
// SEVER SIDE THERE FOR LIKE DOM MANIPULATION IS UI/FRONTEND SIDE WORK THIS ALL ARE THE FUNCTIONALITY 
// IS REMOVED IN THE NODE JS AND ADD THE FUNCTIONALITY OF SERVER SIDE 

// NODE JS IS THE RUN TIME ENVIROMENT OF THE JAVASCRIPT 

// NPM -NODE PACKAGE ENVIROMENT WHEN WE CREATE THE PROJECT THEN WE NEED TO INSTALL THE NPM
// NPM INIT is intailize the project and create the package.json file


// if i use math.js file in the hello.js file then i need to import the math.js file in the hello.js file
//and i  can use require function 

const math = require("./math")
// console.log(math.add(2,3))
console.log(math.sub(2,3))
console.log("Math value is ",math)


