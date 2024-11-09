// const fs = require("fs"); //file system

// const constant = fs.readFileSync("a.txt","utf-8");
// console.log(constant);

// const constant2 = fs.readFileSync("b.txt","utf-8");
// console.log(constant2);

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
