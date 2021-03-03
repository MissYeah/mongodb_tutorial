const addSum = (a, b) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== "number" || typeof b !== "number") {
                reject("a and b must be number");
            }
            resolve(a + b);
        }, 3000);
    });

addSum(10, 20)
    .then((sum1) => addSum(sum1, 1))
    .then((sum1) => addSum(sum1, 1))
    .then((sum1) => addSum(sum1, 1))
    .then((sum1) => addSum(sum1, 1))
    .then((sum2) => console.log({ result: sum2 }))
    .catch((error) => console.log({ error: error }));

const totalSum = async () => {
    try {
        let sum = await addSum(10, 10);
        let sum2 = await addSum(sum, 10);
        console.log({ sum2 });
    } catch (err) {
        if (err) console.log({ err });
    }
};

totalSum();
