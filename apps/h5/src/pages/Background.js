import React, { Component } from 'react';
import './Background.scss'

class Page extends Component {

  render() {
    const { step } = this.props;
    return <div className='main-background'>
      <img style={{ position: "absolute", left: '0', top: '0', width: '100%', height: '100%', objectFit: 'cover' }} src={require('../images/background.jpg')} />
      <img style={{ position: "absolute", right: '0', top: '0', width: '190px', height: '307px' }} className="start1" src={require('../images/bk1.png')} />
      <img style={{ position: "absolute", left: '150px', top: '200px', width: '187px', height: '127px' }} className="start2" src={require('../images/bk2.png')} />
      <img style={{ position: "absolute", right: '50px', top: '100px', width: '29px', height: '188px' }} className="start3" src={require('../images/bk3.png')} />
      <img style={{ position: "absolute", right: '20px', top: '50px', width: '100px', height: '51px' }} className="start4" src={require('../images/bk4.png')} />
    </div>
  }
}

export default Page