import http from "http";
import app from "./app";

//Use system configuration for port or use 3000 by default.
const port = process.env.port || 3000;

//Create server with exported express app
const server = http.createServer(app);
server.listen(port);
