const fibonacci = function(num) {
  let res;
  if (typeof num != 'number') 
    res = parseInt(num);
  else 
    res = num;

  if (res < 0) return 'OOPS';
  else if (res == 0) return 0;

  let firstNum = 1, secondNum = 0;
  for (let i = 2; i <= res; i++) {
    let sumRes = firstNum + secondNum;
    secondNum = firstNum;
    firstNum = sumRes;
  }

  return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;
