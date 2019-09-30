import React, { Component } from 'react';
import "../css/main.css"
import Reason from '../js/Reason';
import WorkPlace from '../js/WorkPlace';
import BreakIce from '../js/BreakIce';
import Really from '../js/Really';
import Object1 from '../js/Object';
import Thing from '../js/XiongDi';

class Main extends Component{
    render(){
        return(
            <div className="main">  
                 {/* 选择我们的三个理由 */}
                <Reason/>
                {/* IT行业就业、职场痛点*/}
                <WorkPlace/>
                {/* 解决∏人才供需矛盾的破冰者*/}
                <BreakIce/>
                {/* 解决∏人才供需矛盾的破冰者*/}
                <Really/>
                {/* 六大学科融会贯通*/}
                <Object1/>
                {/* 关于兄弟会应该知道的事*/}
                <Thing/>
            </div>
        )        
    }
}
export default Main;
