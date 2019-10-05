import React, { Component } from 'react';
import Background from './Background'
import LandingPage from './LandingPage'
import Transition from './Transition'
import Question1 from './question/Question_1'
import Question2 from './question/Question_2'
import Question3 from './question/Question_3'
import Question4 from './question/Question_4'

class Index extends Component {
  state = {
    step: 7,
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
      case 6:
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
      {step === 4 && <Question2 step={4} callback={this.onPageChange} />}
      {step === 5 && <Question3 step={5} callback={this.onPageChange} />}
      {step === 6 && <Question4 step={6} callback={this.onPageChange} />}
    </div>
  }
}

export default Index