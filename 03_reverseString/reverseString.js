const reverseString = function(string) {
    newString = '';
    for (let position = string.length -1; position >= 0; position --) {
        newString += string[position];
    };
    return newString;
};

// Do not edit below this line
module.exports = reverseString;

"hello"
