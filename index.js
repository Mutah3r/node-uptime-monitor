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
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file system
// @TODO: erase the testing code later 
data.update('test', 'newFile', {'name': 'England', 'language': 'english'}, (err) => {
    console.log(err);
});

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log('server running on port', environment.port)
    });
}

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();