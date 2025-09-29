// 1- Write a function that greets a user, using a default parameter for the name.
function greet_user(greeting = "Hello", user = "Hima") {
    console.log(`${greeting}, ${user}!`);
}
greet_user();
greet_user("Hola");
greet_user("Hola","Omar");
// 2- Write a function that calculates the total price with a default tax rate parameter.
function calculateTotalPrice(price,taxRate=0.1) {
    return price + (price*taxRate)
}
console.log(calculateTotalPrice(100));      
console.log(calculateTotalPrice(200, 0.2));
// 3- Write a function that creates a user object, using a default role parameter.
function createUser(name,role="guest"){
    return{
        name:name,
        role:role
    };
};
console.log(createUser("Hima")); 
console.log(createUser("Sara", "admin")); 
// 4- Write a function that multiplies any number of arguments using the rest operator.
function multiplyAll(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

console.log(multiplyAll(2,3));
console.log(multiplyAll(2,3,4));
console.log(multiplyAll());
// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multipliesSum(first,...rest){
    const sum=rest.reduce((acc,val)=>acc+val,0);
    return first *sum;
}
console.log(multipliesSum(2, 3, 4, 5));
console.log(multipliesSum(10));         
// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function collectStrings(...strings){
    return strings;
}
console.log(collectStrings("apple", "banana", "cherry"));
console.log(collectStrings());
// 7- Create a new array by combining two arrays using the spread operator.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray=[...array1,...array2];
console.log(combinedArray);
// 8- Copy an array using the spread operator.
const originalArray = [10, 20, 30];
const copiedArray=[...originalArray]
console.log(copiedArray)
// 9- Merge two objects into one using the spread operator.
const obj1={name:"Alice",age:25};
const obj2={city:"Cairo",job:"Fullstackdev"};
const mergedObj={...obj1,...obj2};
console.log(mergedObj);
// 10- Update a property in an object using the spread operator to create a new object.
const originalObj = { name: "Alice", age: 25 };
const updatedObj={...originalObj,age:30}
console.log(updatedObj);
// 11- Destructure an array to get the first and second elements into variables.
const numbers=[10,20,30,40];
const [first,second]=numbers;
console.log(first);
console.log(second);
// 12- Destructure an array to get the first element and the rest into another array.
const arr = [10, 20, 30, 40, 50];
const [firstElement, ...restElements] = arr;
console.log(firstElement);
console.log(restElements);
// 13- Destructure an object to extract two properties into variables.
const person = {
  Name: "Alice",
  age: 30,
  city: "Cairo"
};
const {Name,age}=person;
console.log(Name);
console.log(age);
// 14- Destructure an object and rename the extracted properties.
const user = {
  id: 101,
  username: "coder123",
  location: "Cairo"
};
const {id:UserId , username:name}=user;
console.log(UserId);
console.log(name);
// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function destructuringObject({name:userName='Guest',age,address:{city="Unknown",zip}={}}){
    console.log(`Name:${userName}`)
    console.log(`Age:${age}`)
    console.log(`City:${city}`)
    console.log(`ZIP:${zip}`)
}
const student = {
  name: "Alice",
  age: 30,
  address: {
    city: "Cairo",
    zip: "11765"
  }
};
destructuringObject(student);

