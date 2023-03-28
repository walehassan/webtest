
let number = max(1, 2);
console.log(number);


function max (a, b) {
    return (a > b) ? a : b;
}


console.log(isLandscape (800, 600));

function isLandscape (width, height) {
    return (width > height);
}



const output = fizzBuzz( );
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0 && input % 5 === 0))
        return 'Fizzbuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}
