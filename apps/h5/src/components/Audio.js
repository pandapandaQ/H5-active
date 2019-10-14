import React, { Component } from 'react';

class MyComponent extends Component {
  state = { audio: true }
  onClick = () => {
    const { audio } = this.state;
    const { getElement } = this.props;
    this.setState({ audio: !audio })
    getElement && getElement(this.refs.music, !audio)
  }
  componentDidMount() {
    const { getElement } = this.props;
    const { audio } = this.state;
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