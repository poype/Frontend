
const m1 = require('./module1')
console.log(m1)  // 默认是一个空对象 {}

// 使用 require 加载模块时会直接执行被加载模块中的代码

const m2 = require('./module2')
console.log(m2)

m2.ping()
m2.sayHello()