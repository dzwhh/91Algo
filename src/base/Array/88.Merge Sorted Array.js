/**
 * 88.Merge Sorted Array
 */

const merge = (nums1, m, nums2, n) => {
  let p1  = m - 1, p2 = n - 1, tail = m + n - 1, cur;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1){
      cur = nums2[p2--];
    } else if (p2 === -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
}


// Example
nums1 = [1,2,3];
m = 3;
nums2 = [2,5,6];
n = 3;
console.log(merge(nums1, m, nums2, n));