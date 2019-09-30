import React, { Component } from 'react';
import "../css/workPlace.css"
import {work} from "./constance"
// IT行业就业、职场痛点
class WorkPlace extends Component{
    render(){
        return(
            <div className="work">  
                <div className="workOne">        
                    <img src={require("../img/兄弟连1_04.png")}/>
                    <img src={require("../img/兄弟连1_07.png")}/>
                    <img src={require("../img/兄弟连1_09.png")}/>
                    <img src={require("../img/兄弟连1_11.png")}/>
                    <img src={require("../img/兄弟连1_13.png")}/>
                    <img src={require("../img/兄弟连1_15.png")}/>
                    <p className="work1"><b>{work.work1}<span className='red'>{work.work2}</span></b></p>
                    <p className="work3"><b>{work.work44}<span className='red'>{work.work3}</span>{work.work4}</b></p>
                    <p className='work5'>{work.work5}</p>
                    <p className='work6'>{work.work6}</p>
                    {/* 图片上的三块 */}
                    {work.work7.map(item=>
                        <p className={item.class}>{item.p1}</p>
                    )}  
                    </div>             
                <div className="workTwo">
                    <img src={require("../img/兄弟连1_17.png")}/>
                    <img src={require("../img/兄弟连1_19.png")}/>
                    <p className="work1"><b>{work.work44}<span className='red'>{work.work8}</span>{work.work9}</b></p>
                    <p className='work5'>{work.work10}</p>
                    <p className='work6'>{work.work11}</p>
                    <p className='work7'>{work.work12}</p>
                    <div className="workTwoDiv">
                        {/* 四个div */}
                        {work.work13.map(item=>
                            <div className="left">
                                <img src={require('../img'+item.img+".png")}/>
                                <p>{item.p}</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        )        
    }
}
export default WorkPlace;
