## Ubuntu 镜像使用帮助

首先备份`/etc/apt/sources.lists`

``` bash
cp /etc/apt/sources.list /etc/apt/sources.lists.bak
```

然后替换为UESTC镜像

``` bash
sed -i  -E -e 's/http:/https:/g' \
        -e 's/(archive|security).ubuntu.com/mirror.uestc.cn/g' \
        /etc/apt/sources.list

如果遇到无法拉取 https 源的情况，请先使用 http 源并安装：

```
$ sudo apt install apt-transport-https
```

再使用 UESTC Mirrors 的软件源镜像