let express = require('express');

let port = 80;
let app = express();
app.use(express.static('public'));
app.listen(port, console.log.bind(console, `listening on port ${port}`);
