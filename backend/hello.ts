console.log("Hello world!");

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
   
  greet("Maddison", new Date());

  //The primitives: string, number, and boolean

  // Array---
  //To specify the type of an array like [1, 2, 3], you can use the syntax number[]; 
  //this syntax works for any type (e.g. string[] is an array of strings, and so on). 
  //You may also see this written as Array<number>, which means the same thing. We’ll learn more about the syntax T<U> when we cover generics.

 // any---
 // that you can use whenever you don’t want a particular value to cause typechecking errors.

 //When a value is of type any, you can access any properties of it (which will in turn be of type any), 
 // call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;


//-- When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify the type of the variable:

let myName: string = "Alice";

//-- Return Type Annotations
// You can also add return type annotations. Return type annotations appear after the parameter list:

function getFavoriteNumber(): number {
  return 26;
}
//Much like variable type annotations, 
//you usually don’t need a return type annotation because TypeScript will infer the function’s return type based on its return statements.

//-- Functions Which Return Promises
async function getFavoriteNumber(): Promise<number> {
    return 26;
  }
  

//-- Anonymous Functions
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

//-- Object Types
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });


  //-- Optional Properties
  //Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:
  function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });


  //-- 
  