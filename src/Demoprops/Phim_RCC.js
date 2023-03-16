import React, { Component } from 'react'

export default class Phim_RCC extends Component {
  constructor (props) {
    super(props);

  }

  render() {
    const { movie } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={movie.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{movie.tenPhim}</h4>
          <p className="card-text">{movie.moTa}</p>
        </div>
      </div>


    )
  }
}
