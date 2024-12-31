const fs = require('fs');// it is a built in object and we import and use a module 

// for create a file 
// IT IS A SYNCHRONOUS CALL
// fs.writeFileSync('file.txt', 'Hello World');// it is a synchronous function and it is blocking function

// ASYNCHRONOUS CALL

fs.writeFile('file.txt',"hello world",(err) =>{
})

// for read the file

const result = fs.readFileSync('contacts.txt',"utf-8")
console.log(result)

// for read the file in the asynchronous way

fs.readFile('contacts.txt',"utf-8",(err,data)=>{  // its does not return we make a arrow function and use try and catch type of function
    if (err){
        console.log(err)
    }
    console.log(data)
})

// for append the file

fs.appendFile('contacts.txt',"hello world",(err) =>{
    if (err){
        console.log(err)
    }
})


// copy the file 

fs.copyFile('contacts.txt','file.txt',(err) =>{
    if (err){
        console.log(err)
    }
})

// delete the file 

fs.unlink('contacts.txt',(err) =>{
    if (err){
        console.log(err)
    }
})

// stat the file

fs.stat('contacts.txt',(err,stats) =>{
    if (err){
        console.log(err)
    }
    console.log(stats)
})