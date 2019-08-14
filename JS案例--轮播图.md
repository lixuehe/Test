### JS代码实现轮播图

##### HTML代码

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Test</title>
	<link rel="stylesheet" type="text/css" href="wheelpating.css">
</head>
<body>
	<script type="text/javascript" src="wheelpas.js">	
	</script>
	<h3>简单的轮播图</h3>
	<div class="page" onmouseOver="mouseOver()" onmouseout="mouseOut()" >
		<img src="images/play01.jpg" id="myimg" />
		<div class="arrow">
			<span class="arrow_left"  onclick="left();return false;"><</span> 
			<span class="arrow_right"  onclick="right();return false;">></span>
		</div>
		<div class="picture" id="circle_list">
			<span class="circle focus" onclick="onclickOver(0)" ></span>
			<span class="circle" onclick="onclickOver(1)" ></span>
			<span class="circle" onclick="onclickOver(2)" ></span>
			<span class="circle" onclick="onclickOver(3)" ></span>
			<span class="circle" onclick="onclickOver(4)" ></span>
			<span class="circle" onclick="onclickOver(5)" ></span>
		</div>
	</div>
</body>
</html>
```

##### CSS代码

```
h3{
	text-align: center;
}
.page{
	width: 1600px;
	height: 540px;
	position: relative; 
}
.img{
	width: 1600px;
	height: 540px;
}
.arrow{
	position: absolute; 
	top:50%;
	left:0px;
	right:0px;
	font-size:32px;
	font-family: "宋体";
}
.arrow>span{
	display: inline-block;  
	padding: 5px 7px;
	background-color: rgba(88,88,88,0.3);
	color:#eee;
	cursor: pointer;    /*鼠标变成小手*/
}
.arrow>span:hover{
	background-color: rgba(33,33,33,0.6);
}
.arrow_left{
	float: left;
}
.arrow_right{
	float: right;
}
.picture{
	position: absolute;
	bottom: 0px;
	left: 60px;
}
.picture>span{
	display: inline-block;
	margin-left: 15px;
	width: 10px;
	height: 10px;
	border: 3px solid #d5d5d5;
	border-radius: 50%;
	box-shadow:0px 0px 3px 3px rgba(222,222,222,0);
}
.focus{
	border: 4px solid rgba(33,33,33,0.4);
	width: 15px;
	height: 15px;
	background-color: #fff;
}
```

##### JS代码

```
var arr = new Array ("images/play01.jpg","images/play02.jpg","images/play03.jpg","images/play04.jpg","images/play05.jpg","images/play06.jpg");
var index = 0;
var timer = null;
//窗口加载完毕，调用匿名函数
window.onload = function(){
	timer = setInterval("change()",2000);
}

//图片切换的函数
function change(){
	right();
}
function circlestart(){
	var circlearr = document.getElementById("circle_list").children;
	//先将之前的样式去掉
	for(var i=0;i<circlearr.length;i++){
		circlearr[i].className = "circle";
	}
	//给当前选中的元素添加样式
	circlearr[index].className = "circle focus";
	if(index>arr.length-1){
		index = 0;
	}
}

function onclickOver(i){
	//clearInterval(timer);
	mouseOver();
	index = i;      
	 document.getElementById("myimg").src=arr[index];

	 circlestart();

	console.info("i = "+i);
	console.info("index="+index);
}
//鼠标移入事件
function mouseOver(){
	clearInterval(timer);
	//circlestart();
}	
function mouseOut(){
	 timer =setInterval("change()",2000);                                    
}
function left() {
 	index--;
 	if(index<0){
 		index = arr.length-1;
 	}
 	document.getElementById("myimg").src=arr[index];
 	circlestart();
}
function right(){
	index++;
	if(index>arr.length-1){
		index = 0;
	}
	
	document.getElementById("myimg").src=arr[index];
	circlestart();
}
```



