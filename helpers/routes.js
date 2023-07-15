/**
 * Title: Routes
 * Description: Application Routes
 * Author: Mutaher Ahmed Shakil
 * Date: 07/14/2023
 * 
 */

// dependencies
const { sampleHandler } = require('../handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
}

module.exports = routes;