import React, { Component } from 'react';
import './Result.scss'

class Page extends Component {
  componentDidMount() {
  
  }

  render() {
    return <div className='result'>
      <img src={require('../images/result.png')} />
    </div>
  }
}

export default Page