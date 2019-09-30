import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/js/main';
import Footer from './footer/Footer';

// 整个页面的大组件
class App extends Component {
  render() {
    return (
      <div className="App">
          {/* header 标题栏 */}
          <Header/>
          {/* main 主体内容 */}
          <Main/>
          {/* footer 链接栏 */}
          <Footer/>
      </div>
    );
  }
}

export default App;





