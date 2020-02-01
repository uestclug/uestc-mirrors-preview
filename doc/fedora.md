## Fedora 镜像使用帮助

Fedora 默认使用 [Metalink](https://zh.fedoracommunity.org/2018/04/05/fedora-secures-package-delivery.html) 给出推荐的镜像列表，保证用户使用的镜像仓库足够新，并且能够尽快拿到安全更新，从而提供更好的安全性。所以通常情况下使用默认配置即可，无需更改配置文件。

由于 Metalink 需要从国外的 Fedora 项目服务器上获取元信息，所以对于校园内网、无国外访问等特殊情况，metalink 并不适用，此时可以如下修改配置文件。

Fedora 的软件源配置文件可以有多个，其中： 系统默认的 `fedora` 仓库配置文件在`/etc/yum.repos.d/`下，首先对该文件夹备份。

``` bash
mkdir /etc/yum.repos.d/bak
cp /etc/yum.repos.d/*.repo /etc/yum.repos.d/bak/
```

然后修改为UESTC镜像

``` bash
sed -i  -e 's/^metalink/#metalink/g' \
        -e 's/^#baseurl/baseurl/g' \
        -e 's/http:/https:/g' \
        -e 's/download*linux/mirrors.uestc.cn\/fedora/g' \
        /etc/yum.repos.d/*.repo
```

最后更新本地缓存

``` bash
dnf makecache
```