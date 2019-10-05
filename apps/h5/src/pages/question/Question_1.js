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
            <QunestionGroup onClick={this.onClick} data={{
                title: ['当你进入了一个黑洞，', ' 你第一反应是？'],
                items: ['A. 冷静观察四周变化', 'B. 兴奋、快速向前移动继续探索', 'C. 希望自己在梦里马上醒来']
            }} />
        </div>
    }
}

export default Page