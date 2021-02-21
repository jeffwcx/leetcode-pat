const fs = require('fs');
let buf = '';

process.stdin.on('readable', function() {
  const chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function() {
  buf.split('\n').forEach((line) => {
    const nums = line.split(/\s+/).map((word) => parseInt(word, 10));
    if (nums.length !== 2) return;
    let computeResult = nums.reduce((sum, num) => sum + num);
    let result = '';
    let b = 0;
    const sign = computeResult >= 0 ? '' : '-';
    if (sign === '-') computeResult = -computeResult;
    const str = computeResult.toString().split('').reverse();
    str.forEach((w, index) => {
      if (b === 2 && index !== str.length - 1) {
        result = ',' + w + result;
        b = 0;
      } else {
        result = w + result;
        b += 1;
      }
    });
    result = sign + result;
    console.log(result);
  });
});