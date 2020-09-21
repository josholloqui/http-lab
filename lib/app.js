const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const { path, method, body } = parseRequest(data.toString());

    if(path === '/' && method === 'GET') {
      socket.end(createResponse({ responseBody: 'hi', contentType: 'text/html', status: '200 OK' }));
    } else if(path === '/echo' && method === 'POST') {
      socket.end(createResponse({ responseBody: body, contentType: 'text/html', status: '200 OK' }))  ;
    } else if(path === '/red' && method === 'GET') {
      socket.end(createResponse({ responseBody: '<html><body><h1>red</h1></body></html>', contentType: 'text/html', status: '200 OK' }))  ;
    } else if(path === '/green' && method === 'GET') {
      socket.end(createResponse({ responseBody: '<html><body><h1>green</h1></body></html>', contentType: 'text/html', status: '200 OK' }))  ;
    } else if(path === '/blue' && method === 'GET') {
      socket.end(createResponse({ responseBody: '<html><body><h1>blue</h1></body></html>', contentType: 'text/html', status: '200 OK' }))  ;
    } else {
      socket.end(createResponse({ responseBody: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
    
  });
});

module.exports = app;
