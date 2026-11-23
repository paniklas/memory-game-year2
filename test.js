// function sayHello() {
//     console.log("Hello, world!");
// }
// sayHello();

// function sayHello(name) {
//     console.log("Hello, " + name + '!');
// }
// sayHello("Alice");
// sayHello("Kostas");

// function calculateSum(a, b) {
//     return a + b;
// }

// calculateSum(2345, 3456);
// const sum = calculateSum(2345, 3456);
// console.log(sum);

// function calculateScore(matches, moves) {
//     return matches * 10 - moves;
// }
// const score = calculateScore(5, 12);
// console.log(score);

// function isGameComplete(matches, totalPairs) {
//     return matches === totalPairs;
// }
// const gameComplete = isGameComplete(5, 5);
// console.log("Game complete:", gameComplete); // true

// const gameIncomplete = isGameComplete(3, 5);
// console.log("Game incomplete:", gameIncomplete); // false

// function calculateAverage(a, b, c) {
//     const sum  = a + b + c;
//     return sum / 3;
// }

// const average = calculateAverage(10, 20, 30);
// console.log("Average:", average);


// const students = ['John', 'Maria', 'George', 'Anna',];
// console.log(students);
// console.log(students[0]); 
// console.log(students[1]); 
// console.log(students[2]); 
// console.log(students[3]);
// console.log(students.length);
// students.push('Panos');
// console.log(students);
// console.log(students.includes('Maria'));

// const students = ['John', 'Maria', 'George', 'Anna',];
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// students.forEach(function(student) {
//     console.log(student);
// });
// students.forEach(student => {
//     console.log(student);
// });

// const student = {
//     name: 'John',
//     age: 20,
//     grade: 'A',
//     active: true
// }
// student.city = 'Athens';
// console.log(student);

// const students = [
//     { name: 'John', grade: 'A' },
//     { name: 'Maria', grade: 'B' },
//     { name: 'George', grade: 'C' },
//     { name: 'Anna', grade: 'A' }
// ];
// console.log(students[2].name);
// console.log(students[3].grade);


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);
console.log(doubled);
