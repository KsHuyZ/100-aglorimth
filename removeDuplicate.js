var removeDuplicates = function (nums) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (!newArray.includes(nums[i])) {
      newArray.push(nums[i]);
    }
  }
  let newLength = newArray.length;
  for (let i = 0; i < nums.length - newLength; i++) {
    newArray.push("_");
  }
  return newArray.length;

};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
