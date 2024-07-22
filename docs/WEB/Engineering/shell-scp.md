---
title: Shell scp文件传输
lang: zh
meta:
  - name: description
    content: shell scp命令使用
  - name: keywords
    content: shell scp命令使用
---


## linux服务器间ssh登录
> - **客户端生成密钥** 

<img src="./image/shell/rsa.png">

id_rsa: 生成的私钥文件 <br/>
id_rsa.pub: 生成的公钥文件 <br/>
known_hosts: 已知的主机公钥清单 <br/>


## 远程密钥登录

* 1. 通过 ssh-copy-id 命令
* 2. 通过 scp 命令
* 3. 手工复制

我们选择第三种方式：

**先使用 cat 命令查看当前的公钥**
<img src="./image/shell/rsapub.png">

**然后复制，在到目标服务器上去粘贴 /root/.ssh/authorized_keys**

<img src="./image/shell/rsapub-1.png">
