//2)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (inputNum) => {
  const num = parseInt(inputNum);

  let fib1 = 0;
  let fib2 = 1;
  let fibNext = fib1 + fib2;

  while (fibNext <= num) {
    if (fibNext === num) {
      console.log(`${num} pertence à sequência de Fibonacci!`);
      break;
    }
    fib1 = fib2;
    fib2 = fibNext;
    fibNext = fib1 + fib2;
  }

  if (fibNext > num) {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }

  rl.close();
});