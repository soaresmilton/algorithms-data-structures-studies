function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return true;
    }
  }
  return false;
}

const nums = [1, 3, 8, 2];
const target = 1000;
console.log(twoSum(nums, target));

