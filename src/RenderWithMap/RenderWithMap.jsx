import React, { Component } from "react";
import { movieArr } from "./data";

export default class RenderWithMap extends Component {
  renderMovieList = () => {
    return movieArr.map((item) => {
      return (
        <div className="card text-left col-2">
          <img className="card-img-top" style={{height:200, objectFit:"cover"}} src={item.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{item.tenPhim}</h4>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="row container py-3">{this.renderMovieList()}</div>;
  }
}
