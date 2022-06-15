import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {

  render() {
    return (
      <div className='text-center'>
        <img src={loading} style={{height:"110px"}} alt="Loading" />
      </div>
    )
  }
}

export default spinner