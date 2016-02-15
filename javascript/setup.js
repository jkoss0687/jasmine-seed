function fizzBuzz(n){
    var testNum = n.toString();
    // // var finalAns = "";

    if(testNum.indexOf("7") !== -1){
      return "Woof";
    }
    
  if(isDivisibleBy(n, 15)){
      return "FizzBuzz";
    }else if (isDivisibleBy(n, 21)) {
      return "FizzWoof";
    }else if(isDivisibleBy(n, 35)){
      return "BuzzWoof";  
    }else if(isDivisibleBy(n, 5)){
      return "Buzz";
    }else if(isDivisibleBy(n, 3)){
      return "Fizz";
    }else if(isDivisibleBy(n, 7)){
        return "Woof";
    }
  return n;
  }



function isDivisibleBy(n, divisor){
   return n % divisor === 0;
 }

for(var i =1; i<=100; i++){
   console.log(fizzBuzz(i));
 }
