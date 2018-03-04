module.exports = function getZerosCount(number, base) {
  const simples = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
  
  let temp = base;
  
  let Base = [];
  let baseIsSimple = false;
  
  let neededSimples = [];
  for (let i = 0; i < simples.length; i++) {
    if (simples[i] > base) {
      break;
    } else if (simples[i] === base) {
      baseIsSimple = true;
      neededSimples = [];
      break;
    } else {
      neededSimples.push(simples[i]);
    }
  }
  
  function baseToSimples(tmp, s) {
    let pow = 0;
    while (tmp % s === 0) {
      tmp /= s;
      pow++;      
    }
    Base.push([s, pow]);
    temp = tmp;
    return tmp;
  }
  
  if (baseIsSimple === false) {
    for (let i = neededSimples.length - 1; i > -1; i--) {
      if (temp % neededSimples[i] === 0) {
        baseToSimples(temp, neededSimples[i]);      
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