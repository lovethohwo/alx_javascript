// create a class Square that inherits from Rectangle in "4-rectangle.js"

const Rectangle = require("./4-rectangle");

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

//create a module for export
module.exports = Square;