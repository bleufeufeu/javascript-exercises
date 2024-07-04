const sumAll = function() {
    let sum = 0;
    if (arguments[1] > arguments[0]) {
        left = arguments[0];
        right = arguments[1];        
    } else {
        left = arguments[1];
        right = arguments[0];
    }
  
    if (Number.isInteger(left) && Number.isInteger(right) && left > 0 && right > 0) {
        for (i = left; i <= right; i++) {
            sum += i;
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
