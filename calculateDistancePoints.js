const calculateDistancePoints = (distance, hillSize, kPoint) => {
    switch(hillSize) {
        case 'normal':
            return (distance - kPoint) * 2 + 60;
        case 'large':
            return (distance - kPoint) * 1.8 + 60;
        case 'flying':
            return (distance - kPoint) * 1.2 + 120;
        default:
            return 'Error - Hill size is not correct!';
    }   
};

module.exports = calculateDistancePoints;