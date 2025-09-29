// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
var x = "258.90"
var y = parseInt(x)
var z = parseFloat(x)
console.log(y,z)

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
var x = 7.45678
var ans = x.toFixed(2) // it's string
ans= +ans
console.log(typeof(ans))
// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
console.log(isNaN('abc'))
console.log(isNaN(""))

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
console.log((0.1+0.2)==0.3)
console.log((0.1+0.2).toFixed(1))
console.log((0.1+0.2).toFixed(1)==0.3)

// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.
function checking(str){
    var parsed=parseInt(str,10)
    if (isNaN(parsed)){
        return null
    }
    return parsed
}


// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).
function isFiniteNumber(value){
    if(typeof value !== "number")return false;
    if(value!==value) return false;
    if(value===Infinity|| value === -Infinity)return false;
    return true;
}
//passing test casese
console.log(isFiniteNumber(42));
console.log(isFiniteNumber(0));
console.log(isFiniteNumber(-3.14));
console.log(isFiniteNumber(1e5));
//failing testcases
console.log(isFiniteNumber("42"));
console.log(isFiniteNumber(Infinity));
console.log(isFiniteNumber(NaN));
console.log(isFiniteNumber(null));

// 7. Remove leading and trailing spaces from the string "   hello world  ".
var s="   hello world  "
console.log(s.trim())

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
var s = "javascript"
console.log(s.slice(4))
console.log(s.substring(4))

// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).
//first solution
var word = "Banana Mania"
var count=0;
for (var ch of word){
    if (ch.toLocaleLowerCase()==='a'){
        count++;
    }
}
console.log(count)
//second solution
var count_split=word.toLowerCase().split('a').length-1;
console.log(count_split)

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
function reverse(str){
    var ans=""
    for(var i = str.length-1;i>=0;i--){
        ans+=str[i]
    }
    return ans
}
console.log(reverse("abc"));
console.log(reverse("Banana"));
console.log(reverse("hello it's me "));

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
function capitalizeWords(str){
    return str.split(" ").map(word => word[0].toUpperCase()+word.slice(1).toLowerCase()).join(" ");
}
console.log(capitalizeWords("hello there friend"))

// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
var link="https://example.com/path/to/page"
function extractDomain(link){
    var start=link.indexOf('://')+3
    var end = link.indexOf('/',start)
    var domain = link.slice(start,end)
    return domain
}
console.log(extractDomain(link))

// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
function naiveIndexOf(haystack, needle) {
    if (needle === "") return 0;

    for (var i = 0; i <= haystack.length - needle.length; i++) {
        var j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i;
        }
    }
    return -1; 
}

// examples:
console.log(naiveIndexOf("hello world", "world")); // 6
console.log(naiveIndexOf("hello world", "abc"));   // -1
console.log(naiveIndexOf("hello", ""));            // 0 


// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = 'hello'; 
if (s.toUpperCase() === 'HELLO') { console.log('match'); }
// s.toUpperCase() → calls the function and returns "HELLO".
// === 'HELLO' → compares the result to "HELLO".
// If they are equal, the if block runs.


// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
var arr=[1,2,3,4,5]
arr.push(6)
arr.unshift(0)
console.log(arr)

// 16. Remove the last element and store it. Remove the first element and store it.
var lastElmenent=arr.pop()
var firstElment=arr.shift()
console.log(lastElmenent,firstElment)
console.log(arr)

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
var arr=[10,20,30,40,50]
var newArr=arr.slice(0,3)
console.log(newArr)

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
var arr=[1,2,3,4,5]
arr.splice(2,2,'a','b')
console.log(arr)

// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
var arr=[1,2,3,4,5]
console.log(arr.slice(2,4))//shadow copy
console.log(arr) // didn't change
console.log(arr.splice(2,2))// modifying
console.log(arr)// it's changed

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
var arr=[]
arr[7]='hello'
console.log(arr.length)

// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
function compact(arr){
    var res=[]
    for(var i =0;i<arr.length;i++){
        if(arr[i]){
            res.push(arr[i])
        }
    }
    return res
}
console.log(compact([0, 1, false, 2, "", 3, null, undefined, NaN, "hi"]));
// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .
function deepClone1D(arr){
    var clone=[]
    for(var i = 0 ; i<arr.length;i++){
        clone[i]=arr[i]
    }
    return clone
}
var arr = [1,2,3,4,5,6];
var copy = deepClone1D(arr);
console.log(copy)
console.log(copy===arr)

// 23. Map [1,2,3] to their squares using map.
var arr=[1,2,3]
var squares=arr.map(function(num){return num*num})

// 24. Filter [5,10,15,20] to keep values >= 12.
var arr=[5,10,15,20]
console.log(arr.filter(function(num){
    return num>=12
}))

