function ticketPrice(age) {
    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else { // age >= 18
        price = 20;
    }
    return `The ticket price for age ${age} is $${price}.`;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}