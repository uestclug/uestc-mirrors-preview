## openSUSE 镜像使用帮助

openSUSE的软件源配置可以有多个文件，均位于`/etc/zypp/repos.d/`下，所以先对该文件夹备份

``` bash
cp -R /etc/zypp/repos.d/ /etc/zypp/repos.bak/
```

然后更换UESTC镜像源

``` bash
sed -i  -e 's/http:/https:/g' \
        -e 's/download.opensuse.org/mirrors.uestc.cn\/opensuse/g' \
        /etc/zypp/repos.d/repo*oss.repo
```

如果需要启用`Update`仓库的镜像源（仅`Leap`可用），则需要将上述命令改为

``` bash
sed -i  -e 's/http:/https:/g' \
        -e 's/download.opensuse.org/mirrors.uestc.cn\/opensuse/g' \
        /etc/zypp/repos.d/repo*.repo
```

刷新软件包缓存

``` bash
zypper ref
```