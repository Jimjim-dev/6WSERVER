var myLogModule = require('./Utility/log.js');

myLogModule.warning('Warning node not configured..');
myLogModule.error('Error: Node encountered an error..');
myLogModule.info('Node running...');

var msg = require('./Utility/Message.js');
console.log(msg);

var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);

// var msg = require('./Utility/log.js');
// msg('Hello World');

// var person = require('./Person.js');
// var person1 = new person('Smith Dainielle', 'Romero');
// console.log(person1.fullName());