//5)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma string: ', (str) => {
  let novaString = '';
  for(let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
  }
  console.log(novaString);
  rl.close();
});