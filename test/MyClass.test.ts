import { MyClass } from "../src/myClass";
import { expect } from "chai";
import { assert } from "chai";

let mathObj: MyClass = new MyClass();

//Now we will write our test suites (contain a grouped collection of test cases)
//To write a test suite in Mocha we use the 'describe' keyword/method
// describe ( "NameOfTestSuite", function () {...contains test cases...} );
//In mocha to write a test case we use the "it" keyword/method
//  it("nameOfTestCase", function () {...contains an assertion interface...})
//Inside the test case we use an assertion interface like 'expect' from chai

//Example of a Test Suite that contains only one (1) test case
describe("MyFirstTestSuite", function () {
  it("Testing add method", function () {
    expect(mathObj.add(1, 2)).to.be.equal(3);
  });
});

//Example of a Test Suite that contains multiple (two (2)) test cases
describe("MySecondTestSuite", function () {
  //1st test case
  it("Testing add method", function () {
    expect(mathObj.add(5, 2)).to.be.equal(7);
  });

  //2nd test caase
  it("Testing sub method", function () {
    expect(mathObj.sub(6, 2)).to.be.equal(4);
  });
});

//We can also skip (ignore) Test suites by using the 'skip' property/method
//All test cases inside a skipped test suite will not run (will be pending)
describe.skip("A test suite that will be ignored/skipped", function () {
  it("A pending test case", function () {
    expect(mathObj.add(1, 1)).to.be.greaterThan(1);
  });

  it("Another pending test case", function () {
    expect(mathObj.add(2, 1)).to.be.equal(3);
  });
});

//We can also skip (ignore) test cases inside a test suite by using the 'skip' property/method
describe("A test suite with a skipped test case", function () {
  it("Test that will run", function () {
    expect(mathObj.add(3, 3)).to.not.be.equal(3);
  });

  it.skip("Test that will be skipped", function () {
    expect(mathObj.add(0, 0)).to.be.lessThan(1);
  });

  it("Test that will also run", function () {
    expect(mathObj.sub(3, 4)).to.be.lessThan(0);
  });
});

//We can use nested describe() to have nested Test Suites
describe("Nested TestSuit", function () {
  describe("Test suite for add & sub", function () {
    it("Testing add", function () {
      expect(mathObj.add(10, 20)).to.be.equal(30);
    });

    it("Testing sub", function () {
      expect(mathObj.sub(30, 20)).to.be.equal(10);
    });
  });
  describe("Testing suite for mul & div", function () {
    it("Testing mul", function () {
      expect(mathObj.mul(3, 3)).to.be.equal(9);
    });
    it("Testing div", function () {
      expect(mathObj.div(10, 3)).to.be.lessThan(5);
    });
  });
});

describe.skip("Test 'this.' Suite", function () {
  //The following line still gets logged even after we skip the Test Suite
  //console.log(this.root); //it evaluates to false..
  it("Testing '.this'", function () {
    this.prop = "I can set new properties";
    console.log(this.test?.title);
    console.log(this.prop);
    //assert.isString("3", "Failed")
  });
});
