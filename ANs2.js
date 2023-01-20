nums = [2, 2, 1];

function checkArray(nums) {
  nums.sort();

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
}

console.log(checkArray(nums));
