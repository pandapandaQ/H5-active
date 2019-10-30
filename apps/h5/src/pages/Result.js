import React, { Component } from 'react';
import './Result.scss'
import Waiting from './Waiting'
import Background from './Background'
import Index from './Index';
import html2canvas from 'html2canvas';

const imgArray = [
  require('../images/r2_1.png'),
  require('../images/r2_2.png'),
  require('../images/r2_3.png'),
  require('../images/r2_4.png'),
]

const Text1Array = [
  '[感知潜能]',
  '[脑洞潜能]',
  '[艺术潜能]',
  '[精进潜能]',
]

const Text2Array = [
  ['出类拔萃', '气质出众', '灵感创造', '直觉超强',],
  ['寻觅突破', '探索真谛', '眼光独到', '创造力强',],
  ['形神兼修', '见识卓越', '谦虚谨慎', '完美主义',],
  ['心驰神往', '追求极致', '深思远虑', '聚焦专注',],
]

const Text3Array = [
  [['你充满着意外和可能性、独树一帜', '可以是单纯的黑白色也可以是五彩缤纷'], ['你擅长从生活中总结经验，拥有超凡的领导气质', '天生就能让创造力指引自己'], ['关注周围的事物，理解他人，懂得关注他人的内心世界', '看待外部世界也保持开放的态度']],
  [['善于理解勇于打破边界', '诠释内心的热情去展示自我，坚持真实的感受'], ['你看到的不一定是真实的', '但会给人带来无限的惊喜'], ['你拥有无限的创新能力', '把很多不相干的东西联系成一个新奇的创意']],
  [['敢于对时代特性的思考', '坚信每一笔每一步的意义，心无旁骜前行探索'], ['脚踏实地适合展现物欲', '艺术与价值的完美结合，人如其画画如其人'], ['艺术性，直觉强，有同情心', '思想情绪不稳定，擅长创造，有艺术细胞']],
  [['被赋予了灵魂和生命力，从不后退永不妥协', '前行滑翔为连绵不断的追逐做准备'], ['有毅力、具恒心、言行一致', '雷厉风行、做事果断迅速'], ['热爱学习，做事行动迅速', '社交能力强，知识丰富，为人练达']],
]


class Page extends Component {
  state = { imgUrl: '', loading: true }
  componentDidMount() {

  }

  randomsort = (array) => {
    function randomsort(a, b) {
      return Math.random() > .5 ? -1 : 1;
    }
    const res = array.sort(randomsort);
    return res;
  }

  onload = () => {
    setTimeout(() => {
      html2canvas(this.refs.result, {
        useCORS: true,
        logging: false
      }).then(canvas => {
        this.setState({ imgUrl: canvas.toDataURL("image/png") })
        setTimeout(() => {
          this.setState({ loading: false })
        }, 300);
      });
    }, 3000);
  }

  render() {
    const { imgUrl, loading } = this.state;
    const { answer = 1, userInfo } = this.props;
    const windowWidth = window.innerWidth;
    const Text2 = this.randomsort(Text2Array[answer])
    const Text3 = this.randomsort(Text3Array[answer])
    const avatar = userInfo.headimgurl ? userInfo.headimgurl.replace('http://thirdwx.qlogo.cn', 'https://cocostar.com.cn/wechat_image') : ''
    const userName = userInfo.nickname || '';
    return <div className="result">
      <div ref='result' className="result-canvas">
        <img onLoad={this.onload} style={{ width: '100%', height: '100%' }} src={require('../images/rbk.jpg')} />
        <img style={{ position: "fixed", top: '24px', left: '10%', height: '79px', width: '327px', objectFit: 'cover' }} src={require('../images/r1.png')} />
        <img style={{ position: "fixed", top: '15%', left: `${(windowWidth - 364) / 2}px`, height: '317px', width: '364px', objectFit: 'cover' }} src={imgArray[answer]} />
        
        <div style={{ position: "fixed", left: '24px', top: '64%', color: '#ffffff', fontSize: '22px' }}>{Text1Array[answer]}</div>
        <div style={{ position: "fixed", left: '140px', top: '64%', color: '#ffffff', padding: '1px 12px 4px 12px', background: "#4e4e4e", fontSize: '15px' }}>{Text2[0]}</div>
        <div style={{ position: "fixed", left: '230px', top: '64%', color: '#ffffff', padding: '1px 12px 4px 12px', background: "#4e4e4e", fontSize: '15px' }}>{Text2[1]}</div>
        
        <div style={{ position: "fixed", left: '24px', top: '71%', color: '#a8a8a8', fontSize: '12px' }}>{Text3[0][0]}</div>
        <div style={{ position: "fixed", left: '24px', top: '74%', color: '#a8a8a8', fontSize: '12px' }}>{Text3[0][1]}</div>

        <img style={{ position: "fixed", top: '81%', left: `24px`, height: '72px', width: '128px' }} src={require('../images/r3.png')} />
        <img style={{ position: "fixed", top: '80%', right: `24px`, height: '80px', width: '80px' }} src={require('../images/qrcode.jpg')} />
        <div style={{ position: "fixed", top: '94%', right: '24px', color: '#a8a8a8', fontSize: '12px' }}>扫码解锁你的潜能</div>

        <img style={{ position: "fixed", top: '30px', left: `28px`, height: '44px', width: '44px', borderRadius: '33px' }} src={avatar} />
        <div style={{ position: "fixed", top: '80px', left: '28px', color: '#a8a8a8', fontSize: '12px' }}>{userName}</div>
      </div>
      <div className="result-image">
        <img alt="" src={imgUrl} />
      </div>
      {
        loading && <div className="result-loading">
          <img style={{ position: "fixed", left: '-150px', top: '-100px', width: '850px', height: '1000px', objectFit: 'cover' }} src={require('../images/background.jpg')} />
          <Waiting />
        </div>
      }

    </div>
  }
}

export default Page