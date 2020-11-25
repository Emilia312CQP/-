### git使用前的全局配置

配置提交人姓名:git config --global user.name 用户名

配置提交人邮箱:git config --global user.email 用户邮箱

查看git配置信息:git config --list 

### git提交步骤

git init ：初始化git仓库

git status ：查看文件状态

git add文件列表 ：追踪文件

git commit -m提交信息： 向仓库中提交代码

git log： 查看提交记录

### 撤销

用暂存区中的文件覆盖工作目录中的文件:git checkout 被修改的文件名

将文件从暂存区中删除：git rm --cached 要删除的文件名 （只是从Git暂存区仓库中删除了，工作目录中依然存在）

 恢复记录 

git rest --hard commitID：将git仓库中指定的更新记录恢复出来，并且覆盖暂存区和工作目录。  

### 查看分支

git branch     ：查看分支

git branch 分支名称     ：创建分支

git checkout 分支名称       ：  切换分支       

git merge  来源分支   ：   合并分支

git branch -d  分支名称       ：  删除分支（分支被合并后才允许删除）  （-D强制删除）

注意：

1.在切换分支前，当前分支的工作一定要先提交再切换，否则会出问题。

2.要删除其他分支时候，当前不能处于被删除的分支上。必须要切换到其他分支，才能删除目标分支。

分支合并示例：

要让develop分支合并到master,则应该先切换到master，再shiyong git merge develop 来将develop合并至master分支上。

### 暂存分支状态

规定工作树必须干净才能切换，但在实际开发中常常一个分支还没法提交就要切换到另一个分支，这时候可以使用暂存分支。

git stash  :  存储临时改动（可以让工作树变成干净的，然后安全的切换分支）

git stash pop :恢复临时改动  （在切换回来分支时候。通过该指令恢复之前存贮的改动）

### 远程仓库相关的git指令

给远程仓库取一个别名origin(该名字可自定义)   :  git remote add  origin 仓库地址 

给远程仓库取了别名后，可以直接使用别名提交代码：

git push origin master  : 将当前代码给origin远程仓库提交到master分支上

-u的作用：帮助记住仓库地址，下次直接输入git push指令即可自动提交到该仓库。例如，前一次提交：

git push -u origin master

以后提交直接输入指令git push即可提交到远程仓库中去了

### 克隆仓库

git clone 远程仓库地址

### 从远程仓库拉取代码

git pull 远程仓库地址/别名  master分支名称

### git忽略清单

虎落清单的功能：添加了忽略之后，使用git add .添加所有文件进入版本控制时，被忽略的文件不会被添加进版本控制。

方法一：创建一个.gitignore的文件

在内容中写上要忽略的文件名，隔行显示每个文件名。

### 为仓库添加说明

创建一个redeme.md文件即可