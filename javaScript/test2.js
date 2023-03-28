
checkSpeed(180);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
         
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    
    if (speed >= 12)
        console.log('License Suspended');
    else 
        console.log('Points', points);
}

showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i, message);
    }
}