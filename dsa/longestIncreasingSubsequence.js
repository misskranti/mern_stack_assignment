function lengthOfLIS(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return 0;

  const sub = [];

  for (const num of nums) {
    let left = 0, right = sub.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sub[mid] < num) left = mid + 1;
      else right = mid;
    }
    sub[left] = num;
  }

  return sub.length;
}

// Example:
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
