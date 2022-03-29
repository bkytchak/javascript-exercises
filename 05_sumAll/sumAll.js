const sumAll = function(...args) {
  sum = 0
  myArray = args
  for(let i = 0; i < myArray.length; i++){
    if (myArray[i] < 0) {
      return "ERROR"
    } else if (typeof myArray[i] === 'string'){
      return "ERROR"
    } else if (typeof myArray[i] === "object") {
      return "ERROR"
    } else {
      sum += myArray[i]
  }
  }
    
  return sum 

};

  console.log(sumAll(2, 4, 6, 8, 9))



// Do not edit below this line
module.exports = sumAll;
