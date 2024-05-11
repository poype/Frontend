

// 模块中定义个方法和变量默认的作用域是该模块内部
function say() {
  console.log("Hello World");
}


function ping() {
  console.log("Ping ~~~~~~");
}


module.exports = {
  ping
}


module.exports.sayHello = () => {
  console.log("sayHello come from module2");
}

// 一个模块对外导出的成员永远以 module.exports 指向的对象为准