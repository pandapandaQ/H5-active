import React, { Component } from 'react';
import CountTo from 'react-count-to';
import './Loading.scss'

let image0 = new Image()
image0.src = require('../images/landing2.png')
let image01 = new Image()
image01.src = require('../images/landing1.png')
let image1 = new Image()
image1.src = require('../images/t2_2.png')
let image2 = new Image()
image2.src = require('../images/bk0.png')
let image3 = new Image()
image3.src = require('../images/t3_1.png')
let image4 = new Image()
image4.src = require('../images/t1_6.png')
let image5 = new Image()
image5.src = require('../images/t2_1.png')
let image6 = new Image()
image6.src = require('../images/mountain2.png')
let image7 = new Image()
image7.src = require('../images/q3_3.png')
let image8 = new Image()
image8.src = require('../images/mountain.png')
let image9 = new Image()
image9.src = require('../images/r2_1.png')
let image10 = new Image()
image10.src = require('../images/r2_2.png')
let image11 = new Image()
image11.src = require('../images/r2_3.png')
let image12 = new Image()
image12.src = require('../images/r2_4.png')
let image13 = new Image()
image13.src = require('../images/t3_3.png')
let image14 = new Image()
image14.src = require('../images/rbk.jpg')
let image15 = new Image()
image15.src = require('../images/q2_1.png')
let image16 = new Image()
image16.src = require('../images/q4_1.png')
let image17 = new Image()
image17.src = require('../images/t1_4.png')
let image18 = new Image()
image18.src = require('../images/t1_5.png')
let image19 = new Image()
image19.src = require('../images/t2_2.png')
let image20 = new Image()
image20.src = require('../images/q3_2.png')
let image21 = new Image()
image21.src = require('../images/t1_2.png')
let image22 = new Image()
image22.src = require('../images/t1_3.png')

class Page extends Component {
    componentDidMount() {
        const { callback, step } = this.props
        let image = new Image()
        image.src = require('../images/background.jpg')
        image.onload = ()=>{
            setTimeout(() => {
                callback && callback({step})
            }, 2200);
        }
    }

    render() {
        return <div className='loading'>
            <div className='loading__block'>
                <img className="loading__block-image-1" src={require('../images/loading1.png')}/>
                <img className="loading__block-image-2" src={require('../images/loading2.png')}/>
                <div className="loading__block-text">
                    <CountTo to={99} speed={2000} />
                    <span>%</span>
                </div>
            </div>
        </div>
    }
}

export default Page