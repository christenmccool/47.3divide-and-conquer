function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  let numZeros = 0;

  while (left <= right) {
    const middleInd = Math.floor((left + right) / 2);
    if (arr[middleInd] === 0) {
      numZeros = arr.length - middleInd;
      right = middleInd - 1;
    } else {
      left = middleInd + 1;
    }
  }
  return numZeros;
}

module.exports = countZeroes