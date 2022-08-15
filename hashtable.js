const repeat = (array) => {
    var cache = {};
    for (let item of array) {
        if (item in cache) {
            return item;
        }
        cache[item] = item;
    }
    return undefined;
}

console.log(repeat([2, 3, 4, 5]));
