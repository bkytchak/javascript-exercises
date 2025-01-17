//Assume the oldest person is oldest. Compare them to currentPerson. Return the oldest person between oldest and currentPerson"
const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    console.log(oldestAge)
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    console.log(currentAge);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
};
const getAge = function (birth, death){
  if (!death) {
    death = new Date().getFullYear();
  } 
   return death - birth;
  
  
}

const people = [
      {
        name: "Carly",
        yearOfBirth: 1000,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
  
console.log(findTheOldest(people))

// Do not edit below this line
//module.exports = findTheOldest;

// Do not edit below this line
module.exports = findTheOldest;
