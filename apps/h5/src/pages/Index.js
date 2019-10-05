import React, { Component } from 'react';
import Background from './Background'
import LandingPage from './LandingPage'
import Transition from './Transition'
import Question1 from './question/Question_1'

class Index extends Component {
  state = {
    step: 3,
  }
  componentWillMount() {

  }

  onPageChange = (data) => {
    const { step } = this.state
    console.log(data)
    switch (data.step) {
      case 0:
        break;
      case 1:
        this.setState({ step: step + 1 })
        break;
      case 2:
        this.setState({ step: step + 1 })
        break;
      case 3:
        this.setState({ step: step + 1 })
        break;
      case 4:
        this.setState({ step: step + 1 })
        break;
      case 5:
        this.setState({ step: step + 1 })
        break;
      default:
        break;
    }
  }

  render() {
    const { step } = this.state;
    return <div>
      <Background />
      {step === 1 && <LandingPage step={1} callback={this.onPageChange} />}
      {step === 2 && <Transition step={2} callback={this.onPageChange} />}
      {step === 3 && <Question1 step={3} callback={this.onPageChange} />}
    </div>
  }
}

export default Index