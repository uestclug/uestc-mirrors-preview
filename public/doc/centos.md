## CentOS 镜像使用帮助

首先备份 `CentOS-Base.repo` 
```
sudo cp /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
```

之后启用 UESTC Mirrors 软件仓库

``` bash
sed -i  -e 's/mirrorlist/#mirrorlist/g'\
        -e 's/^#baseurl/baseurl/g' \
        -e 's/http:/https:/g'
        -e 's/mirror.centos.org/mirrors.uestc.cn/g'
        /etc/yum.repos.d/CentOS-Base.repo
```

更新软件包缓存 `sudo yum makecache`