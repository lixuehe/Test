### 第1章：【Linux C语言】常用指令

* vim的更新与安装
  * 使用 `sudo apt-get update` 更新vim
  * 使用 ` sudo apt-get install vim `安装vim
  * 使用 `cc -v` 或 `gcc -v` 来检查编译器的版本
  * 使用 `clear` 来清理屏幕

* 进入目录并显示文件
  * 使用 `cd ~` 来进入家目录
  * 使用 `pwd` 命令来定位家目录下的用户名
  * 使用`ls` 来查看家目录里面的文件夹
  * 使用 `ls -l` 来显示家目录里面文件夹中的信息
* 添加，创建，进入文件夹
  * 使用 `touch abcd `创建一个名字叫abcd的新文件
  * 使用 `rm abcd` 来删除文件名为abcd的文件
  * 使用 `mkdir workspace` 来创建一个名字为workspace的文件夹(目录)
  * 使用 `cd workspace` 来进入名字为workspace的文件夹

```
1.先用pwd查看，再创建一个名字叫les1的文件夹
	$ pwd
	$ mkdir les1
2.进入les1文件夹，查看信息，并创建一个名字为a.c的文件
	$ cd les1/
	$ pwd
	$ touch a.c
3.对a.c文件进行编写
	$ vi a.c
    按ESC返回，推出编辑状态。
    :wq保存并返回终端
    $ rm a.c   删除a.c文件
```



#### 第2章：Linux系统下，第一个C程序

```
1.在a.c文件中编辑一个简单的c语言程序
#include <stdio.h>
int main()
{
	printf("hello world!\n");
	return 0;
}
2.使用:wq来进行保存和退出。
3.查看和编译
	$ cc a.c   查看
	$ ls -l 查看权限。rwx中，r代表可读，w代表可写，x代表可执行。
	$ ./a.out 编译并输出。

```



#### 第3章：多文件操作

##### 3.1多个源文件分而治之

```
1.先进入workspace工作目录
	$ cd ~/workspace
	$ ls               //查看workspace里面的文件
	$ mkdir les2      //创建一个新的文件叫作les2
	$ ls              //查看les2是否在workspace工作目录中
	$ cd les2         //进入les2文件
	$ vi hello.c      //进入hello.c，并进行编辑
2.在hello.c中编写如下代码：
#inculde <stdio.h>
int max(int a,int b)
{
	if(a>b){
		return a;
	}else{
		return b;
	}
}
int main()
{
	int a1 = 33;
	int a2 = 22;
	int maxNum = max(a1,a2);
	printf("the max value is %d",maxNum);
	return 0;
}
:wq      //保存并回到终端
3.编译并执行
	$ gcc hello.c   //编译
	$ ls            //查看
	$ ./a.out       //输出
4.现在是在一个文件中编写多个代码，以后开发中会涉及到多人合作，所以一个文件中最好只编写一个方法。
	将main方法和max方法分离，并进行关联。
	vi hello.c          //进入hello.c文件
	i                   //进行编辑
	:sp  max.c          //新建max.c文件
	ctrl+w+向下的方向键     //向下移动
	：set nu             //打开行号
	9+d(连按两次）         //复制9行
	ctrl+w+向上的方向键     //向上移动
	p                     //粘贴
	:wqa                 //都保存，并退出
	ls                   //查看
	有些编译器比较智能，只需要编译一个文件，就可以自动找到需要的方法。但是每个编译器的版本不同，应该在头文件下面加上：
	#include “max.c"
	表示引入我们自己写的头文件。
	&&&在这里加上自己写的文件的头文件，也可能不管用，此时可以再创建一个文件$ touch max.h,在里面写上int max(int a,int b)。然后将#include “max.c"换成#include “max.h",再次编译即可。
```

##### 3.2头文件与函数定义分离

```
1.用cp拷贝一份max.c中的内容到min.c中
	$ cp max.c min.c
2.打开min.c文件并修改其中的内容
	$ vi min.c
3.生成一份min.o的文件
	$ gcc -c min.c
4.编写min.h文件
	$ vi min.h
	max.h文件里的内容为：int min(int a,int b);
5.在hello.c文件中加上头文件min.h的引用。
	#include "min.h"
6.编译hello.c文件，如果原先编译过hello.c文件，要先删除编译的文件
	$ rm a.out
	$ gcc max.o min.o hello.c
7.查看并输出
	$ ls
	$ ./a.out
```



​	在以后的开发中，会编写多个.c文件，而计算机执行的时候，是先执行.o文件，如果没有.o文件，再去找.c文件并执行。

​	编写.o文件的目的是提高计算机编译的速度，因为.o文件是静态文件，有了.o文件，计算机就不用去寻找.c文件并编译。

​	编写.h文件的目的是给程序员看的，因为.o文件里面的内容是给计算机看的，程序员无法看懂。



#### 第4章：MakeFile的编写和使用

* 为什么用MakeFile工具？
  * make工具可以将大型的开发项目分成若干个模块。
  * make工具可以快速、清晰地整理源文件。
  * make内部也是使用gcc

