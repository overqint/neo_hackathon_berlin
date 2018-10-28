const Hapi = require('hapi');
const CreateNftEndpoint = require('./services/create_nft_endpoint');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:5000
});

server.route({
    method: 'GET',
    path: '/api/total-supply',
    handler: async function (request, h) {
        const createNftEndpoint = new CreateNftEndpoint(request.params.nft_hash);
        const responseEndpoint = await createNftEndpoint.totalSupply();
        const response = h.response(responseEndpoint.data);
        response.code(200);
        response.header('Content-Type', 'application/json; charset=utf-8');
        return response;
    }
});

server.route({
    method: 'GET',
    path: '/api/register',
    handler: async function (request, h) {
        const createNftEndpoint = new CreateNftEndpoint(request.params.nft_hash);
        const responseEndpoint = await createNftEndpoint.register();
        const response = h.response(responseEndpoint.data);
        response.code(200);
        response.header('Content-Type', 'application/json; charset=utf-8');
        return response;
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

// Start the service
start();