function checkPaliandrome(x) {
  if (x < 0) return false;

  x = x.toString();

  for (let i = 0; i < x.length / 2; i++) {
    if (x[i] !== x[x.length - (i + 1)]) {
      return false;
    }
  }

  return true;
}

console.log(checkPaliandrome(121));
