## Nginx 

注意 Nginx 官方源分为 mainline 和 stable 两个分支，其关系为 ![](https://i.stack.imgur.com/etScD.png)

#### CentOS/RHEL

编辑 `/etc/yum.repos.d/nginx.repo`

stable:

```
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

mainline:

```
[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

#### Ubuntu

添加 key：`curl -fsSL https://nginx.org/keys/nginx_signing.key | sudo apt-key add -`

stable:

```
echo "deb http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

mainline:

```
echo "deb http://nginx.org/packages/mainline/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

#### Debian

添加 key：`curl -fsSL https://nginx.org/keys/nginx_signing.key | sudo apt-key add -`

stable:

```
echo "deb http://nginx.org/packages/debian `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

mainline:

```
echo "deb http://nginx.org/packages/mainline/debian `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

更多参阅官方文档：[https://nginx.org/en/linux_packages.html](https://nginx.org/en/linux_packages.html)
