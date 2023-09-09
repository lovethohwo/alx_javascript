#!/usr/bin/node
// create a class with its constructor
class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      }
    }
    //created a print() method using a nested loop to iterate over the rows & columns of the rectangle.
    //adding an 'X' character.
    print() {
      for (let i = 0; i < this.height; i++) {
        let row = "";
        for (let j = 0; j < this.width; j++) {
          row += "X";
        }
        console.log(row);
      }
    }
  
    //Exchanging the width and the height
    rotate() {
      [this.width, this.height] = [this.height, this.width];
    }
  
    //Double the width & height by 2
    double() {
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  // create a module for exports
  module.exports = Rectangle;