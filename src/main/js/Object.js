import React, { Component } from 'react';
import "../css/Object.css"
import {obj} from "./constance"
// IT行业就业、职场痛点
class Object1 extends Component{
    render(){
        return(
            <div className="obj">
                <img className="objIMg1" src={require("../img/兄弟连1_51.png")} alt=""/>
                <img src={require("../img/兄弟连1_70.png")} alt=""/>
                <img src={require("../img/兄弟连1_73.png")} alt=""/> */}
                <img className="objImg2" src={require("../img/兄弟连1_19.png")}/>
                <p className="objP1">{obj.obj1}</p>
                <p className="red objP2">{obj.obj2}</p>
                {obj.obj3.map(item=>
                    <span className={"obj3 "+item.class}>{item.span}</span>                  
                )}
                 {/* 了解更多，立即报名 */}
                 <div className="obj2Div">
                    <img src={require("../img/兄弟连1_41.png")} alt=""/>
                    <img src={require("../img/兄弟连1_43.png")} alt=""/>
                </div>
            </div>
        )}
}
export default Object1;
