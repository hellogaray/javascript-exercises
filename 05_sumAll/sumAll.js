const sumAll = function(start, end) {
    total = 0;
    if (start < 0 || start < 0 || typeof(start) != "number" || typeof(end) != "number") {
        return "ERROR"
    };
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    };
    for (let count = start; count <= end; count++) {
        total += count
    }
	return total
};

// Do not edit below this line
module.exports = sumAll;
