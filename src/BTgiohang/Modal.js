import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiam } = this.props;
    return (

      <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ maxWidth: '800px', width: '800px' }}>
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className='table'>
                <thead>
                  <tr>
                    <td>MÃ SP</td>
                    <td>HÌNH ẢNH</td>
                    <td>TÊN SP</td>
                    <td>SỐ LƯỢNG</td>
                    <td>GIÁ</td>
                    <td>TỔNG TIỀN</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((sp, index) => {
                    return (
                      <tr key={index}>
                        <td>{sp.maSP}</td>
                        <td><img src={sp.hinhAnh} width={50} height={50} /></td>
                        <td>{sp.tenSP}</td>
                        <td className='text-center'>
                          <button className='btn btn-success' onClick={() => tangGiam(sp.maSP, true)}> + </button>
                          {sp.soLuong}
                          <button className='btn btn-success' onClick={() => tangGiam(sp.maSP, false)}> - </button>
                        </td>
                        <td>{sp.giaBan}</td>
                        <td>{sp.giaBan * sp.soLuong}</td>
                        <td><button className='btn btn-danger' onClick={() => xoaGioHang(sp.maSP)}>Delete</button></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
