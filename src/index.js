module.exports = function getZerosCount(number) {
  // your implementation
  let n=number;
  let result=0;
  while (n>0) {
    result+=Math.floor(n/=5);
  }
  return result;
}
