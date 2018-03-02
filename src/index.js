//module.exports = function getZerosCount(number, base) {
  // Try #1.
  // by @alexnaidovich 2018-3-02
// DON'T FORGET TO DELETE LINE 7 AND UNCOMMENT LINE 1 AFTER LOCALHOST TEST!!!!!!!!
  

function getZerosCount(number, base) {
  // Just for case: let's get the speed of this all!
  let counter = 0;
  function plusCounter(c) {
    return c++;
  }
  setInterval(plusCounter(counter), 1);
  setTimeout(function () {
    clearInterval(plusCounter);
  }, 1000);
  
  // I gonna need those simple integers:
  const simples = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
  
  // As I'm going to "simplify" base, I need a
  // temporary integer variable for modified base...
  let temp = base;
  
  // ... and an array implementation of modified base
  let Base = [];
  let baseIsSimple;
    
  // Temporary base of simples that are not larger than base
  let neededSimples = [];
  for (let i = 0; i < simples.length; i++) {
    if (simples[i] > base) {
      break;
    } else if (simples[i] === base) {
      baseIsSimple = base;
      neededSimples = [];
    } else {
      neededSimples.push(simples[i]);
    }
  }
  
  // Set the pows of these simples,
  // as they are needed, they gonna be iterated
  let pows = [];
  for (x in neededSimples) {
    pows.push(0);
  }
  
  // Getting simple integers the base consists of, 
  // and the pows of these integers  
  function baseToSimples(tmp, s, pow) {
    while (tmp % s === 0) {
      tmp = tmp / s;
      pow++;      
    }
    Base.push([s, pow]);
    console.log(Base); 
    temp = tmp;
    return tmp;
  }
  
  if (base !== baseIsSimple) {
    for (let i = neededSimples.length - 1; i > -1; i--) {
      console.log(neededSimples[i]);
      console.log(temp % neededSimples[i]);
      if (temp % neededSimples[i] === 0) {
        baseToSimples(temp, neededSimples[i], pows[i]);      
      }
    }
  } else {
    Base.push[base, 1];
  }
  
  // Checking the divisibility
  let Num = new Array(number);
  
  let sumOfDivisions = [];
    
  for (let i = 2; i <= Num.length; i++) {
    let tmp = i;
    console.log(tmp);
    for (let j = 0; j < Base.length; j++) {
      console.log(Base[j][1]);
      let sum = 0;
      while(!(tmp % Base[j][1])) {
        tmp /= Base[j][1];
        sum++
      }
      sumOfDivisions.push(sum);
    }
  }

  let tmp = sumOfDivisions[0] / Base[0][1];
  
  console.log(counter + 'ms');
  
}