// ===============================
// JavaScript Identifier Rules
// ===============================

// Rule 1:
// Identifier can contain letters, digits, underscore (_) and dollar sign ($)

let userName = "Akhilesh";
let user_name = "John";
let user1 = 101;
let $price = 500;

console.log(userName);
console.log(user_name);
console.log(user1);
console.log($price);


// ------------------------------------

// Rule 2:
// Identifier cannot start with a number

// Invalid
// let 1user = "Rahul"; ❌

// Valid
let user2 = "Rahul";
console.log(user2);


// ------------------------------------

// Rule 3:
// Identifier can start with underscore (_) or dollar sign ($)

let _data = "Stored Data";
let $amount = 1000;

console.log(_data);
console.log($amount);


// ------------------------------------

// Rule 4:
// JavaScript keywords cannot be used as identifiers

// Invalid
// let for = 10; ❌
// let class = "JS"; ❌

// Valid
let courseName = "JavaScript";
console.log(courseName);


// ------------------------------------

// Rule 5:
// Identifiers are case-sensitive

let city = "Delhi";
let City = "Mumbai";

console.log(city); // Delhi
console.log(City); // Mumbai


// ------------------------------------

// Rule 6:
// Spaces are not allowed in identifiers

// Invalid
// let user name = "Aman"; ❌

// Valid
let userName1 = "Aman";
console.log(userName1);


// ------------------------------------

// Rule 7:
// Special characters are not allowed except _ and $

// Invalid
// let user-name = "Sam"; ❌
// let user@name = "Sam"; ❌

// Valid
let user_name2 = "Sam";
console.log(user_name2);


// ------------------------------------

// Rule 8:
// Unicode characters can also be used

let café = "Coffee";
console.log(café);


// ------------------------------------

// Rule 9:
// Meaningful identifiers are recommended

let age = 25;          // Good
let a = 25;            // Not recommended

console.log(age);


// ------------------------------------

// Rule 10:
// Naming conventions (Type Cases)

// camelCase (variables, functions)
let firstName = "Akhilesh";
let lastName = "Mittal";
function getUserName() {
  return firstName + " " + lastName;
}

// PascalCase (classes, constructors)
class Person {
  constructor(name) {
    this.name = name;
  }
}
let PersonObject = new Person("John");

// snake_case (less common in JS, used in some codebases)
let first_name = "Akhilesh";
let last_name = "Mittal";

// SCREAMING_SNAKE_CASE (constants)
const MAX_LIMIT = 100;
const API_KEY = "abc123";

// Lowercase single word (simple variables)
let count = 0;
let total = 50;

// Hungarian Notation (prefix indicates type)
let strName = "Akhilesh";
let intCount = 25;
let boolIsValid = true;
let arrItems = [1, 2, 3];
let objPerson = { name: "John" };

// Kebab-case  (NOT valid in JS — hyphens not allowed)
// let user-name = "Sam";     ❌
// let first-name = "John";   ❌

// Train-Case / HTTP-Header-Case  (NOT valid in JS — hyphens not allowed)
// let User-Name = "Sam";     ❌
// let First-Name = "John";   ❌

console.log(firstName, lastName);
console.log(first_name, last_name);
console.log(MAX_LIMIT, API_KEY);
console.log(count, total);
console.log(strName, intCount, boolIsValid, arrItems, objPerson);
