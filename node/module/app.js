const {log} = require("./logger")

console.log(__filename)
console.log(__dirname)

log(module)

/* Print Below Information
{
  id: '.',
  path: 'D:\\workspace\\frontend_study\\node\\module',
  exports: {},
  filename: 'D:\\workspace\\frontend_study\\node\\module\\app.js',
  loaded: false,
  children: [
    {
      id: 'D:\\workspace\\frontend_study\\node\\module\\logger.js',
      path: 'D:\\workspace\\frontend_study\\node\\module',
      exports: [Object],
      filename: 'D:\\workspace\\frontend_study\\node\\module\\logger.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [
    'D:\\workspace\\frontend_study\\node\\module\\node_modules',
    'D:\\workspace\\frontend_study\\node\\node_modules',
    'D:\\workspace\\frontend_study\\node_modules',
    'D:\\workspace\\node_modules',
    'D:\\node_modules'
  ]
}
*/ 

/**
 * How does node implement module mechanism?
 * Module Wrapper Function
 */