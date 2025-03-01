//q1 convert sqft to acres spec

import {convertsqft2acres} from "../convertsqft2acres.js";

describe("test convertsqft2acres", function() {
   it("tests 100 000 sqft", function() {
       let sqft = 100000;
       let acres = convertsqft2acres(sqft);
   expect(acres.toFixed(2)).toBe("2.30");
   });
 
   it("tests 50 000 sqft", function() {
       let sqft = 50000;
       let acres = convertsqft2acres(sqft);
   expect(acres.toFixed(2)).toBe("1.15");
   });

   it("tests 250 000 sqft", function() {
       let sqft = 250000;
       let acres = convertsqft2acres(sqft);
   expect(acres.toFixed(2)).toBe("5.74");
   });
});
