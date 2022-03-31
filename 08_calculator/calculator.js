const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  return array.reduce((a, b) => a + b, 0)
	
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b)


};

const power = function(a, b) {
  return Math.pow(a, b);
	
};

const factorial = function(n) {
  if (n === 0 || n === 1) return 1;
  let product = 1;
  for (let i = n; i > 0; i--){
    product = product * i
   
  }
  return product
	
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

console.log(add(2, 3))
console.log(subtract(2,1))
console.log(sum([1,2,3,4]))
console.log(multiply([2,4,6,8,10,12,14]))
console.log(power(2, 3))
console.log(factorial(5))
