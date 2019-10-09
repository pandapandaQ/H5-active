import React, { Component } from 'react';
import QunestionGroup from '../../components/QunestionGroup'
import Mountain2 from '../../components/Mountain2'
import './Question_4.scss'

class Page extends Component {
  onClick = (value) => {
    const { callback, step } = this.props
    callback && callback({ step, value })
  }
  render() {
    return <div className='question question-4'>
      <Mountain2 />
      <img className='door_q4' style={{ position: "fixed", bottom: '0', right: '80px', height: '291px', width: '129px', objectFit: 'cover' }} src={require('../../images/q4_1.png')} />
      <QunestionGroup onClick={this.onClick} data={{
        title: ['此时恒星上出现一道传送门，', '你会？'],
        items: ['A. 穿越去别的恒星', 'B. 去未来看看十年后的自己', 'C. 回到过去弥补一些遗憾', 'D. 选择回家']
      }} />
    </div>
  }
}

export default Page