var addSum = function (a, b, callback) {
    setTimeout(() => {
        if (typeof a !== "number" || typeof b !== "number") {
            return callback("a and b must be number");
        }
        return callback(undefined, a + b);
    }, 3000);
};

addSum(10, 20, function (error1, sum1) {
    if (error1) console.log({ error: error1 });
    else console.log({ result: sum1 });
    addSum(sum1, 30, function (error2, sum2) {
        if (error2) console.log({ error2 });
        else console.log({ result: sum2 });
    });
});
console.log("End of code");
