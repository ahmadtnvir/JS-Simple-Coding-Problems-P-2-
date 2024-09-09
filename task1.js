/**
 * Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */
function getLowestNumber(numbers) {
  //   !Method-1
  //   let lowestNum = numbers[0];
  //   for (const number of numbers) {
  //     number < lowestNum ? (lowestNum = number) : null;
  //   }
  //   return lowestNum;
  //   !Method-2
  return Math.min(...numbers);
}

const heights = getLowestNumber([167, 190, 120, 165, 137]);
console.log(heights);
