import React, { Component } from 'react';
import './LandingPage.scss'

class Page extends Component {
  onClick = ()=> {
      const { callback, step } = this.props
      callback && callback({step})
  }
  render() {
    return <div className='landing-page' onClick={this.onClick}>
    </div>
  }
}

export default Page