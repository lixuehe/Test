1.安装Node环境

* 从Node.js官网下载，版本应该选择7.6.0以上的。
* 下面说的是Linux版本
* 终端输入`$ sudo apt install nodejs`.
* 查看版本`$ node -v`  `v8.10.0`;
* 下载npm `$ sudo apt install npm`
* 查看版本`npm -v` `3.5.2`

2.第一个node的helloworld程序

* 需要用sublime  Text或者Notepad++。如果用记事本，记得把编码方式改为：ANSI编码。

* ```
  文件名为：hello.js的代码：
  'use strict';
  console.log('Hello,world');
  在终端的对应目录下输入：node hello.js
  ```

* CommonJS规范
  * 一个模块想要对外暴露变量（函数也是变量），可以用`module.exports = variable;`
  * 一个模块要引用其他模块暴露的变量，用`var ref = require('module_name');`就拿到了引用模块的变量。

* modeule.exports vs exports
  * 在Node环境中，有两种方法可以在一个模块中输出变量
  * 方法一：对module.exports赋值

```
// hello.js

function hello() {
    console.log('Hello, world!');
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}

module.exports = {
    hello: hello,
    greet: greet
};
```

 * 方法二：直接使用exports:

   ```
   // hello.js
   
   function hello() {
       console.log('Hello, world!');
   }
   
   function greet(name) {
       console.log('Hello, ' + name + '!');
   }
   
   function hello() {
       console.log('Hello, world!');
   }
   
   exports.hello = hello;
   exports.greet = greet;
   ```

   * 但是你不可以直接对`exports`赋值：

```
// 代码可以执行，但是模块并没有输出任何变量:
exports = {
    hello: hello,
    greet: greet
};
```



### 结论

如果要输出一个键值对象`{}`，可以利用`exports`这个已存在的空对象`{}`，并继续在上面添加新的键值；

如果要输出一个函数或数组，必须直接对`module.exports`对象赋值。

所以我们可以得出结论：直接对`module.exports`赋值，可以应对任何情况：

```
module.exports = {
    foo: function () { return 'foo'; }
};
```

或者：

```
module.exports = function () { return 'foo'; };
```

最终，我们*强烈建议*使用`module.exports = xxx`的方式来输出模块变量，这样，你只需要记忆一种方法。

* JavaScript程序是由事件驱动执行的单线程模型，Node.js也不例外。Node.js不断执行响应事件的JavaScript函数，直到没有任何响应事件的函数可以执行时，Node.js就退出了。如果我们想要在下一次事件响应中执行代码，可以调用`process.nextTick()`：

```
// test.js

// process.nextTick()将在下一轮事件循环中调用:
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');
```

* 打印的结果为：

```
nextTick was set!
nextTick callback!
```



#### fs

* Node.js内置的`fs`模块就是文件系统模块，负责读写文件。
  * 和所有其它JavaScript模块不同的是，`fs`模块同时提供了异步和同步的方法。
  * 回顾一下什么是异步方法。因为JavaScript的单线程模型，执行IO操作时，JavaScript代码无需等待，而是传入回调函数后，继续执行后续JavaScript代码。比如jQuery提供的`getJSON()`操作：

```
$.getJSON('http://example.com/ajax', function (data) {
    console.log('IO结果返回后执行...');
});
console.log('不等待IO结果直接执行后续代码...');
```







#### crypto

* crypto模块的目的是为了提供通用的加密和哈希算法。

* MD5和SHA1

  * MD5是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示：

  * ```
    const crypto = require('crypto');
    
    const hash = crypto.createHash('md5');
    
    // 可任意多次调用update():
    hash.update('Hello, world!');
    hash.update('Hello, nodejs!');
    
    console.log(hash.digest('hex')); 
    ```

  * 如果要计算SHA1，只需要把`'md5'`改成`'sha1'`，就可以得到SHA1的结果.

  * 还可以使用更安全的`sha256`和`sha512`。

* Hmac

  * Hmac算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法。不同的是，Hmac还需要一个密钥：
  * `const hmac = crypto.createHmac('sha256', 'secret-key');` 

* AES

  * AES是一种常用的对称加密算法，加解密都用同一个密钥。crypto模块提供了AES支持，但是需要自己封装好函数，便于使用：

  * ```
    const crypto = require('crypto');
    
    function aesEncrypt(data, key) {
        const cipher = crypto.createCipher('aes192', key);
        var crypted = cipher.update(data, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    
    function aesDecrypt(encrypted, key) {
        const decipher = crypto.createDecipher('aes192', key);
        var decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    
    var data = 'Hello, this is a secret message!';
    var key = 'Password!';
    var encrypted = aesEncrypt(data, key);
    var decrypted = aesDecrypt(encrypted, key);
    
    console.log('Plain text: ' + data);
    console.log('Encrypted text: ' + encrypted);
    console.log('Decrypted text: ' + decrypted);
    ```

  * 加密后的字符串通过解密又得到了原始内容。

  * AES有很多不同的算法，如`aes192`，`aes-128-ecb`，`aes-256-cbc`等.

* Diffie-Hellman

  * DH算法是一种密钥交换协议，它可以让双方在不泄漏密钥的情况下协商出一个密钥来。

* RSA

  * RSA算法是一种非对称加密算法，即由一个私钥和一个公钥构成的密钥对，通过私钥加密，公钥解密，或者通过公钥加密，私钥解密。其中，公钥可以公开，私钥必须保密。
  * 