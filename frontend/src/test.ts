const message = "Hai";
console.log(message.toLocaleLowerCase());
message();

const user = {
    name: "Daniel",
    age: 26,
  };
  user.location; // returns undefined


  // @noUnusedLocals
// @errors: 2365
function flipCoin() {
    // Meant to be Math.random()
    return Math.random < 0.5;
  }
 

  // @errors: 2367
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // Oops, unreachable
}

// @noErrors
// @esModuleInterop
import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send
//       ^|
});

app.listen(3000);


