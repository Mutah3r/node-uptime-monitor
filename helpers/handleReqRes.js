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

// handle Request Response
handler.handleReqRes = (req, res) => {
    // request handling
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    let realData = '';
    const decoder = new StringDecoder('utf-8')

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    })

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
    })


    // response handling
    res.end("Uptime monitor server is running");
}

module.exports = handler;