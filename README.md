### 快速切换 npm 镜像

> cnr (checkout npm registry)

#### 安装

```shell
npm install cnr -g
```

#### 基本使用

- 切换 npm source

  ```shell
    cnr c
  ```

- 显示所有 source
  ```shell
    cnr ls
  ```
#### 定制使用
- 自定义 source
  ```shell
    cnr add <name> <url>
  ```
  自定义自己公司的source
  使用实例:
  cnr add taobao https://registry.npmmirror.com/
_______________________________________________________________

- 删除 source
  ```shell
    remove <name>
  ```
  删除不用的source
  使用实例:
  cnr remove taobao

#### init指令
- 恢复成第一次安装的样子
  ```shell
  cnr init
  ```
  
