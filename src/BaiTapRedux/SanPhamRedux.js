import React, { Component } from 'react'

export default class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={sanPham.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Text</p>
        </div>
      </div>

    )
  }
}
