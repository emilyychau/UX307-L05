# jasmineclasstests
using jasmine as in [textbook](https://www.oreilly.com/library/view/object-oriented-javascript/9781785880568/)

This is a starting place for a simple project with tests. I introduced it (start of chapter 12) along with functions chapter 3 as the minimal requirement for tdd. Now that we have covered classes (chapter 8) I added a scaffold for a class under test

To use this:

```
npm install
npm test
```

The tests are in the spec folder, classes_spec.js and functions_spec.js. The units under test are functions.js, and classes.js.

[Edit here](https://diy-pwa.dev/~/gh/rhildred/jasmineclasstests)

# Lab 5 
Each question is worth 5 marks:

1. There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
2. Given the width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes

3. Compute the air quality given an air quality index:
        "Good" - 0 to 50 AQI
        "Moderate" - 51 - 100 AQI
        "Unhealthy for Sensitive Groups" - 101 - 150 AQI
        "Unhealthy" - 151 - 200 AQI
        "Very Unhealthy" - 201 - 300 AQI
        "Hazardous" - 300+ AQI

Make a test for each type of air quality.

4. yee_ha takes an integer parameter and returns one of the following strings:

"Yee" if number is evenly divisible by 3
"Ha" if number is evenly divisible by 7
"Yee Ha" if number is evenly divisible by both 3 and 7
"Nada" if number is none of the above

Make a test for each branch.

5. Calculate the slope of a line. Slope is calculated as rise / run, where rise is distance between y coordinates, and run is distance between x coordinates. Use: slp = slope(x1, y1, x2, y2). Test at least 3 lines.

