const cluster = require('cluster');
const http = require('http');
const numCPUs = 2; //require('os').cpus().length;

const PORT=8080; 

/*
if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ${worker.process.pid} died');
    });
}
else
{
*/
    // Workers can share any TCP connection
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end('GET');
    })
    .listen(PORT);
//}