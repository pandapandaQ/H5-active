import React, { Component } from 'react';
import Background from './Background'
import Loading from './Loading'
import LandingPage from './LandingPage'
import Transition from './Transition'
import Question1 from './question/Question_1'
import Question2 from './question/Question_2'
import Question3 from './question/Question_3'
import Question4 from './question/Question_4'
import Waiting from './Waiting'
import './Index.scss'

class Index extends Component {
  state = {
    step: 0,
  }
  componentWillMount() {

  }

  onPageChange = (data) => {
    const { step } = this.state
    switch (data.step) {
      case 0:
        this.setState({ step: step + 1 })
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
      case 7:
        this.setState({ step: step + 1 })
        break;
      case 7:
        this.setState({ step: step + 1 })
        break;
      default:
        break;
    }
  }

  render() {
    const { step } = this.state;
    return <div className='main'>
      <Background />
      <div className='main-page' style={{ opacity: step === 0 ? 1 : 0 }}>
        <Loading step={0} currentStep={step} callback={this.onPageChange} />
      </div>
      <div className='main-page' style={{ opacity: step === 1 ? 1 : 0 }}>
        <LandingPage step={1} callback={this.onPageChange} />
      </div>

      {step === 2 && <Transition step={2} callback={this.onPageChange} />}

      <div className='main-page' style={{ opacity: step === 3 ? 1 : 0 }}>
        <Question1 step={3} callback={this.onPageChange} />
      </div>
      {step === 4 && <Question2 step={4} callback={this.onPageChange} />}
      {step === 5 && <Question3 step={5} callback={this.onPageChange} />}
      {step === 6 && <Question4 step={6} callback={this.onPageChange} />}
      {step === 7 && <Waiting step={6} callback={this.onPageChange} />}
      {step === 8 && <Waiting step={6} callback={this.onPageChange} />}
    </div>
  }
}

export default Index