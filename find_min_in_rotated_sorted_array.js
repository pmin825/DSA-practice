// const findMin = (nums) => {
//     let smallest = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         smallest = Math.min(smallest, nums[i]);
//     }
//     return smallest;
// };


//binary search approach
const findMin = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }   else {
            right = mid;
        }
    }
    return nums[left]
}