import React, { Component } from 'react';
import './QuestionGroup.scss'

class MyComponent extends Component {
  onClick = (value) => {
    const { onClick } = this.props
    onClick && onClick(value)
  }
  render() {
    const { data = {} } = this.props;
    return <div className='question-group'>
      {
        data.title && data.title.map((item, index) => {
          return <div key={index} className='question-group__title'>{item}</div>
        })
      }
      {
        data.title && data.items.map((item, index) => {
          return <div key={index} onClick={() => this.onClick(index)} className='question-group__item'>{item}</div>
        })
      }

    </div>
  }
}

export default MyComponent