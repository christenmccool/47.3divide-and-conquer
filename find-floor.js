function findFloor(arr, num) {
  if (num < arr[0]) return -1;

  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      return arr[mid];
    }
    if (arr[mid] < num) {
      if (mid===right || arr[mid+1] > num) {
        return arr[mid];
      } else {
        left = mid + 1;
      }
    } else {
      right = mid - 1;
    }
  }
}

module.exports = findFloor