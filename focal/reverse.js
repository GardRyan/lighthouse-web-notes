//Fix all the errors in both files (each file may have more than one error), without changing the implementations.

const input = process.argv[2];

console.log ("hello world")

if (input)
  console.log(reverse(input));

function reverse(original) {
  return original.split('').reverse().join('');
}


