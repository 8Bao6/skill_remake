import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    let { sp, themGioHang } = this.props;
    return (

      <div className="card col-4">
        <img className="card-img-top" src={sp.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{sp.tenSP}</h4>
          <button className='btn btn-success' onClick={() => themGioHang(sp)}>Add to cart</button>
        </div>
      </div>


    )
  }
}
