import React, { Component } from 'react';

class MyComponent extends Component {

  render() {
    const { data = {} } = this.props;
    return <div className='mountain'>
      <img style={{ position: "fixed", left: '0', bottom: '0', width: '100%', objectFit: 'cover' }} src={require('../images/mountain2.png')} />
    </div>
  }
}

export default MyComponent