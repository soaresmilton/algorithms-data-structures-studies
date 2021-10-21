function intersectionOfNumbers(nums1, nums2) {
  let intersectionSet = new Set();

  if (nums1.length > nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums1.includes(nums2[i]))  intersectionSet.add(nums2[i]);
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i]))  intersectionSet.add(nums2[i]);
    }
  }


  return [...intersectionSet];
}


const nums1 = [2, 4, 6, 8];

const nums2 = [1, 3, 5, 7];


console.log(intersectionOfNumbers(nums1, nums2));