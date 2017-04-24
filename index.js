const db = require('./server/db');
const app = require('./server/app');
var http = require('http');

const port = process.env.PORT || 3000;

db.sync().then(() => http.createServer(app).listen(port, () => console.log(`listening on port ${port}`)));

