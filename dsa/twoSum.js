function twoSum(nums, target) {
  if (!Array.isArray(nums) || typeof target !== 'number') {
    throw new Error("Invalid input: nums should be an array and target a number.");
  }

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  throw new Error("No valid two sum solution found.");
}

// Example:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
