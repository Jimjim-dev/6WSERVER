var footer = require('../Modules/Footer_module.js');
module.exports = html =function(name) {
    return `
    <html>
      <head><title>About</title></head>
      <body>
        <h1>This is the About Page</h1>
        <nav>
          <a href="/">Home</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a> |
          <a href="/gallery">Gallery</a>
        </nav>
        <p>Hello ${name}. This activity will teach you on how to deal with a simple server and local modules in Node.js</p>
        ${footer()}
      </body>
    </html>
    `;
};
//Abella, Arjee Emmanuel A.
//07-23-2025 
//Section: WD-304