//This is a TS script that we are going to test with Moch testing library
//This TS script contains synchronous code

class MyClass {

    constructor() {
        console.log("Initializing");
    }

    add (num1: number, num2: number) {
        const res: number = num1 + num2;
        return res;
    }

    sub (num1: number, num2: number) {
        const res: number = num1 -num2;
        return res;
    }

    mul (num1: number, num2: number) {
        const res: number =  num1 * num2;
        return res;
    }

    div (num1: number, num2: number) {
        const res:number = num1/num2;
        return res;
    }
}


//We need to export our class as a module in order to be accessible in the test folder where we will have
//our Mocha based test scripts
export {MyClass};