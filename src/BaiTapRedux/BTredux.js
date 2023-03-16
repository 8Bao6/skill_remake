import React, { Component } from 'react'
import DanhSachRedux from './DanhSachRedux'
import ModalRedux from './ModalRedux'

export default class BTredux extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>BÀI TẬP REDUX</h3>
        <DanhSachRedux />
        <ModalRedux />
      </div>
    )
  }
}
