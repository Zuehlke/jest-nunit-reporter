const os = require('os');
const process = require('process');

class Environment {
    constructor () {
  
      this['environment'] = {
          _attr: {
            'nunit-version': '2.4.0.0',
            'clr-version': 'na',
            'os-version': os.release(),
            platform: os.platform(),
            cwd: process.cwd(),
            user: 'na',
            'user-domain': 'na',
            'machine-name': os.hostname()
          }
      };
    }
  }
  
  module.exports = Environment;