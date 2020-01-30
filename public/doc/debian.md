## Debian 镜像使用帮助

Debian 的软件源配置文件是 `/etc/apt/sources.list`。将系统自带的该文件做个备份，将该文件替换为下面内容，即可使用 UESTC Mirrors 的软件源镜像。

如果遇到无法拉取 https 源的情况，请先使用 http 源并安装：

```
$ sudo apt install apt-transport-https
```

再使用 UESTC Mirrors 的软件源镜像。