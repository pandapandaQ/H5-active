import React, { Component } from 'react';

import './Transition.scss'

class Page extends Component {
  componentDidMount() {
    const { callback, step } = this.props
    this.refs.video.play()
    this.refs.video.onended = () => {
      callback && callback({step})
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.step === nextProps.currentStep && this.props.currentStep !== nextProps.currentStep ) {
    
    }
  }

  render() {
    return <div className='transition'>
    </div>
  }
}

export default Page