function sum(args) {
  
  let total = 0;
  
  for (let arg of args) {
    total += Number(arg);
  }

  return total;

}

const args = process.argv.slice(2);
console.log(sum(args));

