import React, { Component } from 'react';
import QunestionGroup from '../../components/QunestionGroup'
import './Question_2.scss'

class Page extends Component {
  onClick = (value) => {
    const { callback, step } = this.props
    callback && callback({ step, value })
  }
  render() {
    return <div className='question question-2'>
      <QunestionGroup onClick={this.onClick} data={{
        title: ['穿越黑洞进入外太空，', '看到一颗流星划过你会？'],
        items: ['A. 马上许愿', 'B. 赶紧拍照留念', 'C. 观察它的运行轨迹', 'D. 追过去一起飞翔']
      }} />
    </div>
  }
}

export default Page