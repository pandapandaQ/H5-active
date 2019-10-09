import React, { Component } from 'react';
import './LandingPage.scss'
import Mountain from '../components/Mountain'

class Page extends Component {
  onClick = () => {
    const { callback, step, currentStep } = this.props
    currentStep === step && callback && callback({ step })
  }
  render() {
    return <div className="landing-page" onClick={this.onClick}>
      <Mountain />
      <img style={{ position: 'relative', top: '15%', width: '141px', height: '280px' }} src={require('../images/landing2.png')} />
      <img className="landing" style={{ position: 'relative', top: '18%', width: '104px', height: '104px' }} src={require('../images/landing1.png')} />
      <div style={{ position: 'relative', top: '17.5%', color: '#d8d8d8' }}>开始探索</div>
    </div>
  }
}

export default Page