
// const array = [0, null, undefined, '',  1, 2, 3];

// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array)
//      if (value)
//         count++;
//     return count;
// }




// const movie = {
//     title: 'Be Gone',
//     releaseYear: 2019,
//     rating: 4.5,
//     director: 'wale rae'
// };

// showProperties(movie);


// function showProperties(obj) {
//     for (let key in obj)
//         if (typeof obj[key] === 'number')
//         console.log(key, obj[key])       
// }






console.log(sum(10));


function sum(limit) {
    let sum = 0;

    for(let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

        return sum;
}

