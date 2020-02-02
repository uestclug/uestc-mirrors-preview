## Deepin镜像使用帮助

首先备份`/etc/apt/sources.list`

``` bash
cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

启用UESTC 镜像

``` bash
sed -i  -e 's/http:/https:/g' \
        -e 's/packages.deepin.com/mirrors.uestc.cn/g' \
        /etc/apt/sources.list
```

如果遇到无法拉取 https 源的情况，请先使用 http 源并安装：

```
$ sudo apt install apt-transport-https
```

再使用 UESTC Mirrors 的软件源镜像。