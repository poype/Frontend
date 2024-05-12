
## 1 安装包的命令
```
npm install 包的完整名称

简写形式：
npm i 包的完整名称
```

当执行完安装命令后，会自动创建package.json 和 package-lock.json两个文件
且会自动创建node_modules目录，在该目录下包含所安装包的依赖文件。
不要手动修改package-lock.json文件中的内容。

## 2 安装指定版本号的包
使用`npm install`命令安装包的时候，会自动安装最新版本的包。如果需要安装指定版本的包，可以在包名之后，通过 `@` 指定具体的版本。
```
npm i moment@2.22.2
```
执行这个命令后，package.json中包的版本号会自动更新为 2.22.2，无需手动更新package.json。

## 3 npm版本号规范
第1位数字：大版本
第2位数字：功能版本
第3位数字：Bug修复版本

只要前面的版本号增长了，后面的版本号归零。

## 4 包管理配置文件
在项目根目录下，必须提供 package.json 配置文件。






# npm 命令汇总
### 1. 安装包的命令
```
npm install 包的完整名称

npm i 包的完整名称

npm i moment@2.22.2

一次安装package.json文件中dependencies中所有的依赖
npm install
或
npm i
```

### 2. 初始化项目，创建package.json配置文件
```
npm init
```

### 3. 卸载包
```
npm uninstall moment
```
会自动更新package.json配置文件，把卸载包对应的包名从dependencies中删除。


### 4. 安装devDependencies
```
npm i 包名 -D
或
npm install 包名 --save-dev

npm install webpack --save-dev
```
在项目的开发过程中会用到，项目上线之后就不会再用到的包。



