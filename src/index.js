module.exports = function getZerosCount(number, base) {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
  
  let temp = base;
  
  let Base = [];
  let baseIsPrime = false;
  
  let neededPrimes = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i] > base) {
      break;
    } else if (primes[i] === base) {
      baseIsPrime = true;
      neededPrimes = [];
      break;
    } else {
      neededPrimes.push(primes[i]);
    }
  }
  
  function baseToPrimes(tmp, s) {
    let pow = 0;
    while (tmp % s === 0) {
      tmp /= s;
      pow++;      
    }
    Base.push([s, pow]);
    temp = tmp;
    return tmp;
  }
  
  if (baseIsPrime === false) {
    for (let i = neededPrimes.length - 1; i > -1; i--) {
      if (temp % neededPrimes[i] === 0) {
        baseToPrimes(temp, neededPrimes[i]);      
      }
    }
  } else {
    Base.push([base, 1]);
  }
  
  let tempResultArray = [];
  let result = 0;
  
  for (let i = 0; i < Base.length; i++) {
    for (let j = 1; (number / Math.pow(Base[i][0], j)) > 1; j++) {
      result += Math.floor((number / Math.pow(Base[i][0], j)));
    }
    tempResultArray.push(Math.floor(result / Base[i][1]));
    result = 0;
  }
  console.log(Math.min(...tempResultArray));
  
  return Math.min(...tempResultArray);
  
}