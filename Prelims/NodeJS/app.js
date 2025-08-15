var myLogModule = require('./Utility/log.js');

myLogModule.warning('Warning node not configured..');
myLogModule.error('Error: Node encountered an error..');
myLogModule.info('Node running...');


var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);

// var msg = require('./Utility/log.js');
// msg('Hello World');

// var person = require('./Person.js');
// var person1 = new person('Arjee Emmanuel', 'Abella');
// console.log(person1.fullName());