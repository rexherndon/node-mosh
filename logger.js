const EventEmitter = require('events'); // class

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
    
        // making a noise, produce - signalling
        this.emit('messageLogged', { id: 1, url: 'mysite.com' });
    }
}


module.exports = Logger;