* 原生JS和jQuery入口函数的加载模式不同

  * 原生JS会等到DOM元素加载完毕，并且图片也加载完毕才会执行。
  * jQuery会等到DOM元素加载完毕，但不会等到图片也加载完毕执行。

* 原生的JJS如果编写了多个入口函数，后面编写的会覆盖前面编写的。

  `window.onload = function (ev) {    `

  `		alert("hello inj1");}`

  `window.onload = function (ev) {    `

  `	alert("hello inj2");}`

* jQuery中编写多个入口函数，后面的不会覆盖前面的

`$(document).ready(function(){    `

`alert("hello in1");})`

`$(document).ready(function(){    alert("hello in2");})`

##### jQuery的四种写法

```
//1.第一种写法
$(document).ready(function(){   alert("hell in1");})
//第二种写法
jQuery(document).ready(function(){     alert("hell in2");})
 //第三种写法（推荐使用这种方法）
 $(function(){    alert("hello in3");})
 //第四种写法
 jQuery(function(){    alert("hello in4");})
```



##### jQuery对象

* 1.什么是jQuery对象
  * jQuery对象是一个伪数组
* 2.什么是伪数组
  * 有0到length-1的属性，并且有length属性

```
$(function () {
	var  $div = $("div");    
		console.log($div);    
	var arr = [1,2,5]; 
		console.log(arr);
	}
```

* jQuery中的each静态方法和map静态方法的区别：
  * each静态方法默认的返回值就是，遍历谁就返回谁
  * map静态方法默认的返回值是一个空数组
  * each静态方法不支持在回调函数中对遍历的数据进行处理
  * map静态方法可以在回调函数中通过return对遍历的数组进行处理，然后生成一个新的数组返回
* $.trim()方法
  * 作用：去除字符串两端的空格
  * 参数：需要去除空格的字符串
  * 返回值：去除空格之后的字符串

```
var str = "           lng    ";
  var res = $.trim(str);
  console.log("-----"+str+"------");
  console.log("-----"+res+"------");
```

* $.isWindow()方法
  * 作用：判断传入的对象是window对象
  * 返回值：true/false

```
//window对象
var w = window;
var res = $.isWindow(w);
console.log(res);
```

* $.isArray()方法
  * 作用：判断传入的对象是否是真数组
  * 返回值：true/false
* $.isFunction()方法
  * 作用：判断传入的对象是否是一个函数
  * 返回值：true/false
  * 注意点：jQuery框架本质上是一个函数

* ```
  $.holdReadly(true);作用：暂停ready执行
  ```

```
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
  <script>
      //$.holdReadly(true);作用：暂停ready执行
      $.holdReady(true);
      $(document).ready(function(){
          alert("ready");
      });
  </script>
</head>
<body>
<button>回复ready事件</button>
<script>
var btn = document.getElementsByTagName("button")[0];
btn.onclick = function () {
    $.holdReady(false);
}
</script>


```

* :empty()方法
  * 作用：找到既没有文本内容也没有子元素的指定元素
* :parent()方法
  * 作用：找到有文本内容或有子元素的指定元素
* :contains(text)方法
  * 作用：找到包含指定文本内容的指定元素
* :has(selector)方法
  * 作用：找到包含指定子元素的指定元素

```{
1.什么是属性？
	对象身上保存的变量就是属性
function Person(){
}
var p = new Person();
p.name = "lng";

2.如何操作属性？
	对象.属性名称 = 值；
	对象.属性名称；
	对象["属性名称"] = 值；
	对象["属性名称"]；
p.name = "lng";
p["name"] = "zs";

3.什么是属性节点？
<span name="it666"></span>
	在编写HTML代码时，在HTML标签中添加的属性就是属性节点
	在浏览器中找到span这个DOM元素之后，展开看到的都是属性
	在attributes属性中保持的所有内容都是属性节点
	
4.如何操作属性节点？
	DOM元素.setAttribute("属性名称"，"值")；
	DOM元素.getAttribute("属性名称");
	
5.属性和属性节点有什么区别？
	任何对象都有属性，但是只有DOM对象才有属性节点
```

* attr(name|pro|key,val|fn)方法

  * 作用：获取或者设置属性节点的值

  * 可以传递一个参数，也可以传递两个参数

  * 如果传递一个参数，代表获取属性节点的值

  * 如果传递两个参数，代表设置属性节点的值

  * ```
    注意点：
    1.如果是获取：无论找到多少个元素，都只会返回i第一个元素指定的属性节点的值
    2.如果是设置：找到多少个元素就会设置多少个元素
    3.如果是设置：如果设置的属性节点不存在，那么系统会自动新增
    ```

  * removeAttr(name)方法
  
  * 删除属性节点
  
    ```
    注意点：
    会删除所有找到元素指定的属性节点
    $("span").removeAttr("class");
    ```
  
    

* prop方法
  * 特点和attr方法相同
* removeProp方法

```
<script>
	$(function(){
		$("span").eq(0).prop("demo","it666");
		$("span").eq(1).prop("demo","lng");
		console.log($("span").prop("demo"));
	});
</script>
```

* addClass(class|fn)
  * 作用：添加一个类
  * 如果要添加多个，多个类名之间用空格