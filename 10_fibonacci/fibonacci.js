const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    let x = 0
    let y = 1
    for (let i = 1; i < count; i++){
        const temp = y;
        y = x + y;
        x = temp;
    }
return y
}
console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
