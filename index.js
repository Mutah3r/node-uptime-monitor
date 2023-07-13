/**
 * Title: Uptime Monitoring Application
 * Description: A RestFul API to monitor up or down time of user defined link
 * Author: Mutaher Ahmed Shakil
 * Date: 07/14/2023
 * 
 */

// dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        // console.log(`listening to port`);
        console.log('server running')
    });
}

// handle Request Response
app.handleReqRes = (req, res) => {
    // response handle
    res.end("Uptime monitor server is running");
}

// start the server
app.createServer();