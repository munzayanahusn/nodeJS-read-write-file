// calls local module in geometry.js
const geometry = require('./geometry.js');

// Square with side length = 5
console.log("-- Square -- ")
console.log("Area :", geometry.squareArea(5));
console.log("Perimeter :", geometry.squarePerimeter(5));

// Rectangle with length = 5 and width = 3
console.log("\n-- Rectangle -- ")
console.log("Area :", geometry.rectangleArea(5, 3));
console.log("Perimeter :", geometry.rectanglePerimeter(5, 3));

// Using general formula
console.log("\n-- Square Using General Formula -- ")
console.log("Area :", geometry.area(5, 5));
console.log("Perimeter :", geometry.perimeter(5, 5));

// Using general formula
console.log("\n-- Rectangle Using General Formula -- ")
console.log("Area :", geometry.area(5, 3));
console.log("Perimeter :", geometry.perimeter(5, 3));