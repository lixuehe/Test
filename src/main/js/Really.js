import React, { Component } from 'react';
import "../css/Really.css"
import {really} from "./constance"
// IT行业就业、职场痛点s
class Really extends Component{
    render(){
        return(
            <div className="rel">
                <img className="relIMg1" src={require("../img/兄弟连1_39.png")}/>
                <img src={require("../img/兄弟连1_59.png")}/>
                <img src={require("../img/兄弟连1_60.png")}/>
                <img className="relImg2" src={require("../img/兄弟连1_39.png")}/>
                <p className="rel1"><b>{really.rel1}<span className='red'>{really.rel2}</span></b></p>
                <p className="rel2"><b><span className='red'>{really.rel3}</span>{really.rel4}</b></p>
                {really.rel5.map(item=>
                    <p class={"relP "+item.class}>{item.p}</p>                  
                )}

                 {/* 了解更多，立即报名 */}
                 <div className="ice2Div">
                        <img src={require("../img/兄弟连1_41.png")}/>
                        <img src={require("../img/兄弟连1_43.png")}/>
                    </div>
            </div>
        )}
}
export default Really;
