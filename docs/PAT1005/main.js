const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const translateMap = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
};

rl.on('line', (line) => {
  const sum = line.split('').reduce((sum, numstr) => {
    return sum + parseInt(numstr);
  }, 0);
  const resultArr = sum.toString().split('').map(num => {
    return translateMap[num];
  });
  console.log(resultArr.join(' '));
  rl.close();
});