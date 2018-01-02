'use strict';

module.exports = function(Emp) {
    Emp.greet = function(msg, cb) {
      cb(null, 'Greetings...hello ' + msg);
    }

    Emp.remoteMethod('greet', {
          accepts: {arg: 'msg', type: 'string'},
          returns: {arg: 'greeting', type: 'string'}
    });
};
