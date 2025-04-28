const { 
    returnAddComponents, 
    returnDivideComponents,
    returnMultiplyComponents,
    returnSubstractComponents,
    returnFactorial 
} = require("./math");

test ( 'adds 2 + 3 to equal 5', () => {
    expect (returnAddComponents(2,3)).toBe (5);
});

test ( 'divide 10 / 5 to equal 2', () => {
    expect (returnDivideComponents (10, 0)).toBe (2);
});

test ( 'multiply 5 * 8 to equal 40', () => {
    expect (returnMultiplyComponents (5, 8)).toBe (40);
});

test ( 'substract 83 - 26 to equal 57', () => {
    expect (returnSubstractComponents (83, 26)).toBe (57);
});

test ( 'computes factorial correctly', () => {
    expect ( returnFactorial (5)).toBe (120);
});

//These notes were written so that we wouldn't forget anything, but no matter how hard we tried, we'd forget something anyway.

//pipi pupu check
//hello, world 