`$ make -v` 检查是否安装make工具

如果没有安装，就使用`$ sudo apt install make` 进行安装

```
1.删除所有的.o文件
	$ rm *.o
2.查看当前文件，并删除a.out文件
	$ ls
	$ rm a.out
	$ ls            //查看
3.编辑Makefile文件
	#表示注释内容
	一个Tab键代表6个空格
	hello.out:max.o min.o hello.c
Tab键	gcc max.o min.o hello.c -o hello.out     
	max.o:max.c
Tab键	gcc -c max.o
	min.o:min.c
Tab键	gcc -c min.o

按Esc退出编译状态
:wq   //保存并返回控制台
4.查看编译
	$ make
	$ ls
5.输出结果
	$ ./a.out   或者      $ ./hello.out
```



#### 第5章：main函数详解

##### 5.1main函数中的return

* 回顾学过的知识
  * $ cd ~/workspace                 //进入workspace工作区
  * $ mkdir  les3                        //创建les3文件
  * cd  les3                                 //定位到les3
  * vi main.c                               //编辑main.c文件

```
main.c文件的内容如下：
#include <stdio.h>
int main(int argv,char* argc[])
{
	printf("hello world!\n");
	return 0;
}
其中int main(int argv,char* argc[])，是UNIX、Linux以及Mac OS操作系统中C/C++的main函数标准写法，并且是血统最纯正的main函数写法。
程序与操作系统进行交互时，也要用到有参的main函数。
```

```
1.编译并运行main.c文件
	$ gcc main.c -o main.out && ./main.out
	运行结果为：hello world!
	$ ls       //查看
	---main.c main.out
	$ echo $?  //查看命令是否执行成功，若返回0表示成功，其余数值表示失败
	---0
2.修改main.c文件中的return 0；为：return l01;进行测试。
	$ vi main.c
	$ gcc main.c -o main2.out && ./main2.out
	$ echo $?
	---101
	$ ./main2.out && ls
	---hello world!
	$ ./main.out && ls
	---hello world!
	---main2.out main.c main.out
	为何使用./main2.out && ls时，执行了./main2.out,却没有执行ls。是因为ls查看的返回值必须是成功的,0代表成功。而main2中返回的是101，没有成功。
	所有说，c语言中的return 0，是有含义的，不是随便定义的。
```

##### 5.2main函数中的参数

```
1.先拷贝一份main.c文件到main2.c文件
	$ cp main.c main2.c
2.将main2.c文件里的内容修改一下
	$ vi main2.c
main2.c文件：
#include <stdio.h>
int main(int argv,char* argc[])
{
	printf("argv is %d \n" ,argv);
	return 0;
}
3.编译main2.c文件
	$ gcc main2.c -o m2.out
	$ ./m2.out
	$ ls -l    //查看参数，不包括隐藏的参数
	$ ls -l -a  //查看参数，包括隐藏的参数
	$ ./m2.out -l -a dwrw  //文件名+参数
	---argv is 4
4.实现char* argc[]的理解
	$ cp main2.c main3.c        //拷贝一份main2.c文件到main3.c文件
	$ vi main3.c
main3.c文件中的代码：
#include <stdio.h>
int main(int argv,char* argc[])
{
	printf("argv is %d\n",argv);
	int i;
	for(i=0;i<argv;i++)
	{
		printf("argc[%d] is %s \n",argc[i]);
	}
	return 0;
}
$ gcc main3.c -o m3.out
$ ./m3.out -l -a -o sger
---
argv is 5
argc[0] is ./m3.out
argc[1] is -l
argc[2] is -a
argc[3] is -o
argc[4] is sger
```

```
argc、argv的具体含义:
        argc和argv参数在用命令行编译程序时有用。main( int argc, char* argv[]) 中 
        第一个参数，int型的argc，为整型，用来统计程序运行时发送给main函数的命令行参数的个数，在VS中默认值为1。 
        第二个参数，char*型的argv[]，为字符串数组，用来存放指向的字符串参数的指针数组，每一个元素指向一个参数。各成员含义如下： 
        argv[0]指向程序运行的全路径名 
        argv[1]指向在DOS命令行中执行程序名后的第一个字符串 
        argv[2]指向执行程序名后的第二个字符串 
        argv[3]指向执行程序名后的第三个字符串 
        argv[argc]为NULL 
```



	#### 第6章 输入输出流和错误流

##### 6.1标准输入输出流以及错误流

```
stdin 标准输入流  默认键盘输入
stdout 标准输出流    默认显示器终端
stderr 标准错误流
fprintf的作用是：格式化输出到一个流文件中
```

