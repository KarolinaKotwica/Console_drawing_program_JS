class Canvas {
    constructor (width, height) {
        this.width = width;
        this.height = height;
        this.canvasArea = [];
        this.drawLine(0,0,this.width-1,0,'-');
        this.drawLine(0, this.height-1, this.width-1, this.height-1, '-');
        this.drawLine(0, 1, 0, this.height-2, '|');
        this.drawLine(this.width-1, 1, this.width-1, this.height-2, '|');
        this.drawLine(1,1,this.width-2,this.height-2,' ');
    }

    set width(width) {
        width = parseInt(width);
        if (typeof width !== 'number') {
            throw new Error("Please write a number.");
        } else if (this._width) {
            throw new Error("Drawing board already exists.");
        }
        this._width = width + 2;
    }

    set height(height) {
        height = parseInt(height);
        if (typeof height !== 'number') {
            throw new Error("Please write a number");
        }
        this._height = height + 2;
    }


    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    drawCanvas (){
        this.canvasArea.forEach((outerArr) => {
            outerArr.forEach((innerArr) => {
               process.stdout.write(`${innerArr}`);
            })
            process.stdout.write("\n");
        })
    }

    drawLine (x1,y1,x2,y2,sign) {
        x1 = parseInt(x1);
        y1 = parseInt(y1);
        x2 = parseInt(x2);
        y2 = parseInt(y2);
        if (y1 > y2) {    
            [y1, y2] = [y2, y1];
        }
        if (x1 > x2) {
            [x1, x2] = [x2, x1];
        }
        for (let i = y1; i <= y2; i++) {
            if (!this.canvasArea[i]) {
                this.canvasArea[i] = new Array();
            }
            for (let j = x1; j <= x2; j++) {
                if (this.canvasArea[i][j] === '-' || this.canvasArea[i][j] === '|' || j >= this.width || i >= this.height) {
                    continue;
                } else {
                    this.canvasArea[i][j] = sign;
                }
                
            }
        }
    }

    drawRectangle (x1,y1,x2,y2,sign) {
        this.drawLine(x1,y1,x2,y1,sign);
        this.drawLine(x1,y1,x1,y2,sign);
        this.drawLine(x2,y1,x2,y2,sign);
        this.drawLine(x1,y2,x2,y2,sign);
    }

    fillBucket (x, y, color) {
        this.x = parseInt(x);
        this.y = parseInt(y);

            
        for (let i = this.x; i <= this.width; i++) {
            for (let j = this.y; j <= this.height; j++) {
                if (this.canvasArea[i][j] === '*' || this.canvasArea[i][j] === '-' || this.canvasArea[i][j] === '|') {
                    continue;
                } else {
                    if (Array.isArray(this.canvasArea[i][j])) {
                        this.canvasArea[i][j] = color;
                        this.canvasArea[i+1][j] = color;
                        this.canvasArea[i-1][j] = color;
                        this.canvasArea[i][j+1] = color;
                        this.canvasArea[i][j-1] = color;
 
                      } else {
                        this.canvasArea[j] = [color];
                        this.canvasArea[j+1] = [color];
                        this.canvasArea[j-1] = [color];
                      }
                }

            }
        }
    }

}


module.exports = Canvas;