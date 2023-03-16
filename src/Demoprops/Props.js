import React, { Component } from 'react'
import data from '../data.json'
import Phim_RCC from './Phim_RCC';
import Phim_RFC from './Phim_RFC';
export default class Props extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mangPhim: data,
    }
  }
  renderPhim = () => {
    return this.state.mangPhim.map((movie, index) => {
      return (
        <div className='container'>
          <div className='row'>
            <div className=" col-6" key={index}>
              {/* <Phim_RFC movie={movie} /> */}
              <Phim_RCC movie={movie} />
            </div>
          </div>
        </div>
      )

    })
  }
  render() {
    return (
      <div>
        {this.renderPhim()}
      </div>
    )
  }
}
