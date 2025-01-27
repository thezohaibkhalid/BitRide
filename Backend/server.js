const http = require('http');
const app = require('./app.js');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const connectToDb =  require("./db/db.js");

connectToDb();
server.listen(port, ()=>{
    console.log('Server is running on port: ' + port);
})