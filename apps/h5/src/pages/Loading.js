import React, { Component } from 'react';
import CountTo from 'react-count-to';
import './Loading.scss'

class Page extends Component {
    componentDidMount() {
        const { callback, step } = this.props
        setTimeout(() => {
            callback && callback({step})
        }, 1000);
    }

    render() {
        return <div className='loading'>
            <div className='loading__block'>
                <img className="loading__block-image-1" src={require('../images/loading1.png')}/>
                <img className="loading__block-image-2" src={require('../images/loading2.png')}/>
                <div className="loading__block-text">
                    <CountTo to={100} speed={2000} />
                    <span>%</span>
                </div>
            </div>
        </div>
    }
}

export default Page