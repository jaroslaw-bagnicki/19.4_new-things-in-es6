require('colors');

// Task 1
console.log('Task 1: Cocat two string with template literal\n'.underline.green);

const string1 = 'Hello';
const string2 = 'World';
console.log('string1'.yellow, string1);
console.log('string2'.yellow, string2);
console.log('`${string1} $string2}`'.yellow, `${string1} ${string2}`);

// Task2
console.log('\nTask2: Arrow function\n'.underline.green);

const multipy = (a, b = 1) => a * b;
console.log('const multipy = (a, b = 1) => a * b;'.yellow);
console.log('multipy(2,5)'.yellow, multipy(2,5));
console.log('multipy(6,6)'.yellow, multipy(6,6));
console.log('multipy(5)'.yellow, multipy(5));

// Task 3
console.log('\nTask3: Avarge function\n'.underline.green);

function average() {
  let sum = 0;
  Array.from(arguments).forEach( arg => sum = sum + arg);
  return (sum / arguments.length);
}

console.log(`function average() {
  let sum = 0;
  Array.from(arguments).forEach( arg => sum = sum + arg);
  return (sum / arguments.length);
}
`.yellow);

console.log('average(1)'.yellow, average(1));
console.log('average(1, 3)'.yellow, average(1, 3));
console.log('average(1, 3, 6, 6)'.yellow, average(1, 3, 6, 6));

// Task 4
console.log('\nTask4: Spread operator\n'.underline.green);

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log('const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]'.yellow);
console.log('average(...grades)'.yellow, average(...grades));

// Task 5
console.log('\nTask5: Destructuring\n'.underline.green);

const strangeArr = [1, 4, 'Iwona', false, 'Nowak'];
console.log(`const strangeArr = [1, 4, 'Iwona', false, 'Nowak']`.yellow);
[, , firstName, , lastName] = strangeArr;
console.log('[, , firstName, , lastName] = strangeArr'.yellow);
console.log('firstName'.yellow, firstName);
console.log('lastName'.yellow, lastName);
