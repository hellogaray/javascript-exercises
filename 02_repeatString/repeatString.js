const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    stringToPrint = ''
    for (let count = 0; count < num; count++) {
        stringToPrint += string
    };
    return stringToPrint;
};

// Do not edit below this line
module.exports = repeatString;
