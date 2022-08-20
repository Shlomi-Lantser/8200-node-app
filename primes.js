exports.isPrime = (number) => {
    for(var i = 2; i < number/2; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return number > 1;
}


exports.root = (number) => {
    var root = Math.sqrt(number);
    if (root*root != number) return 'NONE';
    var stringOfRoot = root.toString();
    return stringOfRoot;
}