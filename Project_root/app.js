const http = require('http');
const rootModule = require('./Modules/Root_module.js');
const contactModule = require('./Modules/Contact_module.js');
const galleryModule = require('./Modules/Gallery_module.js');
const aboutModule = require('./Modules/About_module.js');
const notFoundModule = require('./Modules/Not_found_module.js');

const name = "Arjee Emmanuel Abella A.";

var server = http.createServer(function (req, res) {
    if (req.url == '/root' || req.url == '/') {
        res.write(rootModule(name));
        res.end();
    }
    else if (req.url == "/about") {
        res.write(aboutModule(name));
        res.end();
    }
    else if (req.url == "/contact") {
        res.write(contactModule(name));
        res.end();
    }
    else if (req.url == "/gallery") {
        res.write(galleryModule());
        res.end();
    }
    else {
        res.write(notFoundModule());
        res.end();
    }
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running..');
console.log('localhost:5000');
//Abella, Arjee Emmanuel A.
//07-23-2025 
//Section: WD-304