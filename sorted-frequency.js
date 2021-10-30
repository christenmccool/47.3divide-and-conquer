function sortedFrequency(arr, num) {
  const first = findFirst(arr, num);
  if (first === -1) return -1;
  const last = findLast(arr, num);

  return last - first + 1;
}

function findFirst(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  let first = -1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] == num) {
      first = mid
      right = mid - 1;
    } else if (arr[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return first;
}

function findLast(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  let last = -1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] == num) {
      last = mid
      left = mid + 1;
    } else if (arr[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return last;
}


module.exports = sortedFrequency

