

## 1 安装yarn
```
npm install yarn -g
```

## 2 yarn 的下包服务器地址
```
查看下包服务器
$ yarn config get registry
https://registry.yarnpkg.com

查看版本号
$ yarn --version
1.22.22
```

## 3 安装包
```
yarn add jquery

yarn add moment
```
执行完 yarn add 命令后会自动修改package.json文件中的dependencies
还会自动生成 yarn.lock 文件，这个 lock文件 比package-lock.json 文件更加严谨，使版本锁定的更精准。


## 4 安装 DEV包
```
yarn add webpack --dev
```
执行完该命令后会自动修改package.json文件中的devDependencies

## 5 删除一个包
```
yarn remove jquery
```

## 6 安装所有的依赖
```
yarn install
```

## 7 运行脚本
```
yarn run test
```


# yarn 相比 npm 的优势
1. 速度快，包会被缓存到本地，再用到的时候就不需要从网络重新下载
2. 稳定性好，下载一半网络中断了，它会在网络恢复之后再继续下载
3. 更好的lock，确保不同的开发者下载的包一致

