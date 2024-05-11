

// 模块中定义个方法和变量默认的作用域是该模块内部
function say() {
  console.log("Hello World");
}


function ping() {
  console.log("Ping ~~~~~~");
}


module.exports.ping = ping;


module.exports.sayHello = () => {
  console.log("sayHello come from module2");
}

// 一个模块对外导出的成员永远以 module.exports 指向的对象为准

exports.run = () => {
  console.log("I am running")
}

// module.exports 和 exports 默认指向同一个对象。但可以通过修改使它俩指向不同的对象
// 导出哪些成员永远由module.exports决定！！


// NodeJs基于CommonJS规范实现模块化：
// 1. 在每个模块内部，module 变量代表了当前模块
// 2. module变量是一个对象，它的 exports 属性是对外导出的成员。
// 3. 调用require方法加载某个模块，其实是加载那个模块的 module.exports属性
