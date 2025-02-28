import {computeAQI} from "../computeAQI.js";

describe("test AQI computation", function() {
    it("tests for an AQI of 25", function() {
      let fAQI = 25; 
      let sAQ = computeAQI(fAQI);
   expect(sAQ).toEqual("The air quality is good");
   });

   it("tests for an AQI of 65", function() {
      let fAQI = 65;
      let sAQ = computeAQI(fAQI);
   expect(sAQ).toEqual("The air quality is moderate");
   });

   it("tests for an AQI of 125", function() {
      let fAQI = 125;
      let sAQ = computeAQI(fAQI);
   expect(sAQ).toEqual("The air quality is unhealthy for sensitive groups");
   });

   it("tests for an AQI of 165", function() {
      let fAQI = 165;
      let sAQ = computeAQI(fAQI)
   expect(sAQ).toEqual("The air quality is unhealthy");
   });

   it("tests for an AQI of 250", function() {
      let fAQI = 250;
      let sAQ = computeAQI(fAQI);
   expect(sAQ).toEqual("The air quality is very unhealthy");
   });

   it("tests for an AQI of 305", function() {
      let fAQI = 305;
      let sAQ = computeAQI(fAQI);
   expect(sAQ).toEqual("The air quality is hazardous");
   });
})