```
1.新建les4文件
	$ mkdir les4
	$ vi cio.c
cio.c文件中的代码：
#include <stdio.h>
int main()
{
	printf("hello world!\n");
	int a;
	scanf("%d",&a);
	printf("input value is:%d \n",a);
	return 0;
}
	$ cc cio.c  或者 gcc cio.c    //编译
	$ ./a.out            //输出
2.修改cio.c里面的内容，实现错误流的打印
	$ vi cio.c
cio.c文件修改后的代码：
#include <stdio.h>
int main()
{
	//printf("plesse intput the value a:\n");
	fprintf(stdout,"plesse input the value a:\n");
	int a;
	//scanf("%d",&a);
	fscanf(stdin,"%d",&a);
	if(a<0)
	{
		fprintf(stderr,"the value must>0 \n");
		return 1;
	}
		return 0;
}
	$ cc cio.c
	$ ls
	---a.out cio.c
	$ ./a.out
	---plesse input the value a:
	-2
	---the value must>0
```

##### 6.2输入输出流以及错误流

```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
1.新建less5文件
	$ mkdir les5
	$ cd les5
	$ vi main.c
main.c中的代码：
#include <stdio.h>
int main()
{
	printf("input the int value i:\n");
	int i,j;
	scanf("%d",&i);
	printf("input the int value j:\n");
	scanf("%d",&j);
	printf("i+j=%d\n",i+j);
	return 0;
}
	$ gcc main.c    //编译
	$ ls            //查看
	$ ./a.out 1>>a.txt  //重定向到a.txt，不会覆盖原来的数值
	把输出流重定向到a.txt文件，1代表正确，可以省略不写，建议写上。
	$ ./a.out 1>a.txt  //重定向到a.txt,会覆盖掉原来的值。
 2.输入流的重定向
 	$ vi input.txt
 #include <stdio.h>
 int main()
 {
 	printf("input the int value i:\n");
 	int i,j;
 	scanf("%d",&i);
 	printf("input the int value j:\n");
 	scanf("%d",&j);
 	if(0!=j)
 	{
 		printf("%d/%d=%d\n",i,j,i/j);
 	}else{
 		fprintf(stderr,"j!=o\n");
 		return 1;
 	}
 		return 0;
 }
 	$ gcc input.txt   //编译
 	$ ./a.out <input.txt
 	$ ./a.out 1>t.txt 2>f.txt //把正确的输入到t.txt,不正确的输入到f.txt
 	
 	$ ./a.out <input.txt   //输入流，input.txt中已经写好了数字。
```

```
Linux重定向
基本概念
a、 I/O重定向通常与 FD有关，shell的FD通常为10个，即 0～9；
b、 常用FD有3个，为0（stdin，标准输入）、1（stdout，标准输出）、2（stderr，标准错误输出），默认与keyboard、monitor、monitor有关；
c、 用 < 来改变读进的数据信道(stdin)，使之从指定的档案读进；
d、 用 > 来改变送出的数据信道(stdout, stderr)，使之输出到指定的档案；
e、 0 是 < 的默认值，因此 < 与 0<是一样的；同理，> 与 1> 是一样的；
f、 在IO重定向 中，stdout 与 stderr 的管道会先准备好，才会从 stdin 读进资料；
g、 管道“|”(pipe line):上一个命令的 stdout 接到下一个命令的 stdin;
h、 tee 命令是在不影响原本 I/O 的情况下，将 stdout 复制一份到档案去;
i、 bash（ksh）执行命令的过程：分析命令－变量求值－命令替代（``和$( )）－重定向－通配符展开－确定路径－执行命令；
j、 ( ) 将 command group 置于 sub-shell 去执行，也称 nested sub-shell，它有一点非常重要的特性是：继承父shell的Standard input, output, and error plus any other open file descriptors。
k、 exec 命令：常用来替代当前shell 并重新启动一个 shell，换句话说，并没有启动子 shell。使用这一命令时任何现有环境都将会被清除。exec 在对文件描述符进行操作的时候，也只有在这时，exec 不会覆盖你当前的shell 环境。
```



#### 第7章：管道原理及应用

```
$ ls    //查看当前目录
$ ls /    //查看根目录
$ ls /etc/ | grep    //其中|表示管道，grep是etc配置文件下的进程
$ ps -e | grep ssh    //有没有包含ssh进程
$ ls /etc/ | grep ab  //进程中包含文件包含ab的
```

```
	管道是一种通信机制，通常用于进程间的通信（也可通过socket进行网络通信），它表现出来的形式将前面每一个进程的输出（stdout）直接作为下一个进程的输入（stdin）。
	管道命令使用|作为界定符号.
```



#### 第8章：打造实用c语言小程序

实现两个小程序的关联

* 1.创建les6目录，表现求平均值的文件avg.c

```
#include <stdio.h>
int main()
{
	int s,n;
	scanf("%d,%d",&s,&n);
	float v=s/n;
	printf("v=%f\n",v);
	return 0;
}
```

* 2.创建一个计数、求和的文件input.c

```
#include <stdio.h>
int main()
{
	int flag = 1;
	int i;                 //输入的数
	int count = 0;         //计数
	int s = 0              //求和
	while(flag){
		scanf("%d",&i);
		if(0==i) break;
		count++;
		s+=i;
	}
	printf("%d,%d\n",s,count);
	return 0;
}
```

`/input.out | ./avg.out`  通过管道，将两个文件关联，实现输入数据，求平均值的计算。

