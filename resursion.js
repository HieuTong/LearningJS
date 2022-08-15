const factorialResursion = (n) => {
    if (n === 2) return 2;
    return n * factorialResursion(n - 1);
}

console.log(factorialResursion(5));