const commands = require('./commands');

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let command = "";
 
let userInput = function() {
    console.log("\nDrawing console program!\nCommands:\nC w h - create new board\nL x1 y1 x2 y2 - Create new line\nR x1 y1 x2 y2 - Create new rectangle\nB x y c - fill entire area with c color\nQ - Quit\n");
    r1.question ('Enter command: ', (answer) => {
        let inputArray = answer.split(" ");
        command = inputArray.shift().toLocaleUpperCase();
        if (command === "Q") {
            return r1.close();
        } else {
            commands[command](...inputArray)
                .then(success => {
                    userInput();
                })
                .catch(err => {
                    console.log(err);
                    userInput();
                });
        }
    });
};
 
userInput();