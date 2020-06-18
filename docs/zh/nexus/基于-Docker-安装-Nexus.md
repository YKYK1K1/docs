# **基于 Docker 安装 Nexus （Windows）**
## **编写 `docker-compose.yml`**
---

```yml
version: '3.1'
services:
  nexus:
    restart: always
    image: sonatype/nexus3
    container_name: nexus
    ports:
      - 8383:8081
    volumes:
      - nexus-data:/nexus-data
volumes:
  nexus-data:
```

## **启动 `Nexus`** 
---

```sh
docker-compose up -d 
# or
docker pull sonatype/nexus3
```

## **浏览器打开**
---

![nexus 界面](/docs/assets/nexus/clipboard.png)

## **首次登录密码**
---

- 使用 `Git Bash Here` 
    ```
    docker ps -a
    ```
![查询 nexus ID](/docs/assets/nexus/yky-20200618194512.png)

- 进入 docker nexus 容器
    ```
    docker exec -it 1bc71c52708e /bin/bash
    ```
- 查看 `admin.password` 文件

    ```
    Microsoft Windows [版本 10.0.18362.900]
    (c) 2019 Microsoft Corporation。保留所有权利。

    C:\Users\yky19>docker exec -it 1bc71c52708e /bin/bash
    bash-4.4$ ls
    bin   dev  help.1  lib    licenses    media  nexus-data  proc  run   srv  tmp                uid_template.sh  var
    boot  etc  home    lib64  lost+found  mnt    opt         root  sbin  sys  uid_entrypoint.sh  usr
    bash-4.4$ cd nexus-data/
    bash-4.4$ ls
    admin.password  cache  elasticsearch  generated-bundles  javaprefs  keystores  log     port                 tmp
    blobs           db     etc            instances          karaf.pid  lock       orient  restore-from-backup
    bash-4.4$ cat admin.password
    748f8374-25fe-4aa1-8948-c4724d667b13bash-4.4$ vi admin.password
    ```

