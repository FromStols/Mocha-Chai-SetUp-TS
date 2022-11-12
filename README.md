# This is A guide for setting the environment for Mocha Unit testing

## We are inside our working directory (project folder)

1. create a npm project (npm init -y)

2. create a TypeScript project (tsc --init)

3. install Mocha npm package as devDependency (npm install --save-dev mocha)

4. install Mocha TypeScript Definitions (npm install --save @types/mocha)

5. install Chai npm package as devDependency (npm install --save-dev chai)

6. install Chai TypeScript Definitions (npm install --save @types/chai)

7. install ts-node as devDependency (npm i --save-dev ts-node)

8. create folder named src that will contain our code/scripts to be tested

9. create folder named test that will contain our Mocha based tests

## Configure the package.json file to execute our custom test scripts

1. Inside package.json in the "scripts" setting/property we overwrite/set any 'test' script as:

   "test": "mocha --require ts-node/register './test/\*_/_.test.ts'"

\*\*\* To get a list of all available flags options inside a script definition

    *** via the following command : npm run test help

## EXECUTE/Run the Mocha test scripts

1. Just type the CLI command : npm run <nameOfScript> --e.g--> npm run test

## Convetions on naming test source files & directories that contain test source files

1. Regarding the directory (folder) that contains the test source files
   --- we should name it either as 'test' or 'specs'

2. Regarding the Typescript unit test source files
   -- we should name them having the extension : .spec.ts or .test.ts
   --- '_.spec.ts' or ' _.test.ts'
