const add = function() {
  const args = Array.from(arguments);
	let sum = args.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
  return sum;
};

const subtract = function() {
	const args = Array.from(arguments);
	let sum = args.reduce((total, currentValue) => {
    return total - currentValue;
  });
  return sum;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
	return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if (n === 0) return 1;
  prod = 1;
	for (let i = n; i > 0; i--) {
    prod *= i 
  }
  return prod
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
