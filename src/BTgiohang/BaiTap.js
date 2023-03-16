import React, { Component } from 'react'
import dataSP from '../dataSP.json'
import DsSanPham from './DsSanPham'
import Modal from './Modal'
export default class BaiTap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gioHang: []
    }
  }
  themGioHang = (sp) => {
    let spGH = { maSP: sp.maSP, tenSP: sp.tenSP, giaBan: sp.giaBan, hinhAnh: sp.hinhAnh, soLuong: 1 }
    var gioHangUpdate = [...this.state.gioHang]
    let index = gioHangUpdate.findIndex(sp => sp.maSP === spGH.maSP);
    if (index !== -1) {
      gioHangUpdate[index].soLuong += 1
    } else {
      gioHangUpdate.push(spGH)
    }
    this.setState({
      gioHang: gioHangUpdate,
    })
  }
  xoaGioHang = (maSP) => {
    var gioHangUpdate = [...this.state.gioHang]
    let index = gioHangUpdate.findIndex(sp => sp.maSP === maSP)
    if (index !== -1) {
      gioHangUpdate.splice(index, 1)

    }
    this.setState({
      gioHang: gioHangUpdate
    })
  }
  tangGiam = (maSP, tangGiam) => {
    var gioHangUpdate = [...this.state.gioHang]
    let index = gioHangUpdate.findIndex(sp => sp.maSP === maSP)
    if (tangGiam) {
      gioHangUpdate[index].soLuong += 1
    } else {
      if (gioHangUpdate[index].soLuong > 1) {
        gioHangUpdate[index].soLuong -= 1
      }
    }
    this.setState({
      gioHang: gioHangUpdate
    })
  }

  render() {
    let tongSL = this.state.gioHang.reduce((tsl, item, index) => {
      return tsl += item.soLuong;
    }, 0)
    return (
      <div className='container'>
        <h3 className='text-center'>Bài tập Giỏ Hàng</h3>
        <div className='text-right'><span data-toggle="modal" data-target="#modelId" style={{ cursor: 'pointer', fontSize: "17px", fontWeight: 'bold' }}>CART({tongSL})</span></div>
        <DsSanPham themGioHang={this.themGioHang} proDuct={dataSP} />
        <Modal tangGiam={this.tangGiam} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
      </div>
    )
  }
}
