import React, { Component } from 'react';
import CountTo from 'react-count-to';
import Mountain2 from '../components/Mountain2'
import './Waiting.scss'

class Page extends Component {
    componentDidMount() {
        const { callback, step } = this.props
        // setTimeout(() => {
        //     callback && callback({step})
        // }, 2300);

        //事件上报
        window.MtaH5 && window.MtaH5.clickStat('ceshi-10',{'page3':'true'})
    }

    render() {
        return <div className='waiting'>
            <Mountain2 />
            <div className='waiting__block'>
                <img className="waiting__block-image" src={require('../images/waiting.png')} />
                <div className="waiting__block-text-1">
                    <CountTo to={99} speed={4700} />
                    <span>%</span>
                </div>
                <div className="waiting__block-text-2">
                    你在平行宇宙的探索潜能
                </div>
                <div className="waiting__block-text-2">
                    正在生成……
                </div>
            </div>
        </div>
    }
}

export default Page