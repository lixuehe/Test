import React, { Component } from 'react';
import "../css/reason.css"
import {reason} from "./constance"
class Reason extends Component{
    render(){
        return(
            <div className="reason">          
                <img src={require("../img/兄弟连1_02.png")}/>
                <img src={require("../img/兄弟连1_03.png")}/>
                <p className="reason1"><b>{reason.reason1}<span className='red'>{reason.reason2}</span></b></p>
                <p className='reason3'>{reason.reason3}</p>
                {reason.reason4.map(item=>
                    <div className={item.class}>
                    <h3>{item.title}</h3>
                    <div className="reasonDiv">
                        <p><span>{item.content1}</span><span className="red">{item.content2}</span><span>{item.content3}</span></p>
                        <p><span>{item.content4}</span><span className="red">{item.content5}</span></p>
                    </div>
                </div>
                )}
                
            </div>
        )        
    }
}
export default Reason;
