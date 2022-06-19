/*
Title: Routes
Description: Application Routes
Author: Naushad Karim
*
*
*
*
*
*/

// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandlers')
const routes = {
    sample: sampleHandler,
};

module.exports = routes;