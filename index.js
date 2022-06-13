const app = require('express')()

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }

    return number > 1;
}

app.get('/', (request, response) => {
    const { value } = request.query;

    const isEven = !(value % 2);
    const bool = isPrime(value);

    return response.json({
        isEven,
        isPrime: bool
    })
});

app.listen(3333);