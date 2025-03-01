function calculateSlope (x1, y1, x2, y2){
    let slp;
    if (x1 === x2){
        slp = "The slope of the line is undefined";
    }
    else if (y1 === y2){
        slp = "The slope of the line is undefined";
    }
    else {
        slp = (y2 - y1) / (x2 - x1);
    }
    return slp;
}
export {calculateSlope}