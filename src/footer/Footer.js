import React, { Component } from 'react';
import './footer.css';
import {footer} from '../constance'

// 整个页面的大组件
class Footer extends Component {
  render() {
    return (
      <div className="footer">
       <img src={require("../img/兄弟连1_106.png")}/>
       <img src={require("../img/兄弟连1_104.png")}/>
       <img src={require("../img/兄弟连1_105.png")}/>
       <img src={require("../img/兄弟连1_106.png")}/>    
      <p>{footer.com1}</p>
      <div className="footerSpan">
          {footer.com2.map(item=>
              <div>
              { item.map(item2=>           
                  <span className="span">{item2}</span>
            
              )} </div>          
          )}
          <div className="p2"> 
            {footer.com3.map(item=>                
                  <span className="span">{item}</span>        
              )}
          </div>  
          <div className="p2 comp3">    
              {footer.com4.map(item=>   
                  <span className="span">{item}</span>                  
              )}
          </div>  
      </div> 
      </div>    
    );
  }
}

export default Footer;





