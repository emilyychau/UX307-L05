function yeeHaNada(int) {
    let output = "";
 
    if (int % 3 === 0 && int % 7 === 0) {
        output = "Yee Ha";
    }
    else if (int % 3 === 0) {
        output = "Yee";
    }
    else if (int % 7 === 0) {
        output = "Ha";
    }
    else {
        output = "Nada";
    }
return output;
 }
 export{yeeHaNada}
 