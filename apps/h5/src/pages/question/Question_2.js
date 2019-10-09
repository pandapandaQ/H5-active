import React, { Component } from 'react';
import QunestionGroup from '../../components/QunestionGroup'
import Mountain from '../../components/Mountain'
import './Question_2.scss'

class Page extends Component {
  onClick = (value) => {
    const { callback, step } = this.props
    callback && callback({ step, value })
  }
  render() {
    return <div className='question question-2'>
      <Mountain />
      <img className='people_q2' style={{ position: "fixed", bottom: '0', left: '15%',right:'0', height:'200px', width: '134px', objectFit: 'cover' }} src={require('../../images/q2_1.png')} />
      <img style={{ position: "fixed", bottom: '28%',right:'32%', height:'34px', width: '64px', objectFit: 'cover' }} src={require('../../images/q2_2.png')} />
      <img className='start_q2' style={{ position: "fixed", bottom: '40%',right:'40%', height:'63px', width: '83px', objectFit: 'cover' }} src={require('../../images/q2_3.png')} />
      <QunestionGroup onClick={this.onClick} data={{
        title: ['穿越黑洞进入外太空，', '看到一颗流星划过你会？'],
        items: ['A. 马上许愿', 'B. 赶紧拍照留念', 'C. 观察它的运行轨迹', 'D. 追过去一起飞翔']
      }} />
    </div>
  }
}

export default Page