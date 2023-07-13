/**
 * Title: Uptime Monitoring Application
 * Description: A RestFul API to monitor up or down time of user defined link
 * Author: Mutaher Ahmed Shakil
 * Date: 07/14/2023
 * 
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

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
        console.log('server running')
    });
}

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();