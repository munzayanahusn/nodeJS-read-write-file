// Square-Rectangle Area-Perimeter Calculation
const squareArea = function(side){
    return side * side;
}

const rectangleArea = function(height, width){
    return height * width;
}

const squarePerimeter = function(side){
    return 4 * side;
}

const rectanglePerimeter = function(height, width){
    return 2 * (height + width);
}

// General formula for area and perimeter
const area = function(height, width){
    return width * height;
}
const perimeter = function(height, width){
    return 2 * (width + height);
}

module.exports = {
    squareArea,
    squarePerimeter,
    rectangleArea,
    rectanglePerimeter,
    area,
    perimeter
}