import React, { Component } from "react";
import Item from "./Item";

export default class extends Component {
  render() {
    return this.props.shoeArray.map((item) => {
      console.log(item);
      return (
          <div className="card text-left container">
            <img className="card-img-top w-25" src={item.image} alt="" />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.price}$</p>
              <button className="btn-warning">Add to carts</button>
            </div>

          <Item />
        </div>
      );
    });
  }
}
