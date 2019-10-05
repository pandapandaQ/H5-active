import React, { Component } from 'react';
import './Waiting.scss'

class Page extends Component {
  componentDidMount() {
    const { callback, step } = this.props
    setTimeout(() => {
      callback && callback({step})
    }, 1000);
  }

  render() {
    return <div className='waiting'>waiting</div>
  }
}

export default Page