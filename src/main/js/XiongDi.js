import React, { Component } from 'react';
import "../css/XiongDi.css"
import {thing} from "./constance"
// IT行业就业、职场痛点
class Thing extends Component{
    render(){
        return(
            <div className="thing">
                <img className="thingImg1" src={require("../img/兄弟连1_96.png")}/>
                <img className="thingImg2" src={require("../img/兄弟连1_83.png")}/>
                <img className="thingImg" src={require("../img/兄弟连1_87.png")}/>
                <img className="thingImg" src={require("../img/兄弟连1_91.png")}/>
                <img className="thingImg" src={require("../img/兄弟连1_94.png")}/>
                <img className="thingImg" src={require("../img/兄弟连1_87.png")}/>
                <img className="thingImg2" src={require("../img/兄弟连1_39.png")}/>
                <p className="thing1"><b>{thing.thing1}<span className='red'>{thing.thing2}</span><span>{thing.thing3}</span></b></p>
                <p className="thing2"><b>{thing.thing4}</b></p>
                {/*能力定级四个标题 */}
                <p className="p1 thingP1"><b>{thing.thingP1}</b></p>
                <p className="p1 thingP2"><b>{thing.thingP2}</b></p>
                <p className="p1 thingP3"><b>{thing.thingP3}</b></p>
                <p className="p1 thingP4"><b>{thing.thingP4}</b></p>
                 {/* 标题下的内容 */}
                 <p className="p2 pp1">{thing.p1}</p>
                 {/* 第二段 */}
                <div className="pp2">
                    <p className="p2 p21"><b>{thing.p2}</b>{thing.p21}</p>
                    <p className="p2 p22"><b>{thing.p22}</b>{thing.p222}</p>
                    <p className="p2 p23">{thing.p23}</p>
                    <p className="p2 p24">{thing.p24}</p>
                </div>
                {/* 第三段 */}
                <div className="pp3">
                    {thing.pp3.map(item=>
                        <p className={"p2 "+item.class}>{item.p3}<span className="red">{item.p301}</span>{item.p302}<span className="red">{item.p303}</span></p>
                    )}
                </div>
                {/* 第四段 */}
                <div className="pp4">
                    {thing.p4.map(item=>
                         <p className={"p2 "+item.class}>{item.p44}</p>
                    )}         
                </div>
                 {/* 了解更多，立即报名 */}
                 <div className="thing2Div">
                    <img src={require("../img/兄弟连1_41.png")} alt=""/>
                    <img src={require("../img/兄弟连1_43.png")} alt=""/>
                </div>
            </div>
        )}
}
export default Thing;
