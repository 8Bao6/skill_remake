import React from 'react'

export default function Phim_RFC({ movie, ...restParam }) {

  return (
    <div className="card">
      <img className="card-img-top" src={movie.hinhAnh} alt />
      <div className="card-body">
        <h4 className="card-title">{movie.tenPhim}</h4>
        <p className="card-text">Text</p>
      </div>
    </div>

  )
}
