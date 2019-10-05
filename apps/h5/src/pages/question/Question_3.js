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
        title: ['你达到了一颗不知名恒星上，', ' 最希望看到？'],
        items: ['A. 一位老朋友', 'B. 一名外星人', 'C. 一道美丽的风景', 'D. 周杰伦']
      }} />
    </div>
  }
}

export default Page