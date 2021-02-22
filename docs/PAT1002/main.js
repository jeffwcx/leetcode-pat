const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let h = 0;
const polyMap = {};
rl.on('line', function (line) {
  let currentN = -1;
  let itemNum = 0;
  line.split(/\s+/).map((numstr, index) => {
    if (index === 0) {
      itemNum = parseInt(numstr);
      return;
    }
    if (itemNum === 0) return;
    let num = parseFloat(numstr);
    if (currentN === -1) {
      currentN = num;
      if (polyMap[currentN] === undefined) {
        polyMap[currentN] = 0;
      }
    } else {
      if (num !== 0) {
        polyMap[currentN] += num;
      }
      currentN = -1;
      itemNum -= 1;
    }
  });
  if (h === 1) {
    const NS = Object.keys(polyMap);
    NS.sort((a, b) => (+b) - (+a));
    const result = [];
    let k = 0
    NS.forEach(n => {
      const item = polyMap[n];
      if (item !== 0) {
        k += 1;
        result.push(n, item.toFixed(1));
      }
    });
    result.unshift(k);
    console.log(result.join(' '));
    rl.close();
    return;
  };
  h += 1;
});
