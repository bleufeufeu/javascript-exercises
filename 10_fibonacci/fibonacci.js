const fibonacci = function(num) {
    num = Number(num);
    if (num === 0) return 0;
    if (num < 0) return "OOPS";
    let fibonacciSeq = [1, 1];    
    for (let i = 2; i < num; i++) {
        fibonacciSeq[i] = fibonacciSeq[i-1] + fibonacciSeq[i-2];
    }
    return fibonacciSeq[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
