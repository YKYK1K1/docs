# **基于 Docker 安装 GitLab**

## **安装**
---

```sh
docker pull twang2218/gitlab-ce-zh
```

## **docker-compose.yml**
---

我们使用 Docker 来安装和运行 GitLab 中文版，由于新版本问题较多，这里我们使用目前相对稳定的 10.5 版本，`docker-compose.yml` 配置如下：

```yml
version: '3'
services:
    web:
      image: 'twang2218/gitlab-ce-zh'
      restart: always
      hostname: '127.0.0.1'
      environment:
        TZ: 'Asia/Shanghai'
        GITLAB_OMNIBUS_CONFIG: |
          external_url 'http://127.0.0.1:8880'
          gitlab_rails['gitlab_shell_ssh_port'] = 2222
          unicorn['port'] = 8888
          nginx['listen_port'] = 8880
      ports:
        - '8080:8080'
        ## 443 是 https 请求的安全端口 SSL连接的端口
        - '8443:443'
        ## ssh 连接端口
        - '2222:22'
      volumes:
        - /Docker/GitLab/config:/etc/gitlab
        - /Docker/GitLab/data:/var/opt/gitlab
        - /Docker/GitLab/logs:/var/log/gitlab
```

## **安装完成后的工作**
--- 

访问地址：http://ip:8880
端口 8880 是因为我在配置中设置的外部访问地址为 8880，默认是 80
初始化安装完成后效果如下：

<br />

![](/docs/assets/gitlab/yky-20200625133643.png)

<br />