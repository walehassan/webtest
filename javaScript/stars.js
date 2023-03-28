
// showStars(5);

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 0; i < row; i++)
//             pattern += '*';
//         console.log(pattern);
//     }
// }


showPrimes(10);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) 
    if (isPrime(number)) console.log(number);
}   
    
function isPrime(number) {    
        for (let factor = 2; factor < number; factor++)
            if (number % factor === 0) 
                return false;
            
        return true;
}