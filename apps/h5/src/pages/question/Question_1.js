import React, { Component } from 'react';
import QunestionGroup from '../../components/QunestionGroup'
import './Question_1.scss'

class Page extends Component {
    onClick = (value) => {
        const { callback, step } = this.props
        callback && callback({ step, value })
    }
    render() {
        return <div className='question question-1'>
            <img style={{ position: "fixed", bottom: '0', left: '0',right:'0', width: '100%', objectFit: 'cover' }} src={require('../../images/q1_1.png')} />
            <img style={{ position: "fixed", bottom: '150px', right:'15%', width: '70px',height:'81px', objectFit: 'cover' }} className="people" src={require('../../images/q1_2.png')} />
            <QunestionGroup onClick={this.onClick} data={{
                title: ['当你进入了一个黑洞，', ' 你第一反应是？'],
                items: ['A. 冷静观察四周变化', 'B. 兴奋、快速向前移动继续探索', 'C. 希望自己在梦里马上醒来']
            }} />
        </div>
    }
}

export default Page