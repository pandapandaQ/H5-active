import React, { Component } from 'react';

class MyComponent extends Component {
  state = { audio: true }
  onClick = () => {
    const { audio } = this.state;
    this.setState({ audio: !audio })
  }
  componentDidMount() {
    const { getElement, audio } = this.props;
    setTimeout(() => {
      this.refs.music.play();
    }, 200);
    getElement && getElement(this.refs.music, audio)
    //console.log(this.refs.music)
  }
  render() {
    const { audio } = this.state;
    return <div className='mountain'>
      {
        audio
          ? <img onClick={this.onClick} style={{ position: "fixed", right: '20px', top: '20px', width: '34px', height: '34px', objectFit: 'cover' }} src={require('../images/m0.png')} />
          : <img onClick={this.onClick} style={{ position: "fixed", right: '20px', top: '20px', width: '34px', height: '34px', objectFit: 'cover' }} src={require('../images/m1.png')} />
      }
      {audio && <audio ref="music" autoPlay src={require('../images/audio.mp3')} />}
    </div>
  }
}

export default MyComponent