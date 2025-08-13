import express from "express";
// import promClient from "prom-client";
import type { NextFunction, Request, Response } from "express";
import client from "prom-client";

// Create a counter metric
const requestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code']
});

const activeRequestsGauge = new client.Gauge({
    name: 'active_requests',
    help: 'Number of active requests'
});

const httpRequestDurationMicroseconds = new client.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000] // Define your own buckets here
});

export function middleware(req: Request, res: Response, next: NextFunction){
    if(req.path !== "/metrics"){
        activeRequestsGauge.inc();
    }
    const startTime = Date.now();
    res.on('finish', () => {
        const endTime = Date.now();

        requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode
        });

        if(req.path !== "/metrics"){
            activeRequestsGauge.dec();
        }

        httpRequestDurationMicroseconds.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            code: res.statusCode
        }, endTime - startTime)
    });

    next();
};

const app = express();
app.use(middleware);

app.get("/cpu",async (req, res) => {
    await new Promise(s => setTimeout(s, 2000));
    for(let i=0; i<100000; i++){
        Math.random();
    }
    res.json({
        message:"cpu"
    })
    
})

app.get("/users",(req, res) => {
    
    res.json({
        message:"user"
    })
    
})

app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    console.log(client.register.contentType);
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})

app.listen(3000);