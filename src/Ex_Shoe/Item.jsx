import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { image, name, price } = this.props.data;
    
    return (
      <div className="col-3">
        <img className="w-100" src={image} alt="" />
        <h6>{name}</h6>
        <h6>${price}</h6>

        <button className="btn-success" onClick={() => this.props.handleClickAdd(this.props.data)}>Add</button>
        <button
          className="btn-dark mt-3"
          onClick={() => this.props.handleClickView(this.props.data)}
        >
          View
        </button>
      </div>
    );
  }
}
