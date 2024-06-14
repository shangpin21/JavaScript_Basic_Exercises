// declare function with a given array of integers as the parameter

const count_inversion = (arr) => {
    function mergeAndCount(arr, tempArr, left, mid, right) {
        let i = left; // Starting index for left subarray
        let j = mid + 1; // Starting index for right subarray
        let k = left; // Starting index to be sorted
        let invCount = 0;
    
        // Conditions are checked to ensure that i doesn't exceed mid and j doesn't exceed right
        while (i <= mid && j <= right) {
          if (arr[i] <= arr[j]) {
            tempArr[k++] = arr[i++];
          } else {
            tempArr[k++] = arr[j++];
            // There are mid - i inversions, because all elements left to i in the left subarray
            // are greater than arr[j]
            invCount += (mid - i + 1);
          }
        }
    
        // Copy the remaining elements of left subarray, if any
        while (i <= mid) {
          tempArr[k++] = arr[i++];
        }
    
        // Copy the remaining elements of right subarray, if any
        while (j <= right) {
          tempArr[k++] = arr[j++];
        }
    
        // Copy the sorted subarray into Original array
        for (i = left; i <= right; i++) {
          arr[i] = tempArr[i];
        }
    
        return invCount;
      }
    
      // Helper function to use merge sort and count inversions
      function mergeSortAndCount(arr, tempArr, left, right) {
        let invCount = 0;
        if (left < right) {
          let mid = Math.floor((left + right) / 2);
    
          invCount += mergeSortAndCount(arr, tempArr, left, mid);
          invCount += mergeSortAndCount(arr, tempArr, mid + 1, right);
          invCount += mergeAndCount(arr, tempArr, left, mid, right);
        }
        return invCount;
      }
    
      // Create a temporary array
      let tempArr = Array.from(arr);
      return mergeSortAndCount(arr, tempArr, 0, arr.length - 1);
    };
    


// Example usage
const arr = [1, 5, 4, 3];
const numInversions = count_inversion(arr);
console.log(`Number of inversions: ${numInversions}`); // Output: 5

