import React, { Component } from 'react';
import QunestionGroup from '../../components/QunestionGroup'
import Mountain2 from '../../components/Mountain2'
import './Question_3.scss'

class Page extends Component {
  onClick = (value) => {
    const { callback, step } = this.props
    callback && callback({ step, value })
  }
  render() {
    return <div className='question question-3'>
      <img className='people_q3_2' style={{ position: "fixed", bottom: '117px',  left:'30%', height:'52px', width: '31px', objectFit: 'cover' }} src={require('../../images/q3_1.png')} />

      <Mountain2 />
      <img className='people_q3' style={{ position: "fixed", bottom: '0',  right:'0', height:'235px', width: '221px', objectFit: 'cover' }} src={require('../../images/q3_3.png')} />
      <img  style={{ position: "fixed", bottom: '40%',  right:'50px', height:'75px', width: '89px', objectFit: 'cover' }} src={require('../../images/q3_2.png')} />

      <QunestionGroup onClick={this.onClick} data={{
        title: ['你达到了一颗不知名恒星上，', ' 最希望看到？'],
        items: ['A. 一位老朋友', 'B. 一名外星人', 'C. 一道美丽的风景', 'D. 周杰伦']
      }} />
    </div>
  }
}

export default Page