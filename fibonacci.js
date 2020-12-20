//recursive

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n-1) + fib(n-2);    
}

//iterative

function fib(n) {
    const fibs = [0, 1];
    let counter = 2;
    while (counter <= n) {
        let temp = fibs[1];
        fibs[1] = fibs[0] + fibs[1];
        fibs[0] = temp;
        counter++
    }
    if (n < 1) return fibs[0]
    return fibs[1];
}

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) return cache[args];
        const result = fn.apply(this, args)
        cache[args] = result;
        return result;
    }
}

fib = memoize(fib);