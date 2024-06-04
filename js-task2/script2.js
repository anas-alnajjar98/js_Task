function tellFortune(a,b,c,d){
    console.log(`You will be a ${a} in ${b}, and married to ${c} with ${d} kids.`);
}
function calculateDogAge(a){
    document.write(`Your doggie is ${a*7} years old in dog years!`)
}
function calculateSupply(a,b){
    document.write((a*365)*b);
}
function greet(name){
  return(`hello ${name}`)
}
// what is the error:
function double(cat) {//replace x with cat
  return 2 * cat;
}

function double(x) {//function should take parameter instead of a literal number 7
  return 2 * x;
}

function double(x) {//function should take parameter instead of a literal number 7 and x is not define
  return 2 * 'x';
}
   function double1(x){// func double1(x {
                        //     return 2 * x ;
                        //   }
    return 2*x;}
  
//   functiondouble2 x)
//   return 2 * x;
//   }
  function double2(x){
    return 2*x;
  }
//   function (x) double3 {
//     return 2 * x;
function double3(x){
    return 2*x;
}
function cube(a){
    console.log(a**3)
}
cube(4);
function multiply(a,b){
    return a*b;
}
function canIGetADrivingLicense(a) {
    const b = 20; 
    if (a >= b) {
      console.log( "Yes, you can!");
    } else {
      const c = b - a;
      console.log( `Please come back after ${c} years to get one.`); 
    }
  }
  canIGetADrivingLicense(17);
  function sameLength(s1, s2) {
    return s1.length === s2.length; 
  }
  console.log(sameLength("tree","clue"));
  console.log(sameLength("tree","car"));
  function largerNubmer(m1,m2){
    return Math.max(m1,m2);
  }
  console.log(largerNubmer(1,5))
  function smallerNubmer(a,b,c){
    return Math.min(a,b,c);
  }
  console.log(smallerNubmer(8,6,7));
  function shorterString(a){
    let short=a[0];
    for (let i=0;i<a.length;i++){
        if(short.length>a[i].length){
            short=a[i];
        }
    }
    console.log( short)
  }
  shorterString(["air","tr","car","github","by"]);
  function longerString(a){
    let larg=a[0];
    for (let i=0;i<a.length;i++){
        if(larg.length<a[i].length){
            short=a[i];
        }
    }
    console.log( larg)
  }
  function isEven(a){
    return a%2==0
  }
console.log(isEven(3));
function isOdd(a){
    return a%2!==0
}
console.log(isOdd(3));
function positive(a) {
    return Math.abs(a);}
function fullName(fn,ln){
    let result = fn.concat(" ", ln);
    return result
}
console.log(fullName("Adam","McCallen"));
function average(a){
    let sum=0;
   for (let i=0;i<a.length;i++){
    sum+=a[i];
   }
   return sum/(a.length);
}
console.log(average([1,2,3,4,5]));
function randomNumber() {
    return Math.random();
  }
  function randomBetweenNumbers(min, max) {
    return Math.random() * (max - min) + min;
  }
  function scoreInUniversty(s) {
    if (s >= 95) {
      return "A";
    } else if (s >= 85) {
      return "B";
    } else if (s >= 70) {
      return "C";
    } else if (s >= 50) {
      return "D";
    } else {
      return "F";
    }
  }
  let count=0;
  function counter(){
    count++;
    return count;
  }
