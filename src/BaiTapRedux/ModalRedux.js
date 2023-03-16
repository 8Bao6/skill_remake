import React, { Component } from 'react'
//Ke
import { connect, Connect } from 'react-redux'
class ModalRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((sp, index) => {
      return <tr key={index}>
        <td>{sp.maSP}</td>
        <td>{sp.tenSP}</td>
        <td><img src={sp.hinhAnh} width={75} height={50} /></td>
        <td>{sp.giaBan}</td>
        <td>{sp.soLuong}</td>
        <td>{sp.soLuong * sp.giaBan}</td>
      </tr>
    })
  }
  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {this.renderGioHang()}
          </tbody>
        </table>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangReducer.gioHang
  }
}

export default connect(mapStateToProps, null)(ModalRedux)