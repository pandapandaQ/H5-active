import React, { Component } from 'react';
import './LandingPage.scss'
import Mountain from '../components/Mountain'
import Audio from '../components/Audio'
class Page extends Component {
  
  onClick = () => {
    const { callback, step, currentStep } = this.props
    this.musicState && this.music && this.music.play();
    currentStep === step && callback && callback({ step })
  }
  

  setElement = (e,a)=> {
    this.music = e;
    this.musicState = a;
  }

  render() {
    return <div className="landing-page">
      <Mountain />
      <img style={{ position: 'relative', top: '14%', width: '141px', height: '280px' }} src={require('../images/landing2.png')} />
      <div onTouchStart={this.onClick} style={{ position: 'relative', top: '15%', padding: '24px' }} >
        <img className="landing" style={{ width: '104px', height: '104px' }} src={require('../images/landing1.png')} />
        <div style={{ color: '#d8d8d8' }}>开始探索</div>
      </div>
      <Audio getElement={(e,a)=>{this.setElement(e,a)}}/>
    </div>
  }
}

export default Page