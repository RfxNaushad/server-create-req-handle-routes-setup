/*  
  Title: Uptime Monitoring Application
  Description: A Restful API to monitor up or down time fof user defined links
  Author: Naushad Karim
  Date: 
*/

// dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes')
// const { read } = require('fs');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000
}

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`)
    })
}

// handle req and response
app.handleReqRes = handleReqRes;

// start server
app.createServer()