const repeatString = function(input, num) {
    let strAcc = input;
    if (num === 0) {
        return '';
    } else if (num < 0) {
        return 'ERROR';
    }
    for (let i = 1; i < num; i++) {
        strAcc += input;
    }

    return strAcc;
};

// Do not edit below this line
module.exports = repeatString;
