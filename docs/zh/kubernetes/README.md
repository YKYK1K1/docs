# **Kubernetes**

::: tip
MESOS APACHE 分布式资源管理框架  2019-5 Twitter > Kubernetes

Docker Swarm  2019-7  阿里云宣布  Docker Swarm 剔除

Kubernetes Google  10年容器化基础架构  borg  GO 语言  Borg
    特点:
        轻量级: 消耗资源小
        开源
        弹性伸缩
        负载均衡: IPVS
:::

## **知识目录**
---

1. 介绍说明:    前世今生    Kubernetes 框架 kubernetes关键字含义
2. 基础概念:    什么是Pod   控制类型    K8S 网络通讯模式
3. Kubernetes:  构建 K8S 集群
4. 资源清单:    资源    掌握资源清单的语法  编写 Pod    **掌握 Pod 的生命周期**
5. Pod 控制器:  掌握各种控制器的特点以及使用定义的方式
6. 服务发现:    掌握 SVC 原理及其构建方式
7. 存储:    掌握多种存储类型的特点，并且能够在不同环境中选择合适的存储方案(要有自己的见解)
8. 调度器:  掌握调度器原理  能够根据要求把 Pod 定义到想要的节点运行
9. 安全:    集群的认证  鉴权    访问控制    原理及其流程
10. HELM:   Linux yum   掌握 HELM 原理  HELM 模板自定义 HELM 部署常用的插件
11. 运维:   修改 kubeadm  达到证书可用期限为 10 年  能够构建高可用的 Kubernetes 集群

## **组件说明**
---

### **google Borg**

![Borg](/docs/assets/k8s/yky-2020-08-24-150447.png)

::: erro 重点
高可用集群副本数据最好 >= 3 (奇数个)
:::

### **k8s**

![K8S](/docs/assets/k8s/yky-2020-08-24-150741.png)

::: tip
`ApiServer`:  所有服务访问统一入口

`ControllerManager`:  维持副本期望数目

`Scheduler`:  负责介绍任务，选择合适的节点进行分配任务

`ETCD`:   键值对数据库 存储 K8S 集群所有重要信息(持久化)

`Kubelet`:    直接跟容器引擎交互实现容器的生命周期管理

`Kube-proxy`: 负责写入规则至 IPTABLES、IPVS 实现服务映射访问的
:::

> etcd 的官方将它定位成一个可信赖的分布式键值存储服务,它能够为整个分布式集群存储一些关键数据,协助分布式集群的正常运转

![ETCD](/docs/assets/k8s/yky-2020-08-24-150959.png)

> 推荐在Kubernetes集群中使用Etcd v3, v2版本已在 Kubernetes v1.11 中弃用

![ETCD](/docs/assets/k8s/yky-2020-08-24-163414.png)


![其他插件](/docs/assets/k8s/yky-2020-08-25-092700.png)

::: tip
`CoreDNS`:    可以为集群中的 SVC 创建一个域名 IP 的对应关系解析

`Dashboard`:  给 K8S 集群提供一个 B/S 结构访问体系

`Ingress Controller`:   官方只能实现四层代理，INGRESS 可以实现七层代理

`Federation`:   提供一个可以跨集群中心多 K8S 统一管理功能

`Prometheus`:   提供一个 K8S 集群的监控能力

`ELK`:  提供 K8S 集群日志统一分析介入平台
:::

## **Pod 概念**
---
### **类型**

- **自主式 Pod**
- **控制器管理的 Pod**

## **控制器类型**
---
### **ReplicationController & ReplicaSet & Deployment**

`ReplicationController`用来确保容器应用的副本数始终保持在用户定义的副本数,即如果有容器异常退出,会自动创建新的 Pod 来替代;而如果异常多出来的容器也会自动回收.
在新版本的`Kubernetes`中建议使用`ReplicaSet`来取代`ReplicationController`

`ReplicaSet`跟`ReplicationController`没有本质的不同,只是名字不一样,并且`ReplicaSet`支持集合式的`selecton`

虽然`ReplicaSet`可以独立使用,但一般还是建议使用`Deployment`来自动管理`ReplicaSet`,这样就无需担心跟其他机制的不兼容问题(比如`ReplicaSet`不支持`rolling-update`但`Deployment` 支持)

### **Deployment(ReplicaSet)**

`Deployment`为 Pod 和`ReplicaSet`提供了一个声明式定义(declarative)方法,用来普代以前的`ReplicationController`来方便的管理应用.典型的应用场景包括
* **定义`Deploynent`来创建 Pod 和`ReplicaSet`**
* **滚动升級和回滚应用**
* **扩容和缩容**
* **暂停和继续`Deployment`**

### **HPA (HorizontalPodAutoScale)**

`Horizontal Pod Autoscaling`仅适用于`Deployment`和`ReplicaSet` ,在 V1 版本中仅支持根据 Pod 的 CPU 利用率扩所容,在 vlalpha 版本中,支持根据内存和用户自定义的 metric 扩缩容

### **StatefulSet**

`StatefulSet`是为了解决有状态服务的问题(对应`Deployments`和`ReplicaSets`是为无状态服务而设计),其应用场景包括:
- **稳定的持久化存储,即 Pod 重新调度后还是能访问到相同的持久化数据,基于 PVC 来实现**
- **稳定的网络标志,即 Pod 重新调度后其 PodName 和 HostName 不变,基于 Headless Service" (即没有 Cluster IP 的Service )来实现**
- **有序部署,有序扩展,即 Pod 是有顺序的,在部署或者扩展的时候要依据定义的顺序依次依次进行(即从 0 到 N-1,在下一个 Pod 运行之前所有之前的 Pod 必须都是 Running 和 Ready 状态) ,基于 init containers 来实现**
- **有序收缩,有序删除(即从 N-1 到 0)**

### **DaemonSet**

`DaemonSet`确保全部(或者一些) Node上运行一个 Pod 的副本.当有 Node 加入樂群时,也会为他们新增一个 Pod .当有 Node 从集群移除时,这些 Pod 也会被回收.删除`DaemonSet`将会删除它创建的所有 Pod 
使用`DaemonSet`的一些典型用法:
- **运行集群存储 daemon,例如在每个 Node 上运行 glusterd, ceph**
- **在每个 Node 上运行日志收集 daemon,例如 fluentd, 1ogstash**
- **在每个 Node 上运行监控 daemon,例如 Prometheus Node Exporter**

### **Job,Cronjob**

`Job`负责批处理任务,即仅执行一次的任务,它保证批处理任务的一个或多个 Pod 成功结束. `Cron Job`管理基于时间的 Job,即:
- **在给定时间点只运行一次**
- **周期性地在给定时间点运行**