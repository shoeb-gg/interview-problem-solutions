num = 526;

function reverseNum(num) {
  let x = num;

  let newArr = [];

  let newInt = 0;

  while (x > 0) {
    let y = parseInt(x % 10);
    x = parseInt(x / 10);

    newArr.push(y);
  }

  for (let i = 0; i < newArr.length; i++) {
    newInt += newArr[i] * 10 ** (newArr.length - i - 1);

    console.log(newInt);
  }

  if (newInt === num) {
    return true;
  } else {
    return false;
  }
}

reverseNum(num);
