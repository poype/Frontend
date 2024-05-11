

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