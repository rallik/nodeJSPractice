// ******************* Section 1 - Working With Modules *******************
console.log('******************* Section 1 *******************');

console.log('Hello from nodeJS')
const tutorial = require('./tutorial1');

console.log(tutorial.sum(1, 1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObj());

// ************************************************************************

// ************ Section 2 - Event Module and EventEmitter Class ***********
console.log('******************* Section 2 *******************');

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('tutorial2', ()=>{
    console.log('tutorial event has occured');
})

eventEmitter.emit('tutorial2')

eventEmitter.on('tutorial3', (num1, num2)=>{
    console.log(num1 + num2);
})

eventEmitter.emit('tutorial3',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let reuben = new Person('Reuben');
let jeremy = new Person('Jeremy');

reuben.on('name',()=>{
    console.log(`my name is ${reuben.name}`);
})

jeremy.on('name', ()=>{
    console.log(`my name is ${jeremy.name}`);
})

reuben.emit('name');
jeremy.emit('name');

// ************************************************************************

// ********************** Section 3 - ReadLine Module *********************
console.log('******************* Section 3 *******************');

// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin,
//                                     output : process.stdout});

// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);
// let answer = num1 + num2;

// rl.question(`What is ${num1} + ${num2}? \n`,
// (userInput)=>{
//     if(userInput.trim() == answer){
//         rl.close();
//     } else {
//         rl.setPrompt('Incorrect :( please try again\n');
//         rl.prompt()
//         rl.on('line', (userInput)=>{
//             if(userInput.trim() == answer) {
//                 rl.close();
//             } else {
//                 rl.setPrompt(`Your answer of ${userInput} is incorrect :( try again \n`);
//                 rl.prompt()
//             }
//         })
//     }
// });

// rl.on('close', ()=>{
//     console.log('Correct!!!')
// })


// ************************************************************************

// ******************** Section 4 - File System Module ********************
console.log('******************* Section 4 *******************');
const fs = require('fs');

// create file
// fs.writeFile('example.txt', "this is an example", (err)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('File successfully created');
//         fs.readFile('example.txt', 'utf8', (err, file)=>{
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         });
//     }
// });

// rename file
// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfully renamed file');
//     }
// });

// append data to file
// fs.appendFile('example.txt', 'some data being appended', (err)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Successfully appended data to file');
//     }
// });

// Delete file
fs.unlink('example2.txt', (err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log('Succesfuly deleted file');
    }
})

// ************************************************************************

// ************** Section 5 - File System Module (folders) ****************
console.log('******************* Section 4 *******************');


// ************************************************************************
