import React, { Component } from 'react';
import './Result.scss'

class Page extends Component {
  componentDidMount() {
    const { callback, step } = this.props
    setTimeout(() => {
      callback && callback({step})
    }, 1000);
  }

  render() {
    return <div className='result'>result</div>
  }
}

export default Page