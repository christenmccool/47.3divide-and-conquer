function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left+right)/2);
    console.log(mid);
    if (arr[mid] === num) {
      return mid;
    } 
    if (arr[mid] > arr[mid + 1]) {
      if (num >  arr[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (num < arr[mid]) {
      right = mid - 1;
    } else if (num > arr[mid]) {
      left = mid + 1;
    }
  }
  return -1;
}


module.exports = findRotatedIndex