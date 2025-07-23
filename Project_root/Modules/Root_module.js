var footer = require('../Modules/Footer_module.js');
module.exports = function(name) {
    return `
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Welcome, to my Node.js Application</h1>
        <nav>
          <a href="/">Home</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a> |
          <a href="/gallery">Gallery</a>
        </nav>
        <p>Welcome ${name}. This is an activity about basics of Node.js</p>
        ${footer()}
      </body>
    </html>
    `;
};
//Abella, Arjee Emmanuel A.
//07-23-2025 
//Section: WD-304