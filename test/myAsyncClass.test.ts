import { MyAsyncClass } from "../src/myAsyncClass";
import { expect } from "chai";

let mathAsyncObj: MyAsyncClass = new MyAsyncClass();

// In this test source file we are going to test asynchronous code
// with Mocha

//There are three (3) ways to structure async test with Mocha
//1. With async/await (the callback of it() is async and we await the promise)
//2. Returning a promise to it()'s callback & then promise chaining.. --> .then
//3. using done()

describe("Async Test Suite", function () {
  it("Testing Async add v.1", async function () {
    const res = await mathAsyncObj.add(3, 4);
    expect(res).to.be.equal(7);
  });

  //Another way to test the exactly same thing as above
  it("Testing Async add v.1.2", async function () {
    expect(await mathAsyncObj.add(3, 4)).to.be.equal(7);
  });

  //Another way to test the exactly same thing as above
  it("Testing Async add v.2", function () {
    return mathAsyncObj
      .add(3, 4)
      .then((res) => {
        expect(res).to.be.equal(7);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  //Another way to test the exactly same thing as above
  it("Testing Async add v.3", function (done) {
    //this.timeout(5000000000);
    mathAsyncObj
      .add(3, 4)
      .then((res) => {
        expect(res).to.be.equal(7);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
