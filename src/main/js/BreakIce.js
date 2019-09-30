import React, { Component } from 'react';
import "../css/BreakIce.css"
import {ice} from "./constance"
// IT行业就业、职场痛点
class BreakIce extends Component{
    render(){
        return(
            <div className="ice">  
                <div className="iceOne">        
                    <img src={require("../img/兄弟连1_31.png")}/>
                    <img src={require("../img/兄弟连1_33.png")}/>
                    <img src={require("../img/兄弟连1_34.png")}/>
                    <img src={require("../img/兄弟连1_36.png")}/>
                    <p className="ice1"><b>{ice.ice1}<span className='red'>{ice.ice11}</span></b></p>
                    <p className="ice2"><b>{ice.ice2}</b></p>
                    <p className='ice3'>{ice.ice3}</p>
                    <p className='ice4'>{ice.ice4}</p>
                    <p className='ice5'>{ice.ice5}</p>
                    {/* 图片上的三块 */}
                    {ice.ice6.map(item=>
                    <div className={'iceDiv '+item.class}>
                        <h3 style={{margin:'0 0 0.1rem  0'}}>{item.title}</h3>
                        <p>{item.p1}</p>
                     </div>
                    )}  
                    </div>             
                 <div className="iceTwo"> 
                     <img src={require("../img/兄弟连1_37.png")}/>
                     <img src={require("../img/兄弟连1_38.png")}/>
                     <p className='ice7'>{ice.ice7}</p>
                     {ice.ice8.map(item=>
                        <div className={'iceDiv '+item.class}>
                            <h3 style={{margin:'0.2rem 0 0.1rem'}}>{item.title}</h3>
                            <p>{item.p1}</p>
                        </div>
                     )}
                     
                    <img className="iceImg" src={require("../img/兄弟连1_39.png")}/>
                    {/* 了解更多，立即报名 */}
                    <div className="ice2Div">
                        <img src={require("../img/兄弟连1_41.png")}/>
                        <img src={require("../img/兄弟连1_43.png")}/>
                    </div>
                    
                 </div> 
                 {/* 优势对比 */}
                 <div className="iceThree">  
                     <img src={require("../img/兄弟连1_48.png")}/>
                     <img src={require("../img/兄弟连1_49.png")}/>
                     <img src={require("../img/兄弟连1_50.png")}/>
                     <img src={require("../img/兄弟连1_51.png")}/>
                     <p className='ice9'>{ice.ice9}</p>
                     <p className='ice10'>{ice.ice10}</p>
                     <p className='ice12'>{ice.ice12}</p>
                     {ice.ice13.map(item=>
                        <div class={"ice13Div "+item.class}>
                            <span>{item.p1}</span>
                            <b>{item.h3}</b>
                        </div>
                     )}
                    {/* 了解更多，立即报名 */}
                    <div className="ice2Div">
                        <img src={require("../img/兄弟连1_41.png")}/>
                        <img src={require("../img/兄弟连1_43.png")}/>
                        <img src={require("../img/兄弟连1_51.png")}/>
                    </div>
                 </div>
                        
            </div>
        )        
    }
}
export default BreakIce;
