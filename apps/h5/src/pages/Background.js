import React, { Component } from 'react';

import './Background.scss'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = { event: { alpha: 0, beta: 0, gamma: 0 } }
  }
  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.deviceOrientationHandler, false);
    }
  }

  deviceOrientationHandler = (event) => {
    this.setState({ event: { alpha: this.getOffset(event.alpha), beta: this.getOffset(event.beta), gamma: this.getOffset(event.gamma) } })
  }

  getOffset(num) {
    let res = 0
    if(num > 200) {
      res = num - 360
    } else{
      res = num;
    }
    return parseInt(res) ;
  }

  render() {
    const { step } = this.props;
    const { event } = this.state;
    return <div className='main-background'>
      <img style={{ transform: `translate(${parseInt(event.gamma)}px, ${parseInt(event.beta)}px)`, position: "absolute", left: '-150px', top: '-100px', width: '850px', height: '1000px', objectFit: 'cover' }} src={require('../images/background.jpg')} />
      {
        step !== 7 && <div>
          <img style={{ transform: `translate(${parseInt(event.gamma)}px, ${parseInt(event.beta)}px)`, position: "absolute", right: '0', top: '0', width: '100%' }} className="start1" src={require('../images/bk1.png')} />
          <img style={{ transform: `translate(${parseInt(event.gamma)}px, ${parseInt(event.beta)}px)`, position: "absolute", right: '0', top: '0', width: '100%' }} className="start2" src={require('../images/bk2.png')} />
          <img style={{ transform: `translate(${parseInt(event.gamma)}px, ${parseInt(event.beta)}px)`, position: "absolute", right: '0', top: '0', width: '100%' }} className="start3" src={require('../images/bk3.png')} />
        </div>
      }
      {/* <img style={{ position: "absolute", right: '20px', top: '50px', width: '100px', height: '51px' }} className="start4" src={require('../images/bk4.png')} /> */}
      {/* <div style={{ position: "absolute", right: '20px', top: '50px', color: '#ffffff' }}>alpha{event.alpha}</div>
      <div style={{ position: "absolute", right: '20px', top: '80px', color: '#ffffff' }}>beta{event.beta}</div>
      <div style={{ position: "absolute", right: '20px', top: '110px', color: '#ffffff' }}>gamma{event.gamma}</div> */}
    </div>
  }
}

export default Page