const ftoc = function(fTemp) {
  newTemp = (fTemp - 32) * 0.555555556;
  newTemp = newTemp.toFixed(1)
  return parseFloat(newTemp)
     

};

const ctof = function(cTemp) {
  newTemp = (cTemp * 1.8) + 32;
  newTemp = newTemp.toFixed(1);
  return parseFloat(newTemp)
  

};

console.log(ftoc(63))
console.log(ctof(55))
// Do not edit below this line
//module.exports = {
  //ftoc,
  //ctof
//};
