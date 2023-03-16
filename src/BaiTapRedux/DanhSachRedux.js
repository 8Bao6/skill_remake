import React, { Component } from 'react'
import dataSP from '../dataSP.json'
import SanPhamRedux from './SanPhamRedux'
export default class DanhSachRedux extends Component {
  renderSanPham = () => {
    return dataSP.map((sanPham, index) => {
      return <div className='col -4' key={index}>
        <SanPhamRedux sanPham={sanPham} />
      </div>
    })
  }
  render() {
    return (
      <div></div>
    )
  }
}
