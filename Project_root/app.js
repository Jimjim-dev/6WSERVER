const galleryModule = require('./module/gallery_module.js');
const aboutModule = require('./module/about_module.js');
const notFoundModule = require('./module/not_found_module.js');

const name = "Romero, Smith Dainielle L.";

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