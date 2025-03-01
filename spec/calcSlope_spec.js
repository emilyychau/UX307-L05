//q5 calculate slope of a line

import { calculateSlope } from "../calculateSlope.js";

describe("test calculateSlope", function(){
    it("test the slope of a line", function(){
        let x1 = 9
        let x2 = 4
        let y1 = 10
        let y2 = -5
        let slp = calculateSlope(x1, y1, x2, y2);
    expect(slp.toFixed(2)).toBe("3.00");
    });
    it("test the slope of a line", function(){
        let x1 = 2
        let x2 = -4
        let y1 = 0
        let y2 = 7
        let slp = calculateSlope(x1, y1, x2, y2);
    expect(slp.toFixed(2)).toBe("-1.17");
    });
    it("test the slope of a line", function(){
        let x1 = 4
        let x2 = 2
        let y1 = 5
        let y2 = 4
        let slp = calculateSlope(x1, y1, x2, y2);
    expect(slp.toFixed(2)).toBe("0.50");
    });
})
