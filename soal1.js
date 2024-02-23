// calls local module in geometry.js
const geometry = require('./geometry.js');

// Square with side length = 5
console.log("-- Square -- ")
console.log("Area :", geometry.squareArea(5));
console.log("Perimeter :", geometry.squarePerimeter(5));

// Rectangle with length = 5 and width = 3
console.log("-- Rectangle -- ")
console.log("Area :", geometry.rectangleArea(5, 3));
console.log("Perimeter :", geometry.rectanglePerimeter(5, 3));