// 25. Reduce [2,4,6] to product.
var arr=[2,4,6]
console.log(arr.reduce(function(ans,num){
    return ans*num 
},1))

// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.
function arraySum(arr){
    return arr.reduce(function(ans,num){return ans+num},0)
}
function arraySumLoop(arr){
    var sum=0
    for (var index = 0; index < arr.length; index++) {
        sum+=arr[index]
    }
    return sum
}
var numbers = [2, 4, 6];
console.log(arraySum(numbers));      // 12
console.log(arraySumLoop(numbers));  // 12
console.log(arraySum(numbers) === arraySumLoop(numbers)); // true

// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
function produce(arr){
    var ch=[]
    for (var index = 0; index < arr.length; index++) {
        ch.push(arr[index][0])
    }
    return ch
}
var names = ['Ali', 'Sara', 'Kareem'];
console.log(produce(names)); // ['A', 'S', 'K']

// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.
function unique(a){
    var result=[]
    for (var i=0;i<a.length;i++){
        var found=false;
        for(var j =0 ;j<result.length;j++){
            if(a[i]===result[j]){
                found=true
                break
            }
        }
        if(!found){
            result.push(a[i]);
        }
    }
    return result
}
// better solution
function uniqueFast(a) {
    var result=[];
    var seen={};
    for(var i =0;i<a.length;i++){
        if(!seen[a[i]]){
            result.push(a[i])
            seen[a[i]]=true
        }
    }
    return result
}
var arr = [1, 2, 2, 3, 4, 4, 5];
console.log(unique(arr)); // [1, 2, 3, 4, 5]
console.log(uniqueFast(arr))
// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).
function flatten1(arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            for (var j=0;j<arr[i].length;j++){
                result.push(arr[i][j]);
            }
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flatten1([1, [2, 3], [4], 5])); // [1, 2, 3, 4, 5]
// 31. Create object person with name and age; add a new property city after creation.
person={
    name:"Ibrahim",
    age:23
};
person.city="Cairo";
console.log(person)
// 32. Access a property via bracket notation with a dynamic key variable.
var key="age";
var key2="city";
console.log(person[key])
console.log(person[key2])

// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).
function countKeys(obj){
    if(obj==null || typeof obj !== "object")return 0;
    return Object.keys(obj).length
}
var car = { brand: "Toyota", model: "Corolla" };
console.log(countKeys(car)); // 2
// 39. List (as comments) 5 different values that coerce to false in ES5.
// Falsy values in ES5:

// 1. false        → The Boolean false itself
// 2. 0            → The number zero
// 3. ""           → An empty string
// 4. null         → Represents intentional absence of any value
// 5. undefined    → A variable that has been declared but not assigned

// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.
function safeToBoolean(v){
    return v===true||v==='true'||v==='1'||v===1;
}

// 41. Create a Date for Jan 1, 2025 00:00 local.
var newYear2025=new Date(2025,0,1) //jan is 0 based

// 42. Get the current year from new Date().
var currentYear= new Date().getFullYear()
console.log(currentYear)

// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).
function daysBetween(d1,d2){
    var msPerDay=1000*60*60*24;
    var diff=Math.abs(d2.getTime()- d1.getTime());
    return Math.floor(diff/msPerDay);
}
var date1 = new Date("2025-08-20");
var date2 = new Date("2025-08-22");
console.log(daysBetween(date1, date2)); // 2

// 44. Generate a random integer 1..100.
console.log(+(Math.random() *100).toFixed(0))

// 45. Round 4.567 to the nearest integer, round down, and round up (three results).
var num=4.567
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
function randomIntArray(n,min,max){
    var arr=[]
    for(var i=0;i<n;i++){
        var num=Math.floor(Math.random()*(max-min+1))+min
        arr.push(num)
    }
    return arr
}
console.log(randomIntArray(5, 1, 10));
console.log(randomIntArray(5, 4, 12));

// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).
function parsePriceList(str){
    var obj={}
    var items=str.split(';')
    for(var i=0;i<items.length;i++){
        var parts=items[i].split(':')
        obj[parts[0].trim()]=parseFloat(parts[1])
    }
    return obj;
}
console.log(parsePriceList('Apple:2.50;Orange:1.75;Banana:3'))

// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
function filterAndSortNumbers(mixedArray){
    mixedArray=mixedArray.filter(function(num){
        return typeof num==="number" && isFinite(num);
    });
    mixedArray=mixedArray.sort(function(a,b){
        return a-b
    })
    return mixedArray
}
var data = [3, "hello", 7, Infinity, null, 2, "42", NaN, -1, 5];
console.log(filterAndSortNumbers(data))