const fs = require('fs'),
  path = require('path');
const files = fs.readdirSync(__dirname);

files.forEach(function (file) {
  let filename = path.basename(file, '.js');
  if(filename !== 'index'){
    exports[filename] = require('./' + filename)
  }
});