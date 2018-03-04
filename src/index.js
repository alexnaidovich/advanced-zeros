module.exports = function getZerosCount(number, base) {
  // Try #1.
  // by @alexnaidovich 2018-3-02
// DON'T FORGET TO DELETE LINE 7 AND UNCOMMENT LINE 1 AFTER LOCALHOST TEST!!!!!!!!
  

//function getZerosCount(number, base) {
  // Just for case: let's get the speed of this all!
  
  // I gonna need those simple integers:
  const simples = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
  
  // As I'm going to "simplify" base, I need a
  // temporary integer variable for modified base...
  let temp = base;
  
  // ... and an array implementation of modified base
  let Base = [];
  let baseIsSimple = false;
    
  // Temporary base of simples that are not larger than base
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
  
  // Getting simple integers the base consists of, 
  // and the pows of these integers  
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
  /*
  // Checking the divisibility
  let Num = new Array(number);
  
  let sums = new Array(Base.length);
  for (let i = 0; i < sums.length; i++) {sums[i] = 0;}
    
  for (let i = 2; i <= Num.length; i++) {
    for (let j = 0; j < Base.length; j++) {
      let tmp = i;
      let sum = 0;
      while(tmp % Base[j][0] === 0) {
        tmp = Math.floor(tmp / Base[j][0]);
        sum++;
      }
      sums[j] += sum;
    }
  }

  let result = sums[0] / Base[0][1];
  for (let i = 0; i < Base.length; i++) {
    result = Math.floor(Math.min(result, (sums[i] / Base[i][1])));
  }
  
  */
  
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