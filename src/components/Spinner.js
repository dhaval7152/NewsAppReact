import React, { Component } from 'react'
import loading from './loading.gif'
const spinner =()=>{
  return (
    <div className='text-center'>
        <img src={loading} style={{height:"110px",marginTop: "17px",
    border: "2px solid #71718387"}} alt="Loading" />
      </div>
    )
  }

export default spinner