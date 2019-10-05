import React, { Component } from 'react';
import './LandingPage.scss'

class Page extends Component {
  componentDidMount() {
    const { callback, step } = this.props
    setTimeout(() => {
      callback && callback({step})
    }, 1000);
  }

  render() {
    return <div className='transition'>
    </div>
  }
}

export default Page