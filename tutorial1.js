const sum = (num1, num2) => num1 + num2;
const PI = 3.14;

class SomeMathObj {
    constructor() {
        console.log('Obj Created')
    }
}


// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObj = SomeMathObj;

// Same result as above --> object literal
module.exports = {
    sum : sum,
    PI : PI,
    SomeMathObj : SomeMathObj
}