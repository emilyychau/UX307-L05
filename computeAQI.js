
function computeAQI(fAQI){
    let sAQ;
    if (fAQI <= -1){
       sAQ = "Computation error, please enter an air quality value that is equal or greater than 0";
    }
    else if (fAQI >= 0 && fAQI <= 50){
       sAQ = "The air quality is good";
    }
    else if (fAQI >= 51 && fAQI <= 100){
       sAQ = "The air quality is moderate";
    }
    else if (fAQI >= 101 && fAQI <= 150){
      sAQ = "The air quality is unhealthy for sensitive groups";
    }
    else if (fAQI >= 151 && fAQI <= 200){
      sAQ = "The air quality is unhealthy";
    }
    else if (fAQI >= 201 && fAQI <= 300){
      sAQ = "The air quality is very unhealthy";
    }
    else if (fAQI >= 301){
        sAQ = "The air quality is hazardous";
    }
    else {
      sAQ = "Computation error, please enter an air quality value that is equal or greater than 0";
    }
    return sAQ;
 }    

 export {computeAQI}