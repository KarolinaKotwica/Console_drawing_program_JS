const Canvas = require('./Canvas');

let drawingBoard;

let commands = {

    C: function (width, height) {
        return new Promise((resolve,reject) => {
            if (!drawingBoard) {
                drawingBoard = new Canvas(width, height)
                drawingBoard.drawCanvas();
                resolve("The drawing board created!");
            } else {
                reject("Drawing board already exists..");
            }
        });
    },

    L: function (x1, y1, x2, y2, sign) {
        return new Promise((resolve,reject) => {
            if (!drawingBoard) {
                reject("You have to create new drawing board first.");
            } else {
                sign = '*';
                drawingBoard.drawLine(x1, y1, x2, y2, sign);
                drawingBoard.drawCanvas();
                resolve("Line drawn successfully");
            }
        });
    },

    R: function (x1, y1, x2, y2, sign) {
        return new Promise((resolve,reject) => {
            if (!drawingBoard) {
                reject("You have to create new drawing board first.");
            } else {
                sign = '*';
                drawingBoard.drawRectangle(x1, y1, x2, y2, sign);
                drawingBoard.drawCanvas();
                resolve("Rectangle drawn successfully");
            }
        });
    },

    B: function (x, y, color) {
        return new Promise((resolve, reject) => {
            if (!drawingBoard) {
                reject("You have to create new drawing board first.");
            } else {
                if(color.length != 1) {
                    reject("Max length of color is 1.")
                } else {
                    drawingBoard.fillBucket(x, y, color);
                    drawingBoard.drawCanvas();
                    resolve("Success!")
                }
            }
        })
    }
 };

module.exports = commands;