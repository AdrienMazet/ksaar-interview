const getClosestNumberToZero = (numbers) => {
  if (!numbers || numbers.length === 0) return 0;

  return numbers.reduce((closestNumberToZero, currentNumber) => {
    if (Math.abs(currentNumber) === Math.abs(closestNumberToZero)) {
      return Math.max(closestNumberToZero, currentNumber);
    }

    if (Math.abs(currentNumber) < Math.abs(closestNumberToZero)) {
      return currentNumber;
    }

    return closestNumberToZero;
  });
};

console.log(getClosestNumberToZero(undefined) === 0);
console.log(getClosestNumberToZero([]) === 0);
console.log(getClosestNumberToZero([-1]) === -1);
console.log(getClosestNumberToZero([0]) === 0);
console.log(getClosestNumberToZero([1]) === 1);
console.log(getClosestNumberToZero([35, 303, 1058]) === 35);
console.log(getClosestNumberToZero([-35, -303, 1058, 35]) === 35);
console.log(getClosestNumberToZero([35, 303, 1058, -34]) === -34);
console.log(getClosestNumberToZero([-34, 0, 35, 303, 1058]) === 0);
