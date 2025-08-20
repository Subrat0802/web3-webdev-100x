// import express from "express";
// import cluster from "cluster";
// import os from "os";

// const totalCPUs = os.cpus().length;

// const port = 3000;

// if (cluster.isPrimary) {
//   console.log(`Number of CPUs is ${totalCPUs}`);
//   console.log(`Primary ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < totalCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//     console.log("Let's fork another worker!");
//     cluster.fork();
//   });
// } else {
//   const app = express();
//   console.log(`Worker ${process.pid} started`);

//   app.get("/", (req, res) => {
//     res.send("Hello World!");
//   });

//   app.get("/pid", (req, res) => {
//     res.send("Hello World!" + process.pid);
//   });

//   app.get("/api/:n", function (req, res) {
//     let n = parseInt(req.params.n);
//     let count = 0;

//     if (n > 5000000000) n = 5000000000;

//     for (let i = 0; i <= n; i++) {
//       count += i;
//     }

//     res.send(`Final count is ${count} ${process.pid}`);
//   });

//   app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
//   });
// }

//-------------------------

//asignment time
// find the sum from 0 - 10000000000000000000
//print the final sum in the fastest fashion passible


const cluster = require("cluster");

if(cluster.isPrimary) {
    console.log("im prime");
    cluster.fork();
}else{
    console.log("im clild process")
    let sum = 0;
    for(let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    console.log("sum", sum);
}