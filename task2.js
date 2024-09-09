/*
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

function findSmallestName(names) {
  let smallestName = names[0];
  for (const name of names) {
    // name.length < smallestName.length ? (smallestName = name) : null;
    if (name.length < smallestName.length) {
      smallestName = name;
    }
  }
  return smallestName;
}
const names = findSmallestName(["rahim", "robin", "rafi", "ron", "rashed"]);
console.log(names);
