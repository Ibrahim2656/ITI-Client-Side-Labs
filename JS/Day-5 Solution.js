// 1. Predict (in comments) the output order of this code, then run to verify.
//    console.log(a());
//    var b = function(){ return 'B'; };
//    function a(){ return 'A'; }
//    console.log(b());
//    After verifying, explain (one short line) why a works before definition and b does not.
// Prediction:

// Output will be:
// A
// B
console.log(a()); // 'A' is printed because function declarations are hoisted
var b = function(){ return 'B'; }; // 'b' is assigned after hoisting
function a(){ return 'A'; } // function declaration is hoisted entirely
console.log(b()); // 'B' is printed because b is now defined

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
function sum(a, b) {
  return a + b;
}
const add = function(a, b) {
  return a + b;
};
// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
var factorial = function fact(n){
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(factorial(5)) // output 120
// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
function showInfo(){
    console.log("Number of arguments:" , arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log(`Argument ${i}:`,arguments[i])
    }
}
// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
function mutate(x, y) {
  console.log("Before mutation:");
  console.log("arguments[0]:", arguments[0]);
  console.log("arguments[1]:", arguments[1]);

  // Mutate x and y
  x = x * 10;
  y.name = "Updated";

  console.log("After mutation:");
  console.log("arguments[0]:", arguments[0]);
  console.log("arguments[1]:", arguments[1]);
}

// Test case
let num = 5;
let obj = { name: "Original" };
mutate(num, obj);
/*
Explanation:
- `x` is a **primitive** (number), so when we change `x = x * 10`, it does NOT affect `arguments[0]`.
  → `arguments[0]` still shows the original value (5) after mutation.

- `y` is an **object**, and objects are passed by reference.
  → When we modify `y.name`, it directly affects `arguments[1]` because both `y` and `arguments[1]` point to the same object.

So:
- `arguments[0]` remains unchanged.
- `arguments[1]` reflects the mutation.
*/


// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      total += arguments[i];
    }
  }
  return total;
}
console.log(sumAll(2, 5, 3)); // 10
console.log(sumAll());        //  0
// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.
function sumAll() {
  return Array.prototype.reduce.call(arguments, (acc, curr) => {
    return typeof curr === "number" ? acc + curr : acc;
  }, 0);
}
console.log(sumAll(2, 5, 3)); //  10
console.log(sumAll());        //  0
console.log(sumAll(1, "AI", true, null, 4)); //  5
// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
function describeValue() {
  if (arguments.length === 0) {
    return "none";
  } else if (arguments.length === 1) {
    return "one:" + arguments[0];
  } else if (arguments.length === 2) {
    return "two:" + arguments[0] + "," + arguments[1];
  } else {
    return "too many";
  }
}

// Test cases
console.log(describeValue());               // "none"
console.log(describeValue("AI"));           // "one:AI"
console.log(describeValue("ML", "DL"));     // "two:ML,DL"
console.log(describeValue(1, 2, 3));        // "too many"
// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.
const funcs = [
  x => x + 2,      // Add 2
  x => x * 3,      // Multiply by 3
  x => x - 5       // Subtract 5
];

let start = 10;
for (let i = 0; i < funcs.length; i++) {
  start = funcs[i](start);
}
console.log("Final result:", start); //  31
// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.
function makeMultiplier(factor) {
  return function(n) {
    return n * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("Double of 7:", double(7)); // 14
console.log("Triple of 7:", triple(7)); // 21
// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
function once(fn) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            return fn();
        }
        // Implicitly returns undefined on subsequent calls
    };
}

// Test function
function greet() {
  console.log("Running greet...");
  return "Hello, Ibrahim!";
}

// Create a once-wrapped version
const greetOnce = once(greet);

console.log(greetOnce()); // Logs + returns "Hello, Ibrahim!"
console.log(greetOnce()); // Returns undefined, no log
console.log(greetOnce()); // Returns undefined, no log

// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.
function onceWithCache(fn) {
  let called = false;
  let result;
  return function() {
    if (!called) {
      called = true;
      result = fn();
    }
    return result; // Always returns cached result
  };
}

// Test function
function announce() {
  console.log("Running announce...");
  return "Launch successful!";
}

const announceOnce = onceWithCache(announce);

console.log(announceOnce()); // Logs + returns "Launch successful!"
console.log(announceOnce()); // Returns "Launch successful!" (no log)
console.log(announceOnce()); // Returns "Launch successful!" (no log)
// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.
function makeCounter(start) {
  let count = start;

  return {
    inc: function() {
      count++;
    },
    dec: function() {
      count--;
    },
    value: function() {
      return count;
    }
  };
}
const counterA = makeCounter(0);
const counterB = makeCounter(100);

counterA.inc();
counterA.inc();
counterA.dec();

counterB.dec();
counterB.dec();
counterB.inc();

console.log("Counter A value:", counterA.value()); // 1
console.log("Counter B value:", counterB.value()); // 99
// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
function makeAdder(start) {
  let total = start;

  return function(n) {
    total += n;
    return total;
  };
}
const addA = makeAdder(0);
const addB = makeAdder(100);

console.log(addA(5));   // 5
console.log(addA(10));  // 15
console.log(addA(-3));  // 12

console.log(addB(50));  // 150
console.log(addB(25));  // 175
// (Bouns)15. Implement memoize1(fn). Show it caches slowSquare(9) twice (timing optional comment).
function memoize1(fn) {
  let cache;
  let hasRun = false;
  return function(arg) {
    if (!hasRun) {
      cache = fn(arg);
      hasRun = true;
    }
    return cache;
  };
}

// Simulated slow function
function slowSquare(n) {
  console.log("Computing...");
  return n * n;
}

// Memoized version
const memoizedSquare = memoize1(slowSquare);

// Test
console.log(memoizedSquare(9)); // Logs "Computing...", returns 81
console.log(memoizedSquare(9)); // Returns 81, no log
// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).
function memoizeN(fn) {
  const cache = {};
  return function(...args) {
    const key = args.join('|');
    if (!(key in cache)) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}
function add3(a, b, c) {
  console.log('Computing...');
  return a + b + c;
}
const memoAdd3 = memoizeN(add3);
console.log(memoAdd3(1, 2, 3)); // Logs, returns 6
console.log(memoAdd3(1, 2, 3)); // Returns 6, no log

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
const user = {
  name: 'Ibrahim',
  sayHi: function() {
    console.log('Hi ' + this.name);
  }
};
user.sayHi(); // Hi Ibrahim
const f = user.sayHi;
f(); // Hi  — 'this' is lost

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
user.sayHi.call({ name: 'Sara' }); // Hi Sara
const bound = user.sayHi.bind({ name: 'Sara' });
bound(); // Hi Sara

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.
const greeter = {
  greet: function(greeting, sign) {
    console.log(greeting + ' ' + this.name + sign);
  }
};
greeter.greet.apply({ name: 'Ali' }, ['Hello', '!']); // Hello Ali!

// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
function greet(greeting, sign) {
  console.log(greeting + ' ' + this.name + sign);
}
const greetLara = greet.bind({ name: 'Lara' });
greetLara('Hi', '!'); // Hi Lara!
greetLara('Welcome', '!!'); // Welcome Lara!!

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).
function sayHello(obj, sign) {
  greet.call(obj, 'Hello', sign);
}
sayHello({ name: 'Ali' }, '!');
sayHello({ name: 'Sara' }, '*');

// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
function reverseArgs() {
  const args = Array.prototype.slice.call(arguments); //searced by google bc i don't know it 
  const reversed = [...args].reverse();
  console.log(reversed);
}
reverseArgs(1, 2, 3); // [3, 2, 1]

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
const arr = [5, 2, 11, 7];
const max1 = Math.max(...arr);
let max2 = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max2) max2 = arr[i];
}
console.log(max1); // 11
console.log(max2); // 11

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.
console.log(Math.max.call(null, 1, 2, 3)); // 3
console.log(Math.max.apply(null, [1, 2, 3])); // 3 — better for arrays

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
const name = 'Ibrahim';
const age = 24;
const msg = `User: ${name} Age: ${age + 1}`;
console.log(msg); // User: Ibrahim Age: 25

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
const title = 'Welcome';
const body = 'This is a message';
const msg1 = `${title}
${body}`;
const msg2 = title + '\n' + body;
console.log(msg1);
console.log(msg2);

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
if (true) {
  var i = 1;
  let j = 2;
  console.log(i, j); // 1 2
}
console.log(i); // 1 — var leaks
// console.log(j); // Error — let is block scoped

// 28. Write code that tries to log x before let x = 5;.
try {
  console.log(x); // ReferenceError
} catch (e) {
  console.log('Error:', e.message);
}
let x = 5;

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
const arr2 = [1];
arr2.push(2); // Works
// arr2 = [3]; // Error: Assignment to constant variable
console.log(arr2); // [1, 2]

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].
const square1 = (n) => {
  return n * n;
};
const square2 = n => n * n;
const result = [1, 2, 3].map(n => n * n);
console.log(result); // [1, 4, 9]

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).
const timer = {
  count: 0,
  startClassic: function() {
    const self = this;
    const id = setInterval(function() {
      self.count++;
      console.log('Classic:', self.count);
      if (self.count >= 3) clearInterval(id);
    }, 500);
  },
  startArrow: function() {
    this.count = 0;
    const id = setInterval(() => {
      this.count++;
      console.log('Arrow:', this.count);
      if (this.count >= 3) clearInterval(id);
    }, 500);
  }
};
timer.startClassic();
setTimeout(() => timer.startArrow(), 2000);

// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
const getObj = () => ({ v: 10 });
console.log(getObj()); // { v: 10 }

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).
const obj2 = {
  name: 'Ibrahim',
  sayHi: () => {
    console.log('Hi ' + this.name); // undefined — arrow doesn't bind this
  }
};
obj2.sayHi(); // Hi undefined

// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
const greet2 = name => `Hi ${name}!`;
console.log(greet2('Ibrahim')); // Hi Ibrahim!

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
const add2 = x => x + 2;
const times3 = x => x * 3;
const minus1 = x => x - 1;
function runPipeline(n, fns) {
  for (let fn of fns) {
    n = fn(n);
  }
  return n;
}
console.log(runPipeline(5, [add2, times3, minus1])); // 20

// 36. (write answers BEFORE running):
//     var obj = { n: 1, inc: function(){ this.n++; return this.n; } };
//     var inc = obj.inc;
//     console.log(obj.inc()); // 2 — this = obj
//     console.log(inc());     // NaN — this = global

// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.
const counters = [];
for (let i = 0; i < 1000; i++) {
  let count = 0;
  counters.push(() => ++count);
}
// Each closure holds its own memory — large arrays may increase memory usage

// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
function safeFirst(...args) {
  return args.length === 0 ? undefined : args[0];
}
console.log(safeFirst());    // undefined
console.log(safeFirst(1, 2)); // 1


// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();
function factory(namesArray) {
  const obj = {};
  for (let name of namesArray) {
    let count = 0;
    obj[name] = () => ++count;
  }
  return obj;
}

var counter = factory(['a', 'b']);
console.log(counter.a()); // 1
console.log(counter.b()); // 1
console.log(counter.a()); // 2


// 40. Write 2 things that were new or tricky today (comment).
// 1. Arrow functions do NOT bind their own 'this' — so they’re bad for object methods.
// 2. Using apply() is better than call() when passing arrays of arguments.
 

