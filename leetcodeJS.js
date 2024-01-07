/*// problem 1 => Closure //hello world function
var createHelloWorld = function(){
    return function(...args){
        return "Hello world!";
    }
}
const result = (createHelloWorld());
console.log(result());

//problem 2 => Closure //counter
var createCounter = function(n){
    return function(){
       return n++;
    }
};
const re = createCounter(10);
console.log(re());
console.log(re());
console.log(re());

//problem 3 => Closure //counter2
var createCounter = function(init){
    let count = init;

    function increment(){
        return count = count+1;
    }

    function decrement(){
        return count = count - 1;
    }

    function reset(){
        return count = init;
    }

    return {increment, decrement, reset};
}
const counter = (createCounter(5));
console.log(counter.increment(), counter.reset(),counter.decrement());

//problem 4 => Array transform //Apply Transform Over Each Element in Array

let map = function(arr, fn){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray[i] = fn(arr[i], i)
    }
    return newArray;
}
console.log(map([1,2,3], fn = function plusone(n) { return n * 2; }));

//problem 5 => Array transform //Filter elements from array
let filter = function(arr, fn){
    let newArray = [];
    for(let stringIndex in arr){
        let i = Number(stringIndex);
        if(fn(arr[i], i)){
            newArray.push(arr[i])
        }

    }
    return newArray;
}
console.log(filter([1,2,4,5,10,30,50], fn = 
    function greaterThan10(n) { return n > 10; }));

//problem 6 => Basic Array Transforms //Array Reduce transformation
let reduce = function(nums, fn, init){
    let result = init;
    nums.forEach(element => {
        result = fn(result, element)
    });
    return result;
}
console.log(reduce([1,2,3,4],function sum(accum, curr) { return accum + curr * curr; }, 100));

//PRoblem 7 => Function input and Output //Function Composition
let compose = function(functions){
    return function(x){
        if(functions.length === 0){
            return x;
        }
        let input = x;
        for(const func of functions.reverse()){
            input = func(input);
        }
        return input;
    }
}
let result1 = compose([x => x + 1, x => x * x, x => 2 * x]);
let result2 = compose(functions = [x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(result1(4));
console.log(result2(1));

//Problem 8 => Function input and Output// Allow one function call
let once = function(fn){
    let called = false;
    return function(...args){
        if(!called){
            called = true;
            return fn(...args);
        }
    }
}
// let fn = (a,b,c) => (a + b + c)
let onceFn = once((a,b,c) => (a + b + c))
console.log(onceFn(1,2,3));
console.log(onceFn(2,3,6));
console.log(onceFn(2,4,5));
//problem 9 => Function input and Output //Memoize
let memoize = function(fn){
    let cache = {};
    return function(...args){
        let key = JSON.stringify(args);
        if(key in cache){
            return cache[key];
        }
        let functionOut = fn(...args);
        cache[key] = functionOut;
        return functionOut;
    }
}
 let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
  console.log(memoizedFn(2, 3)) // 5
  console.log(memoizedFn(2, 3)) // 5
  console.log(callCount) // 1
  console.log(memoizedFn(2,7)); //9
  console.log(callCount);//2

//problem 10 => Function input and Output //Curry 
let curry = function(fn) {
    return function curried(...args) {
       if(args.length >= fn.length){
           return fn(...args);
       }
       return (...nextArgs) => curried(...args, ...nextArgs);
    };
};
function sum(a, b,c) { return a + b + c; }
const csum = curry(sum);
console.log(csum(1)(2)(3)) // 3
console.log(csum(1,2)(3));
console.log(csum(1)(2,3));

//problem 11 => Promises //sleep //Given a positive integer millis, write an asyncronous function that 
//sleeps for millis milliseconds. It can resolve any value.
async function sleep(millis){
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}

let t = Date.now();
sleep(200).then(() => console.log(Date.now() - t));

//problem 12 => Promise //Given an asyncronous function fn and a time t in milliseconds, return 
//a new time limited version of the input function.
var timeLimit = function(fn,t){
    return async function(...args){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t)
            fn(...args).then(resolve).catch(reject);
        })
    }
}
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100

//problem 13 => Promise //Given an array of asyncronous functions functions and a 
// pool limit n, return an asyncronous function promisePool. It should 
// return a promise that resolves when all the input functions resolve.
let promisePool = async function(functions, n){
    return new Promise((resolve) => {
        let inprogressCount = 0;
        let functionIndex = 0;
        function helper(){
            if(functionIndex >= functions.length){
                if(inprogressCount === 0) resolve();
                return;
            }
            while(inprogressCount < n && functionIndex < functions.length){
                inprogressCount++;
                const promise = functions[functionIndex] ();
                functionIndex++;
                promise.then(() => {
                    inprogressCount--;
                    helper();
                });
            }
        }
        helper();
    });
}
const sleep = (t) => new Promise(res => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log) // After 900ms
*/

//problem 14 => time(setTimeout) //cache with time limit
let TimeLimitedCache = function(){
    this.cache = new Map();
}

TimeLimitedCache.prototype.set = function(key, value, duration){
    const valueInCache = this.cache.get(key);
    if(valueInCache){
        clearTimeout(valueInCache.timeout);
    }
    const timeout = setTimeout(() => this.cache.delete(key),duration);
    this.cache.set(key, {value, timeout});
    return Boolean(valueInCache);
};
TimeLimitedCache.prototype.get = function(key){
    return this.cache.has(key) ? this.cache.get(key).value : -1;
}
TimeLimitedCache.prototype.count = function(){
    return this.cache.size;
}
//Your TimeLimitedCache object will be instantiated and called as such:
var obj = new TimeLimitedCache()
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)) // 42
console.log(obj.count()) // 1

//problem 15 => Time(setTimeout) //debounce
let debounce = function(fn, t){
    return function(...args){
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, t);
    };
};
const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
