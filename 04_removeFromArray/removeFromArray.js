const removeFromArray = function(...args){
    const array = args[0];
    console.log(array)
    const newArray = [];
    console.log(newArray)
    array.forEach((num) => { //For each num in array
        if (!args.includes(num)){ //If num is not in the arguments
            newArray.push(num); //Add it to the newArray
            console.log(newArray)
        }
    });

return newArray;
   

};
console.log(removeFromArray([1,2,3,4,5,6],3,2))
// Do not edit below this line
module.exports = removeFromArray;
