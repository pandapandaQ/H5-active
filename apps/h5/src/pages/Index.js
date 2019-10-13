import React, { Component } from 'react';
import Background from './Background'
import Loading from './Loading'
import LandingPage from './LandingPage'
import Transition from './Transition'
import Question1 from './question/Question_1'
import Question2 from './question/Question_2'
import Question3 from './question/Question_3'
import Question4 from './question/Question_4'
import Result from './Result'
import axios from 'axios';
import qs from 'qs';
import wx from "weixin-jsapi";
// import Audio from '../components/Audio'

import './Index.scss'

class Index extends Component {
  state = {
    step: 0,
    answer: 1,
    userInfo: {
      // headimgurl: "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq4gq4FGJsRQg7u7KKf6aqzcLoNickuowTGcQr52z2jfTtnJQCyYibwNjLhoiaA1qUvPpHBmtI0xwJCg/132",
      // nickname: "PandaQ"
    }
  }

  componentDidMount() {
    let data = qs.parse(window.location.href.split('?')[1]);
    const { code } = data

    console.log('code',code)
    if (code) {
      axios.get(`https://finalmeet.com/kaltendin/api/users?code=${code}`).then((res = {}) => {
        const { code, data } = res.data
        console.log('res',res)
        if (code === 0) {
          this.setState({ userInfo: data })
        } else {
          window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4e31314f63c6e1be&redirect_uri=https%3A%2F%2Ffinalmeet.com%2Fkaltendin%2Fexploratory_testing%2F&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
        }
      });
      this.initWechat()
    }
    
  }

  initWechat = () => {
    axios.post(`https://finalmeet.com/kaltendin/api/users/jsconfig`,{
      jsApiList: ["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"],
      url: window.location.href.split("#")[0],
      debug: false
    }).then(({data})=>{
      console.log('-------data',data)
      if(data.code === 0) {
        console.log('-------data.data',data.data)
        wx.config({
          debug: false,
          appId: data.data.appId,
          timestamp: data.data.timestamp,
          nonceStr: data.data.nonceStr,
          signature: data.data.signature,
          jsApiList: ["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"]
        });
        wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
          wx.updateAppMessageShareData({ 
            title: '探索你的潜能', // 分享标题
            desc: '探索你的潜能', // 分享描述
            link: 'https://finalmeet.com/kaltendin/exploratory_testing/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'https://finalmeet.com/kaltendin/exploratory_testing/share.png', // 分享图标
            success: function () {
              // 设置成功
            }
          })
          wx.updateTimelineShareData({ 
            title: '探索你的潜能', // 分享标题
            link: 'https://finalmeet.com/kaltendin/exploratory_testing/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'https://finalmeet.com/kaltendin/exploratory_testing/share.png', // 分享图标
            success: function () {
              // 设置成功
            }
          })
          // wx.onMenuShareAppMessage({
          //   title: '这有一张票送你去宇宙外太空，探索你的潜能', // 分享标题
          //   desc: '恭喜您正在登陆X星球，前方高能…', // 分享描述
          //   link: 'https://finalmeet.com/kaltendin/exploratory_testing/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          //   imgUrl: 'https://finalmeet.com/kaltendin/exploratory_testing/share.png', // 分享图标
          //   success: function () {
          //     // 用户点击了分享后执行的回调函数
          //   }
          // })
          // wx.onMenuShareTimeline({
          //   title: '这有一张票送你去宇宙外太空，探索你的潜能', // 分享标题
          //   link: 'https://finalmeet.com/kaltendin/exploratory_testing/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          //   imgUrl: 'https://finalmeet.com/kaltendin/exploratory_testing/share.png', // 分享图标
          //   success: function () {
          //   // 用户点击了分享后执行的回调函数
          //   }
          // })
        }); 
      }
    })
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
        this.setState({ step: step + 1, answer: data.value })
        break;
      case 6:
        this.setState({ step: step + 1 })
        break;
      case 7:
        this.setState({ step: step + 1 })
        break;
      case 8:
        this.setState({ step: step + 1 })
        break;
      default:
        break;
    }
  }

  render() {
    const { step, answer, userInfo } = this.state;
    return <div className='main'>
      <Background step={step} />
      <div className='main-page' style={{ opacity: step === 0 ? 1 : 0 }}>
        <Loading step={0} currentStep={step} callback={this.onPageChange} />
      </div>
      <div className='main-page' style={{ opacity: step === 1 ? 1 : 0 }}>
        <LandingPage step={1} currentStep={step} callback={this.onPageChange} />
      </div>

      {step === 2 && <Transition step={2} callback={this.onPageChange} />}

      {/* <div className='main-page' style={{ opacity: step === 3 ? 1 : 0 }}>
        <Question1 step={3} callback={this.onPageChange} />
      </div> */}
      {step === 3 && <Question1 step={3} callback={this.onPageChange} />}
      {step === 4 && <Question2 step={4} callback={this.onPageChange} />}
      {step === 5 && <Question3 step={5} callback={this.onPageChange} />}
      {step === 6 && <Question4 step={6} callback={this.onPageChange} />}
      {step === 7 && <Result step={7} answer={answer} userInfo={userInfo} callback={this.onPageChange} />}
      {/* {step === 8 && <Result step={8} callback={this.onPageChange} />} */}
      {/* {step !== 0 && <Audio/>} */}
    </div>
  }
}

export default Index