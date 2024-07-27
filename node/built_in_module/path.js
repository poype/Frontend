// path module
const path = require("path");

const pathObj = path.parse(__filename);

console.log(pathObj);

/**
$ node path.js
{
  root: 'D:\\',
  dir: 'D:\\workspace\\frontend_study\\node\\built_in_module',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
*/