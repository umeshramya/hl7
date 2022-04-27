const hl7 = require("simple-hl7")

const server = hl7.Server;

const tcpServer = server.createTcpServer();
tcpServer.on("msg", (msg) => {
    console.log(msg.toString())
})

tcpServer.start(8080)