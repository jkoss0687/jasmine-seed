describe('FizzBuzz',function(){
  describe ('- numbers not divisible by 3 or 5 print the number -', function(){
    it('should print 1 when passed 1',function(){
      expect(fizzBuzz(1)).toBe(1);
    });
    it('should print 2 when passed ',function(){
      expect(fizzBuzz(2)).toBe(2);
    });
  });
});

describe('- numbers divisible by 3 print "fizz" - ', function(){
  it('should print Fizz when passed 3', function(){
    expect(fizzBuzz(3)).toBe("Fizz");
  });
    it('should print Fizz when passed 6', function(){
    expect(fizzBuzz(6)).toBe("Fizz");
  });
});

describe('- numbers divisible by 5 print "Buzz" - ', function(){
  it('should print Buzz when passed 5', function(){
    expect(fizzBuzz(5)).toBe("Buzz");
  });
    it('should print Buzz when passed 10', function(){
    expect(fizzBuzz(10)).toBe("Buzz");
  });
});

describe('-numbers divisible by 3 and 5 print "FizzBuzz"', function(){
    it('should print FizzBuzz when passed 15', function(){
      expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it('should print FizzBuzz when passed 30', function(){
      expect(fizzBuzz(30)).toBe("FizzBuzz");
    });
});

describe('-numbers divisible by 7 or containing 7 print "Woof"', function(){
    it('should print Woof when passed 14', function(){
      expect(fizzBuzz(14)).toBe("Woof");
    });
    // it('should print FizzBuzz when passed 28', function(){
    //   expect(fizzBuzz(28)).toBe("Woof");
    // });
});

describe('-numbers divisible by 3 and 7 print "FizzWoof"', function(){
    it('should print FizzWoof when passed 21', function(){
      expect(fizzBuzz(21)).toBe("FizzWoof");
    });
    it('should print FizzWoof when passed 42', function(){
      expect(fizzBuzz(42)).toBe("FizzWoof");
    });
});

describe('-numbers divisible by 5 and 7 print "BuzzWoof"', function(){
    it('should print BuzzWoof when passed 35', function(){
      expect(fizzBuzz(35)).toBe("BuzzWoof");
    });
    // it('should print BuzzWoof when passed 70', function(){
    //   expect(fizzBuzz(70)).toBe("BuzzWoof");
    // });
});

describe('-numbers containing 7 print "Woof', function(){
  it('should print Woof if 7 is in the string', function(){
    expect(fizzBuzz(47)).toBe("Woof");
  })
})



