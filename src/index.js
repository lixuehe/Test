import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import $ from "jquery";
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// 模块热替换，文件保存后自动刷新页面！
if(module.hot){
  module.hot.accept();
}
// 窗口变化，页面的自适应效果
$(function(){
  reSize();
      //当调整浏览器窗口大小时，发生 resize 事件
      $(window).resize(function () {
      reSize();
  });
  // reSize方法，根据视窗大小调整rem与px比例；
  function reSize(){
      // 获取视窗的宽度
      let viewWidth=$("html")[0].clientWidth;
      let html = $("html")[0];
      // 将1rem设置为160px,这样所有使用带rem 的都会变化,即将rem 与 px 的比例按照视窗的大小进行自动调整；
      html.style.fontSize = viewWidth/7.5 + "px";
  }
})


