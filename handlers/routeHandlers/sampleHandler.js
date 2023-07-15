/**
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Mutaher Ahmed Shakil
 * Date: 07/14/2023
 * 
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;