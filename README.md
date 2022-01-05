# SAAS 经代中台 命令行工具

---

## 安装

```
npm i  -g saasconfig-cli
```

---

## 使用

#### 1、生成项目 nginx 配置 zip 包

命令： config
参数 1： `-name` `-n` 客户名称简写： 比如客户为安澜 传 anlan 或者， 腾讯 tencent
参数 2：`-terminal` `-t` 部署的端： ABC 哪几个要部署就传哪个字母（不要有空格）
demo: `aas config -n zhongan`

```sh
saas config -n <客户名称简写> -t <要部署的端ABC三个>
```

> 生成在当前命令执行的目录下有客户名称缩写的目录和 zip。

#### 2、查看项目中 ts 覆盖率

命令： tscover
参数： -d ./src
demo: `saas tscover -d ./src`

```sh
saas tscover -d <目录名>
```

> 输出： 指定的目录下，ts 文件和 js 文件占比
