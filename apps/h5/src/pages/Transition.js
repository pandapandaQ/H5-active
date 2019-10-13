import React, { Component } from 'react';
import Mount from '../components/Mountain'
import Ball from '../components/Ball'

import './Transition.scss'

class Page extends Component {
  state = {
    part: 0,
  }
  componentDidMount() {
    const { callback, step } = this.props
      this.timeout = setTimeout(() => {
        callback && callback({step})
    }, 19500);
  }

  onClock = () => {
    const { callback, step } = this.props
    clearTimeout(this.timeout)
    callback && callback({step})
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.step === nextProps.currentStep && this.props.currentStep !== nextProps.currentStep) {

    }
  }

  render() {
    return <div className='transition'>
      <div>
        <img className='t1_5' style={{ position: "fixed", right: '-30px', bottom: '50px', width: '339px', height: '339px', objectFit: 'cover' }} src={require('../images/t1_5.png')} />
        <img className='t1_6' style={{ position: "fixed", left: '0', bottom: '0', width: '100%', objectFit: 'cover' }} src={require('../images/t1_6.png')} />
        <img className='t1_1' style={{ position: "fixed", left: '12%', bottom: '30px', width: '75px', height: '107px', objectFit: 'cover' }} src={require('../images/t1_1.png')} />

        <img className='t1_4' style={{ position: "fixed", right: '50px', bottom: '140px', width: '175px', height: '175px', objectFit: 'cover' }} src={require('../images/t1_4.png')} />
        <img className='t1_3' style={{ position: "fixed", right: '24px', bottom: '125px', width: '216px', height: '200px', objectFit: 'cover' }} src={require('../images/t1_3.png')} />
        <img className='t1_2' style={{ position: "fixed", right: '0', bottom: '164px', width: '266px', height: '129px', objectFit: 'cover' }} src={require('../images/t1_2.png')} />

        <div className='t1_7' style={{ position: "fixed", left: '12%', top: '130px', color: '#d8d8d8' }}>数百年来</div>
        <div className='t1_7' style={{ position: "fixed", left: '12%', top: '170px', color: '#d8d8d8' }}>人类对宇宙的探索</div>
        <div className='t1_7' style={{ position: "fixed", left: '12%', top: '210px', color: '#d8d8d8' }}>从未停止过</div>

        <img className='t2_1' style={{ position: "fixed", left: '0', bottom: '0', width: '100%', objectFit: 'cover' }} src={require('../images/t2_1.png')} />
        <img className='t2_2' style={{ position: "fixed", right: '0', bottom: '50px', width: '239px', height: '274px', objectFit: 'cover' }} src={require('../images/t2_2.png')} />

        <img className='t2_5' style={{ position: "fixed", right: '108px', bottom: '230px', width: '40px', height: '41px', objectFit: 'cover' }} src={require('../images/t2_5.png')} />
        <img className='t2_4' style={{ position: "fixed", right: '60px', bottom: '235px', width: '135px', height: '65px', objectFit: 'cover' }} src={require('../images/t2_4.png')} />
        <img className='t2_6' style={{ position: "fixed", right: '60px', bottom: '50px', width: '139px', height: '102px', objectFit: 'cover' }} src={require('../images/t2_6.png')} />


        <div className='t2_7' style={{ position: "fixed", left: '12%', top: '130px', color: '#d8d8d8' }}>20世纪50年代</div>
        <div className='t2_7' style={{ position: "fixed", left: '12%', top: '170px', color: '#d8d8d8' }}>物理学家首次提出</div>
        <div className='t2_7' style={{ position: "fixed", left: '12%', top: '210px', color: '#d8d8d8' }}>平行宇宙存在的可能性</div>

        <div className='t3_2' style={{ position: "fixed", bottom: '100px', color: '#d8d8d8' }} ><Ball /></div>
        <img className='t3_3' style={{ position: "fixed", right: '0', bottom: '0', width: '100%', objectFit: 'cover' }} src={require('../images/t3_3.png')} />

        <img className='t3_1' style={{ position: "fixed", right: '0', bottom: '130px', width: '269px', height: '305px', color: '#d8d8d8' }} src={require('../images/t3_1.png')} />

        <div className='t3_7' style={{ position: "fixed", left: '12%', top: '130px', color: '#d8d8d8' }}>马上进入平行宇宙</div>
        <div className='t3_7' style={{ position: "fixed", left: '12%', top: '170px', color: '#d8d8d8' }}>测测你的探索潜能吧</div>

        <img onClick={this.onClock} style={{ position: "fixed", left: '12%', top: '30px', width: '74px', height: '29px', objectFit: 'cover' }} src={require('../images/skip.png')} />

      
      </div>
    </div>
  }
}

export default Page