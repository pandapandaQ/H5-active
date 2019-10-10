import React, { Component } from 'react';
import './Background.scss'

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', DeviceOrientationHandler, false);
} else {
  alert("您的浏览器不支持HTML5 DeviceOrientation接口");
}

function DeviceOrientationHandler(event) {
  alert(event.alpha)
}

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = { event: { alpha: 0, beta: 0, gamma: 0 }, index: 0 }
  }
  componentDidMount() {

  }

  deviceOrientationHandler = (event) => {
    const { index } = this.state;
    alert("222");
    console.log(event)
    this.setState({ event, index: index + 1 })
  }

  render() {
    const { step } = this.props;
    const { event, index } = this.state;
    return <div className='main-background'>
      <img style={{ position: "absolute", left: '0', top: '0', width: '100%', height: '100%', objectFit: 'cover' }} src={require('../images/background.jpg')} />
      <img style={{ position: "absolute", right: '0', top: '0', width: '190px', height: '307px' }} className="start1" src={require('../images/bk1.png')} />
      <img style={{ position: "absolute", left: '150px', top: '200px', width: '187px', height: '127px' }} className="start2" src={require('../images/bk2.png')} />
      <img style={{ position: "absolute", right: '50px', top: '100px', width: '29px', height: '188px' }} className="start3" src={require('../images/bk3.png')} />
      <img style={{ position: "absolute", right: '20px', top: '50px', width: '100px', height: '51px' }} className="start4" src={require('../images/bk4.png')} />
      <div style={{ position: "absolute", right: '20px', top: '50px', color: '#ffffff' }}>alpha{event.alpha}</div>
      <div style={{ position: "absolute", right: '20px', top: '80px', color: '#ffffff' }}>beta{event.beta}</div>
      <div style={{ position: "absolute", right: '20px', top: '110px', color: '#ffffff' }}>gamma{event.gamma}</div>
      <div style={{ position: "absolute", right: '20px', top: '140px', color: '#ffffff' }}>aindex {index}</div>
    </div>
  }
}

export default Page