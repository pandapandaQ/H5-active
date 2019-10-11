import React, { Component } from 'react';

class MyComponent extends Component {
  state = { audio: true }
  onClick = () => {
    const { audio } = this.state;
    this.setState({ audio: !audio })
  }
  render() {
    const { audio } = this.state;
    return <div className='mountain'>
      {
        audio
          ? <img onClick={this.onClick} style={{ position: "fixed", right: '20px', top: '20px', width: '45px', height: '45px', objectFit: 'cover' }} src={require('../images/m0.png')} />
          : <img onClick={this.onClick} style={{ position: "fixed", right: '20px', top: '20px', width: '45px', height: '45px', objectFit: 'cover' }} src={require('../images/m1.png')} />
      }
      {audio && <audio autoPlay preload src={require('../images/audio.mp3')}/> }
    </div>
  }
}

export default MyComponent