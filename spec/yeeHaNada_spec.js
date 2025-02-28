import {yeeHaNada} from '../yeeHaNada.js';

describe ("test yeeHaNada", function() {
   it("tests for Nada", function() {
        let int = 26;
        let output = yeeHaNada(int);
   expect(output).toBe("Nada");
   });

   it("tests for Yee", function() {
        let int = 6;
        let output = yeeHaNada(int);
   expect(output).toBe("Yee");
   });

   it("tests for Ha", function() {
        let int = 14;
        let output = yeeHaNada(int);
   expect(output).toBe("Ha");
   });
  
   it("tests for Yee Ha", function() {
        let int = 21;
        let output = yeeHaNada(int);
   expect(output).toBe("Yee Ha");
   });
});