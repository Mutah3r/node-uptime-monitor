/**
 * Title: Handle Request Response
 * Description: Handle Request Response
 * Author: Mutaher Ahmed Shakil
 * Date: 07/14/2023
 * 
 */

// module scaffolding
const handler = {};

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('./routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

// handle Request Response
handler.handleReqRes = (req, res) => {
    // request handling
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    let realData = '';
    const decoder = new StringDecoder('utf-8');

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    })

    req.on('end', () => {
        realData += decoder.end();

        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof (statusCode) === 'number' ? statusCode : 500;
            payload = typeof (payload) === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);

            // return the final response
            res.writeHead(statusCode);
            res.end(payloadString);
        });
    })

    // response handling

}

module.exports = handler;