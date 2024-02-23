// Square-Rectangle Area-Perimeter Calculation

exports.squareArea = function(side){
    return side * side;
}

exports.rectangleArea = function(length, width){
    return length * width;
}

exports.squarePerimeter = function(side){
    return 4 * side;
}

exports.rectanglePerimeter = function(length, width){
    return 2 * (length + width);
}