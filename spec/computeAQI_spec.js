import {computeAQI} from "../computeAQI.js";

describe("test AQI computation", function() {
   it("tests for an AQI of -6", function() {
      let fAQI = -6; 
      let sAQ = computeAQI(fAQI);
   expect(sAQ).toBe("Computation error, please enter an air quality value that is equal or greater than 0");
   });

   it("tests for an AQI of 65", function() {
      let fAQI = 65;
      let sAQ = computeAQI(fAQI);
   expect(sAQ).toBe("The air quality is moderate");
   });

   it("tests for an AQI of 125", function() {
      let fAQI = 125;
      let sAQ = computeAQI(fAQI);
   expect(sAQ).toBe("The air quality is unhealthy for sensitive groups");
   });

   it("tests for an AQI of 165", function() {
      let fAQI = 165;
      let sAQ = computeAQI(fAQI)
   expect(sAQ).toBe("The air quality is unhealthy");
   });

   it("tests for an AQI of 250", function() {
      let fAQI = 250;
      let sAQ = computeAQI(fAQI);
   expect(sAQ).toBe("The air quality is very unhealthy");
   });

   it("tests for an AQI of 305", function() {
      let fAQI = 305;
      let sAQ = computeAQI(fAQI);
   expect(sAQ).toBe("The air quality is hazardous");
   });
})
