function returnAddComponents ( a, b ){
    return a + b;
}

function returnDivideComponents ( a, b ){
    if ( b === 0 ) throw new Error ("Division by zero!");
    return a / b;
}

function returnMultiplyComponents ( a, b ){
    return a * b;
}

function returnSubstractComponents ( a, b ){
    return a - b;
}

function returnFactorial ( n ) {
    if ( n < 0 ) throw new Error ("Negative number!");
    return n <= 1 ? 1 : n * returnFactorial (n - 1);
}

module.exports = { 
    returnAddComponents, 
    returnDivideComponents,
    returnMultiplyComponents,
    returnSubstractComponents,
    returnFactorial
};