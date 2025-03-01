//q2 lawn mowing spec
import {time2mow} from '../time2mow.js';

describe("test time2mow function", function(){
    it("tests mowing 5x10m @ 2 sq metres / min", function(){
        let length = 5;
        let width = 10;
        let mowTime = 2;
        let mowRate = time2mow(length, width, mowTime)
        expect(mowRate.toFixed(2)).toBe("25.00");
    }); 
    it("tests mowing 3x4m @ 10 sq metres / min", function(){
        let length = 3;
        let width = 4;
        let mowTime = 10;
        let mowRate = time2mow(length, width, mowTime)
        expect(mowRate.toFixed(2)).toBe("1.20");
    }); 
    it("tests mowing 2x6m @ 5 sq metres / min", function(){
        let length = 2;
        let width = 6;
        let mowTime = 5;
        let mowRate = time2mow(length, width, mowTime)
        expect(mowRate.toFixed(2)).toBe("2.40");
    }); 
});