# 安装

## 官网下载

[官网](https://nodejs.org/zh-cn/)

## nvm 管理 node

1. 下载[点击下载](https://github.com/coreybutler/nvm-windows/releases)选择 nvm-setup.zip(安装版)，如果之前有安装过 nodejs，先卸载.
2. 先选择要安装的目录,注意路径中不要有空格和中文字符 然后选择要存放 nodejs 的目录
3. 去到你的 nvm 安装目录(例如这里是 c:/nvm)，打开 settings.txt 的文本文件， 增加两行
```
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

4. 安装nodejs

```
nvm -v                  #查看nvm是否安装成功
nvm install 7.7.3       #安装7.7.3
nvm use 7.7.3           #切换7.7.3版本
node -v                 #查看node是否安装成功
```

5. 