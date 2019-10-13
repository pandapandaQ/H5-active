import React, { Component } from 'react';
import './Result.scss'
import Waiting from './Waiting'
import Background from './Background'

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
    const { answer = 1 } = this.props;

    let canvas = this.refs.res;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext('2d')

    let imgbk = new Image();
    imgbk.src = require('../images/rbk.jpg');
    imgbk.onload = () => {
      ctx.drawImage(imgbk, 0, 0, window.innerWidth, window.innerHeight);

      let img = new Image();
      img.src = require('../images/r1.png');
      img.onload = function () {
        ctx.drawImage(img, (canvas.width - 327) / 2, 40, 327, 79);
      }

      let img2 = new Image();
      img2.src = imgArray[answer];
      img2.onload = function () {
        ctx.drawImage(img2, (canvas.width - 364) / 2, 120, 364, 317);

      }

      // let img3 = new Image();
      // img3.src = require('../images/r2_1.png');
      // img3.onload = function () {
      //   ctx.drawImage(img3, (canvas.width - 364) / 2, 130, 364, 317);
      // }

      let img4 = new Image();
      img4.src = require('../images/r3.png');
      img4.onload = function () {
        ctx.drawImage(img4, 30, 560, 128, 72);
      }

      let img5 = new Image();
      img5.src = require('../images/qrcode.png');
      img5.onload = function () {
        ctx.drawImage(img5, 280, 550, 63, 63);
      }

      setTimeout(() => {
        this.setState({ imgUrl: canvas.toDataURL("image/png") })
      }, 1000);
      setTimeout(() => {
        this.setState({ loading: false })
      }, 2000);

      ctx.fillStyle = '#ffffff'
      ctx.font = "22px Arial";
      ctx.fillText(Text1Array[answer], 30, 460);

      const Text2 = this.randomsort(Text2Array[answer])

      ctx.fillStyle = "#4e4e4e";
      ctx.fillRect(152, 442, 94, 25);
      ctx.fillStyle = '#ffffff'
      ctx.font = "15px Arial";
      ctx.fillText(Text2[0], 170, 460);


      ctx.fillStyle = "#4e4e4e";
      ctx.fillRect(260, 442, 94, 25);
      ctx.fillStyle = '#ffffff'
      ctx.font = "15px Arial";
      ctx.fillText(Text2[1], 278, 460);

      const Text3 = this.randomsort(Text3Array[answer])
      console.log(Text3)
      ctx.fillStyle = '#a8a8a8'
      ctx.font = "12px Arial";
      ctx.fillText(Text3[0][0], 30, 500);

      ctx.fillStyle = '#a8a8a8'
      ctx.font = "12px Arial";
      ctx.fillText(Text3[0][1], 30, 520);

      ctx.fillStyle = '#a8a8a8'
      ctx.font = "12px Arial";
      ctx.fillText("扫码解锁你的潜能", 262, 632);

    }
  }

  randomsort = (array) => {
    function randomsort(a, b) {
      return Math.random() > .5 ? -1 : 1;
    }
    const res = array.sort(randomsort);
    return res;
  }

  render() {
    const { imgUrl, loading } = this.state;
    return <div>
      <div style={{ display: 'none' }}>
        <canvas ref='res' ></canvas>
      </div>
      <div className="result">
        <img src={imgUrl} />
      </div>
      {loading && <img style={{ position: "fixed", left: '-150px', top: '-100px', width: '850px', height: '1000px', objectFit: 'cover' }} src={require('../images/background.jpg')} />}
      {loading && <Waiting />}
    </div>
  }
}

export default Page