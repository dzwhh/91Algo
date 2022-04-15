
/**
 * 方法 2: 哈希表
 * 通过求差的方式，每次遍历数组都让目标值减去数组元素 `target-num[i]` ，
 * 得到一个 diff 值，然后应用哈希表「Map」这样的数据结构，
 * 去记录这个 diff 差值是否已经在 map 里存在了，如果存在表示 diff + 当前数 = target，
 * 我们找到了答案，如果不存在就把当前数及其对应的索引值`[num[i],i]`，
 * 放入 map继续遍历下一个数字
 * */
const twoSum = (nums, target) => {
  let map = new Map();
  for(let i = 0; i < nums.length; i++){
    let diff = target - nums[i];
    if (map.has(diff))
      return [map.get(diff), i]
    else 
      map.set(nums[i], i);
  }
}

// Example
console.log(twoSum([2,7,6,8],9));