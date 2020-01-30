## CentOS 镜像使用帮助

首先备份 `CentOS-Base.repo` 
```
sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
```

之后启用 UESTC Mirrors 软件仓库， 将以下内容写入 /etc/yum.repos.d/CentOS-Base.repo

更新软件包缓存 `sudo yum makecache`