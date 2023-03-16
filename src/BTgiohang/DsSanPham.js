import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DSSanPham extends Component {
  render() {
    const { proDuct, themGioHang } = this.props
    return (
      <div className='container'>
        <div className='row'>
          {proDuct.map((sp, index) => {
            return (
              <SanPham themGioHang={themGioHang} key={index} sp={sp} />
            )
          })}
        </div>
      </div>
    )
  }
}
