##git基础

--直接记录快照，而非差异比较

大部分系统文件是以文件变更列表的方式存储信息。如：（CVS，Subversion,Perforce,Bazaar等等）。

git存储数据的方式更像是将数据看作小型文件系统的一组快照。

git保证完整性

git一般只添加数据

##### git的三种状态

committed 已提交 ，modified已修改 ，staged 已暂存。

Git仓库，工作目录，暂存区域。

Git 仓库目录是 Git 用来保存项目的元数据和对象数据库的地方。

工作目录是对项目的某个版本独立提取出来的内容。

暂存区域是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中。



??表示：新添加的未跟踪文件

A表示：新添加到暂存区中的文件

M表示：修改过的文件



文件 `.gitignore` 的格式规范如下：

- 所有空行或者以 `＃` 开头的行都会被 Git 忽略。

- 可以使用标准的 glob 模式匹配。

- 匹配模式可以以（`/`）开头防止递归。

- 匹配模式可以以（`/`）结尾指定目录。

- 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（`!`）取反。

  #### 创建git的版本库

  * 创建空目录

  ```
  $ mkdir learngit
  $ cd learngit
  $ pwd
  ```

  `mkdir用于创建空目录，leargit是目录名字，cd用于定位到目录下，pwd命令用于显示当前目录。`

  

  ```
  $ git init
  使用这个命令把上面创建的目录变成Git可以管理的仓库
  ```

  要进行下面的步骤，首先要在`learngit`目录下创建一个`readme.txt`的文件，并在里面写上一些内容（写什么都可以）。

  * 也可以用代码来创建

  ```
  $ echo '这里是要写的内容' >text.txt
  ```

  

  * 把文件放入Git仓库中，并提交。`-m`后面是本次提交的说明。

  ```
  $ git add readme.txt
  $ git commit -m "wrote a readme file"
  ```

  ###### 小结

  初始化一个Git仓库，并添加文件到仓库

  ```
  $ git init 
  $ git add <file>
  $ git commit -m <message>
  ```

  

  ##### 版本回退

  回顾修改和提交操作：

  ```
  $ git add readme.txt
  $ git commit -m "append GPL"
  ```

  查看一共有几个版本提交到Git仓库里

  `$ git log`

  ```
  $ git reset --hard HEAD^
  HEAD指向的版本就是当前版本。
  将参数回退到上一个版本。一个^代表一个版本，^^代表两个版本，100个版本用HEAD～100
  $ cat readme.txt
  用上面的命令行查看readme.txt的内容，果然被还原了。
  $ git reflog 
  使用这个命令来记录每一次命令
  使用命令git reset --hard commit_id,可以实现在版本的历史之间穿梭
  ```



##### 工作区和暂存区

工作区（Working Directory）:

就是在电脑里能够看到的目录，例如：learngit文件夹就是一个工作区

##### 版本库

工作区里面有一个隐藏的目录`.git`,这个不属于工作区，而是Git的版本库。

Git版本库里面最重要的是暂存区stage,或者叫index.Git为我们自动创建的第一个分支是`master`,指向`master`的一个指针叫`HEAD`。

```
1.用git add 把文件添加进去，就是把文件修改添加到暂存区。
2.用git commit提交更改，就是把暂存区的所有内容提交到当前分支。也就是往master上提交更改。
```



```
1.在工作区新增一个LICENSE文本文件(里面的内容随便写)
	$ echo 'I love read' >LICENSE
2.用git status查看一下状态：
	$ git status
3.因为LICENSE没有被添加过，所以状态是：Untracked.使用git add LICENSE添加，并查看状态。
	$ git add LICESE 
	$ git status
5.将修改的命令提交到分支上。
	$ git commit -m "understand how stage works"
6.再查看一下，工作区就是“干净的”
	$ git status

```



#### 管理修改



##### 删除文件

在Git中，删除也是一个修改操作，先添加一个新文件`test.txt`到Git并提交：

```
$ git add test.txt
$ git commit -m "add test.txt"
可以直接在文件管理器中把没用的文件删了，或者用rm命令删除
$ rm test.txt
使用git status命令就会告诉你，哪些文件被删除了。
$ git status
现在有两个选择：一是确定从版本库中删除该文件，用命令git rm删掉，并git commit:
$ git rm test.txt
$ git commit -m "remove test.txt"
二是删除错了，版本库中还有，所有就会可以把误删文件恢复到最新版本：
$ git checkout -- test.txt
```



##### 添加远程库

```
1.登陆GitHub，在右上角找到“Create a new repo"按钮，创建一个新的仓库
在	Repository name中填入learngit,其它保持默认设置，点击”Create repository"按钮，就可以成功创建一个新的Git仓库。
现在，将本地的仓库与远程库关联起来：在本地的learngit仓库下运行命令
	$ git remote add origin git@github.com:lovehxt/learngit.git

注意：把lovehxt换成你自己的GitHub账户名。
2.把本地库的所有内容推送到远程库上：
	$ git push -u origin master
	由于远程库是空的，所以在第一次推送master分支时，加上了-u参数。
3.从现在起，只要本地作了提交，就可以通过下面的命令修改推送
	$ git push origin master
4.当你第一次使用Git的clone或者push命令连接GitHub时，会得到一个警告，这是因为Git使用SSH连接，而SSH连接在第一次验证GitHub服务器的Key时，需要验证需要你确认GitHub的Key的指纹信息是否真的来自GitHub的服务器，输入yes回车即可。然后会出现一个警告，这个警告只会出现一次。
```

###### 小结

关联一个远程库：

`$ git remote add origin git@github.com:lovehxt/learngit.git`

第一次推送master分支的所有内容：

`$ git push -u origin master`

每次本地提交，只要有必要，就可以使用以下命令推送最新修改：

`$ git push origin master`



##### 从远程库克隆

```
1.登陆GitHub,创建一个新的仓库，名字叫：gitskills
2.勾选Initialize this repository with a README，这样就可以自动创建一个README.md文件。

```

