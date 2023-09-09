#!/usr/bin/node
// create a class with its constructor
class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      }
    }
  }
  
  // create a module for exports
  module.exports = Rectangle;