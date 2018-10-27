'use strict';
const apiClient = require('./apiClient');

const Hapi = require('hapi');

const environment = {
  networkConfig: {
    name: 'PrivateNet',
    extra: {
      neoscan: 'http://localhost:4000/api/main_net',
      neonode: "http://localhost:30333"
    }
  },
  neoAddress: "AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y",
  contractScript: "e93a687dc733f19c0315fd88227ca018b5919051",
}


// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 8000
});

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, h) {
    apiClient.init();
    this.apiClient.invokeScript('totalSupply')
      .then(res => {
        let value = res.result.stack[0].value
        let totalSupply = u.Fixed8.fromReverseHex(value)

        console.log("totalSupply", totalSupply.toFixed())
      });
    return 'hello world';
  }
});

// Start the server
async function start() {

  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();