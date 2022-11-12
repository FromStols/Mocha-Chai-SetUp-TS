
//This is a TypeScript script that contains asyncrhonous code
//We will test the asynchornous code with mocha library


class MyAsyncClass {
    constructor() {
        console.log("....Initializing Async Class....");
    }

    async add (num1: number, num2: number) {
        /*
        setTimeout(() => {
            return Promise.resolve(num1 + num2);
        }, 6000); */
        return Promise.resolve(num1 + num2);
    }
}




export {MyAsyncClass};